"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";

// One pinned scene for both project rows.
//
// Scroll budget, top to bottom:
//   reveal   the first card waits alone with a nudge; the first scroll staggers the rest in
//   row 1    the row travels left under the intro, which stays put
//   handoff  the intro and row 1 fade up and away while "More projects" rises to the centre
//   row 2    the row travels right, cards arriving from the left
// The card at the focus point springs to full size; the rest settle slightly smaller and dimmer.
// Phones, short windows and reduced motion get two native swipe rows with the same focus effect.

const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const pad = (n: number) => String(n).padStart(2, "0");
const useIso = typeof window === "undefined" ? useEffect : useLayoutEffect;
// Emil's ease-in-out, sampled as a function for scroll-linked values.
const easeInOut = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

const WELL_MAX = 283;
const WELL_MIN = 170;
const REVEAL = 140;
const SPEED = 1.35;
const FOLLOW_MS = 70; // how softly the scene trails the scroll
const SPRING_K = 260; // focus spring stiffness
const SPRING_ZETA = 0.78; // < 1 gives a very slight settle

export type StageRow = { id: string; label: string; cards: React.ReactNode[]; titles: string[]; end?: React.ReactNode };

type Geo = {
  d1: number;
  d2: number;
  L1: number;
  H: number;
  L2: number;
  items1: { el: HTMLElement; focus: HTMLElement; c: number }[];
  items2: { el: HTMLElement; focus: HTMLElement; c: number }[];
  f1: number;
  f2: number;
  span1: number;
  span2: number;
};

