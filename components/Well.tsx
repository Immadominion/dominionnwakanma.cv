"use client";

import { useEffect, useRef, useState } from "react";
import type { MediaEntry } from "@/lib/media";

// The dark media well from Samuel's project cards. Holds a looping video, a phone,
// a code sample, a screenshot, or a centred app icon.

type Variant = "video" | "phone" | "code" | "image" | "icon";

type Props = {
  variant: Variant;
  m: MediaEntry;
  title: string;
  tint?: string;
  code?: { file: string; lines: string[] };
  big?: boolean;
  eager?: boolean;
  className?: string;
  style?: React.CSSProperties;
};

const reduced = () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function useInView<T extends HTMLElement>(threshold = 0.4) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold });
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return { ref, inView };
}

// Loads and plays only while visible, pauses when it leaves. Off for reduced motion.
function Loop({ src, poster, live }: { src: string; poster: string | null; live: boolean }) {
  const v = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const el = v.current;
    if (!el || reduced()) return;
    if (live) {
      el.preload = "auto";
      el.play().catch(() => {});
    } else el.pause();
  }, [live]);
  return (
    <video ref={v} muted loop playsInline preload="none" poster={poster ?? undefined} aria-hidden="true" tabIndex={-1}>
      <source src={src} type="video/mp4" />
    </video>
  );
}

// Fades in once decoded, so nothing pops. Already-cached images are marked on mount.
function Img({ className, src, eager }: { className: string; src: string; eager?: boolean }) {
  const ref = useRef<HTMLImageElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (el?.complete) el.setAttribute("data-loaded", "");
  }, []);
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      ref={ref}
      className={className}
      src={src}
      alt=""
      data-fade=""
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      onLoad={(e) => e.currentTarget.setAttribute("data-loaded", "")}
    />
  );
}

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
function paint(line: string) {
  return esc(line)
    .replace(/'([^']*)'/g, `<span class="s">'$1'</span>`)
    .replace(/\b(final|await|const|async|return|new)\b/g, `<span class="k">$1</span>`)
    .replace(/\b([A-Z][A-Za-z]+)\b/g, `<span class="t">$1</span>`)
    .replace(/\.([a-z][A-Za-z]*)(?=\()/g, `.<span class="f">$1</span>`);
}

export default function Well({ variant, m, title, tint = "#a1a09a", code, big, eager, className = "", style }: Props) {
  const { ref, inView } = useInView<HTMLDivElement>(0.35);
  const [armed, setArmed] = useState(false);
  useEffect(() => setArmed(!reduced()), []);
  const poster = big ? m.poster : (m.poster800 ?? m.poster);
  const cls = `well ${className} ${armed ? "armed" : ""} ${inView ? "live" : ""}`;
  const vars = { ...style, ["--tint" as string]: tint };

  if (variant === "code" && code) {
    return (
      <div ref={ref} className={cls} style={vars}>
        <div className="code fill">
          <span className="code-file">{code.file}</span>
          <pre aria-label={`Example code using ${title}`}>
            {code.lines.map((l, i) => (
              <span key={i} className="ln" style={{ transitionDelay: `${i * 45}ms` }} dangerouslySetInnerHTML={{ __html: paint(l) || "&nbsp;" }} />
            ))}
          </pre>
        </div>
      </div>
    );
  }

  if (variant === "icon" && m.icon) {
    return (
      <div ref={ref} className={cls} style={vars}>
        <Img className="icon" src={m.icon} eager={eager} />
      </div>
    );
  }

  return (
    <div ref={ref} className={cls} style={vars}>
      {m.video && (variant === "video" || variant === "phone") ? (
        <Loop src={m.video} poster={poster} live={inView} />
      ) : poster ? (
        <Img className="cover" src={poster} eager={eager} />
      ) : m.icon ? (
        <Img className="icon" src={m.icon} />
      ) : (
        <span className="secondary">{title}</span>
      )}
      {variant === "phone" && (m.phoneVideo || m.phonePoster) && (
        <div className="phone" aria-hidden="true">
          {m.phoneVideo ? (
            <Loop src={m.phoneVideo} poster={m.phonePoster} live={inView} />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={m.phonePoster!} alt="" loading="lazy" />
          )}
        </div>
      )}
    </div>
  );
}