export default function Stage({ intro, rows }: { intro: React.ReactNode; rows: [StageRow, StageRow] }) {
  const [r1, r2] = rows;
  const stage = useRef<HTMLElement>(null);
  const layerA = useRef<HTMLDivElement>(null);
  const layerB = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const head1 = useRef<HTMLDivElement>(null);
  const head2 = useRef<HTMLDivElement>(null);
  const track1 = useRef<HTMLDivElement>(null);
  const track2 = useRef<HTMLDivElement>(null);
  const geo = useRef<Geo | null>(null);
  const motion = useRef({ s: 0, last: 0, springs: new Map<HTMLElement, { x: number; v: number }>() });

  const [mode, setMode] = useState<"init" | "pin" | "swipe">("init");
  const [wh1, setWh1] = useState(WELL_MAX);
  const [wh2, setWh2] = useState(WELL_MAX);
  const [rev1, setRev1] = useState(false);
  const [rev2, setRev2] = useState(false);
  const [act1, setAct1] = useState(0);
  const [act2, setAct2] = useState(0);
  const flags = useRef({ rev1: false, rev2: false, act1: 0, act2: 0 });

  // Row 2 is laid out end-first so its first card sits at the far right and the row travels right.
  const items2 = [...(r2.end ? [r2.end] : []), ...[...r2.cards].reverse()];
  const n2 = items2.length;
  const toCard2 = (dom: number) => n2 - 1 - dom; // reading index (0 is the first card shown)

  const decide = useCallback(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || window.innerWidth < 760) {
      setMode("swipe");
      setWh1(WELL_MAX);
      setWh2(WELL_MAX);
      return;
    }
    const used1 = (introRef.current?.offsetHeight ?? 0) + (head1.current?.offsetHeight ?? 0) + 140;
    const h1 = Math.floor(clamp(window.innerHeight - used1, 0, WELL_MAX));
    const h2 = Math.floor(clamp(window.innerHeight - (head2.current?.offsetHeight ?? 40) - 260, 0, WELL_MAX + 40));
    if (h1 < WELL_MIN) {
      setMode("swipe");
      setWh1(WELL_MAX);
      setWh2(WELL_MAX);
    } else {
      setMode("pin");
      setWh1(h1);
      setWh2(Math.max(h1, Math.min(h2, WELL_MAX + 40)));
    }
  }, []);

  const measure = useCallback(() => {
    const st = stage.current;
    const t1 = track1.current;
    const t2 = track2.current;
    if (!st || !t1 || !t2) return;
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const collect = (t: HTMLElement) =>
      Array.from(t.querySelectorAll<HTMLElement>(":scope > .row-item")).map((el) => ({
        el,
        focus: el.querySelector<HTMLElement>(".focus")!,
        c: el.offsetLeft + el.offsetWidth / 2,
      }));
    const items1 = collect(t1);
    const items2 = collect(t2);
    const cw1 = items1[0]?.el.offsetWidth ?? 0;
    const cw2 = items2[items2.length - 1]?.el.offsetWidth ?? 0;
    const pad1 = parseFloat(getComputedStyle(t1).paddingLeft) || 0;
    const d1 = Math.max(0, t1.scrollWidth - vw);
    const d2 = Math.max(0, t2.scrollWidth - vw);
    const L1 = d1 / SPEED;
    const H = Math.round(vh * 0.85);
    const L2 = d2 / SPEED;
    geo.current = {
      d1,
      d2,
      L1,
      H,
      L2,
      items1,
      items2,
      f1: pad1 + cw1 / 2, // row 1 focuses on the column edge
      f2: vw / 2, // row 2 focuses on the centre of the screen
      span1: cw1,
      span2: cw2,
    };
    st.style.height = mode === "pin" ? `${REVEAL + L1 + H + L2 + 80 + vh}px` : "";
    if (mode !== "pin") {
      t1.style.transform = "";
      t2.style.transform = "";
      if (layerA.current) Object.assign(layerA.current.style, { opacity: "", transform: "", filter: "", visibility: "", pointerEvents: "" });
      if (layerB.current) Object.assign(layerB.current.style, { opacity: "", transform: "", filter: "", visibility: "", pointerEvents: "" });
    }
  }, [mode]);

  // Per-frame: follow the scroll softly, place both rows, spring the focus.
  const frame = useCallback(
    (now: number) => {
      const st = stage.current;
      const g = geo.current;
      if (!st || !g || mode === "init") return;
      const m = motion.current;
      const dt = Math.min(0.05, m.last ? (now - m.last) / 1000 : 0.016);
      m.last = now;
      const f = flags.current;

      const springTo = (el: HTMLElement, target: number) => {
        let sp = m.springs.get(el);
        if (!sp) {
          sp = { x: target, v: 0 };
          m.springs.set(el, sp);
        }
        const c = 2 * Math.sqrt(SPRING_K) * SPRING_ZETA;
        sp.v += (SPRING_K * (target - sp.x) - c * sp.v) * dt;
        sp.x += sp.v * dt;
        return sp.x;
      };
      const focusRow = (items: Geo["items1"], x: number, F: number, span: number, dim: number) => {
        let best = 0;
        let bestD = Infinity;
        items.forEach((it, k) => {
          const d = Math.abs(it.c - x - F) / (span || 1);
          if (d < bestD) {
            bestD = d;
            best = k;
          }
          const w = clamp(d); // 0 in focus, 1 one card away or more
          const sc = springTo(it.focus, 1 - 0.07 * w);
          it.focus.style.transform = `scale(${sc.toFixed(4)})`;
          it.focus.style.opacity = (1 - dim * w).toFixed(3);
        });
        return best;
      };

      if (mode === "swipe") {
        const o1 = track1.current?.parentElement;
        const o2 = track2.current?.parentElement;
        const a = o1 ? focusRow(g.items1, o1.scrollLeft, g.f1, g.span1, 0.35) : 0;
        const b = o2 ? focusRow(g.items2, o2.scrollLeft, g.f1, g.span2, 0.35) : 0;
        if (a !== f.act1) setAct1((f.act1 = a));
        if (toCard2(b) !== f.act2) setAct2((f.act2 = toCard2(b)));
        return;
      }

      const target = -st.getBoundingClientRect().top;
      m.s += (target - m.s) * (1 - Math.exp(-(dt * 1000) / FOLLOW_MS));
      if (Math.abs(target - m.s) < 0.05) m.s = target;
      const s = m.s;

      if (!f.rev1 && window.scrollY > 4) setRev1((f.rev1 = true));

      const t1 = clamp((s - REVEAL) / (g.L1 || 1));
      const x1 = t1 * g.d1;
      track1.current!.style.transform = `translate3d(${-x1}px,0,0)`;

      // Handoff: the intro and row 1 leave first, then row 2 arrives. They never share the screen
      // at full strength; a light blur covers the swap.
      const h = clamp((s - REVEAL - g.L1) / g.H);
      const out = easeInOut(clamp(h / 0.45));
      const inn = easeInOut(clamp((h - 0.4) / 0.6));
      Object.assign(layerA.current!.style, {
        opacity: String(1 - out),
        transform: `translate3d(0,${(-40 * out).toFixed(2)}px,0)`,
        filter: out > 0.01 && out < 0.99 ? `blur(${(6 * out).toFixed(2)}px)` : "",
        visibility: out >= 1 ? "hidden" : "",
        pointerEvents: h > 0.5 ? "none" : "",
      });
      Object.assign(layerB.current!.style, {
        opacity: String(inn),
        transform: `translate3d(0,${(64 * (1 - inn)).toFixed(2)}px,0)`,
        filter: inn > 0.01 && inn < 0.99 ? `blur(${(6 * (1 - inn)).toFixed(2)}px)` : "",
        visibility: inn <= 0 ? "hidden" : "",
        pointerEvents: h > 0.5 ? "" : "none",
      });
      if (!f.rev2 && h > 0.45) setRev2((f.rev2 = true));

      const t2 = clamp((s - REVEAL - g.L1 - g.H) / (g.L2 || 1));
      const x2 = (1 - t2) * g.d2;
      track2.current!.style.transform = `translate3d(${-x2}px,0,0)`;

      const a = focusRow(g.items1, x1, g.f1, g.span1, 0.4);
      const b = focusRow(g.items2, x2, g.f2, g.span2, 0.5);
      if (a !== f.act1) setAct1((f.act1 = a));
      if (toCard2(b) !== f.act2) setAct2((f.act2 = toCard2(b)));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [mode, n2],
  );

  useIso(() => {
    decide();
  }, [decide]);

  useIso(() => {
    measure();
    let raf = 0;
    let running = false;
    const loop = (now: number) => {
      frame(now);
      raf = requestAnimationFrame(loop);
    };
    const start = () => {
      if (running) return;
      running = true;
      motion.current.last = 0;
      motion.current.s = -(stage.current?.getBoundingClientRect().top ?? 0);
      raf = requestAnimationFrame(loop);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };
    // Only animate while the scene is on screen.
    const io = new IntersectionObserver(([e]) => (e.isIntersecting ? start() : stop()), { rootMargin: "200px 0px" });
    if (stage.current) io.observe(stage.current);
    const ro = new ResizeObserver(() => {
      decide();
      measure();
    });
    if (track1.current) ro.observe(track1.current);
    if (introRef.current) ro.observe(introRef.current);
    const onResize = () => {
      decide();
      measure();
    };
    window.addEventListener("resize", onResize);
    // Swipe rows reveal as they come into view.
    let io2: IntersectionObserver | undefined;
    if (mode === "init") return () => {
      stop();
      io.disconnect();
      ro.disconnect();
      window.removeEventListener("resize", onResize);
    };
    if (mode === "swipe") {
      setRev1((flags.current.rev1 = true));
      io2 = new IntersectionObserver(([e]) => e.isIntersecting && setRev2((flags.current.rev2 = true)), { threshold: 0.3 });
      if (layerB.current) io2.observe(layerB.current);
      const o2 = track2.current?.parentElement;
      if (o2) o2.scrollLeft = o2.scrollWidth; // start row 2 on its first card
    }
    return () => {
      stop();
      io.disconnect();
      io2?.disconnect();
      ro.disconnect();
      window.removeEventListener("resize", onResize);
    };
  }, [measure, frame, decide, mode]);

  // Scroll so a row's card lands in focus. Used by the ticks and by keyboard focus.
  const goTo = useCallback(
    (row: 1 | 2, dom: number) => {
      const st = stage.current;
      const g = geo.current;
      if (!st || !g) return;
      if (mode !== "pin") {
        const t = (row === 1 ? track1 : track2).current;
        const it = (row === 1 ? g.items1 : g.items2)[dom];
        t?.parentElement?.scrollTo({ left: it ? it.c - g.f1 : 0, behavior: "smooth" });
        return;
      }
      const top = window.scrollY + st.getBoundingClientRect().top;
      let y = top;
      if (row === 1) {
        const x = clamp(g.items1[dom].c - g.f1, 0, g.d1);
        y += REVEAL + x / SPEED + 1;
        setRev1((flags.current.rev1 = true));
      } else {
        const x = clamp(g.items2[dom].c - g.f2, 0, g.d2);
        y += REVEAL + g.L1 + g.H + (g.d2 - x) / SPEED + 1;
      }
      if (window.__lenis) window.__lenis.scrollTo(y, { duration: 1.1 });
      else window.scrollTo({ top: y, behavior: "smooth" });
    },
    [mode],
  );

  const onFocus = (row: 1 | 2) => (e: React.FocusEvent) => {
    const it = (e.target as HTMLElement).closest<HTMLElement>(".row-item");
    if (it && mode === "pin") goTo(row, Number(it.dataset.i));
  };

  return (
    <section
      ref={stage}
      className="stage"
      data-mode={mode}
      aria-label="Projects"
      style={{ ["--wh1" as string]: `${wh1}px`, ["--wh2" as string]: `${wh2}px` }}
    >
      <div className="stage-frame">
        <div ref={layerA} className="stage-a">
          <div ref={introRef} className="stage-intro">
            {intro}
          </div>
          <div ref={head1} className="row-head" id={r1.id}>
            <h2>{r1.label}</h2>
            <div className="row-count">
              <span className="tnum" aria-live="polite">
                {pad(act1 + 1)} / {pad(r1.cards.length)}
              </span>
              <div className="ticks" role="group" aria-label={`Jump within ${r1.label}`}>
                {r1.titles.map((t, k) => (
                  <button key={t} className={`tick ${k === act1 ? "on" : ""}`} aria-label={`Go to ${t}`} tabIndex={-1} onClick={() => goTo(1, k)} />
                ))}
              </div>
            </div>
          </div>
          <div className="row-outer">
            <div ref={track1} className="row-track row-1" data-revealed={rev1} onFocus={onFocus(1)}>
              {r1.cards.map((node, k) => (
                <div key={k} className="row-item" data-i={k} data-first={k === 0 ? "" : undefined} style={{ ["--d" as string]: `${Math.max(0, k - 1) * 60}ms` }}>
                  <div className="focus">{node}</div>
                </div>
              ))}
            </div>
            <div className="nudge" data-hide={rev1} aria-hidden="true">
              <span>Scroll</span>
              <svg viewBox="0 0 16 16" fill="none">
                <path d="M8 3v9m0 0-3.5-3.5M8 12l3.5-3.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>

        <div ref={layerB} className="stage-b">
          <div ref={head2} className="row-head" id={r2.id}>
            <h2>{r2.label}</h2>
            <div className="row-count">
              <span className="tnum" aria-live="polite">
                {pad(Math.min(act2, r2.cards.length - 1) + 1)} / {pad(r2.cards.length)}
              </span>
            </div>
          </div>
          <div className="row-outer">
            <div ref={track2} className="row-track row-2" data-revealed={rev2} onFocus={onFocus(2)}>
              {items2.map((node, d) => {
                const k = toCard2(d);
                return (
                  <div key={d} className="row-item" data-i={d} data-first={k === 0 ? "" : undefined} style={{ ["--d" as string]: `${Math.max(0, k - 1) * 45}ms` }}>
                    <div className="focus">{node}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
