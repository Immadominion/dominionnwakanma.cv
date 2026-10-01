import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Well from "@/components/Well";
import { featured, site } from "@/lib/data";
import { media, type MediaEntry } from "@/lib/media";

export function generateStaticParams() {
  return featured.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = featured.find((f) => f.slug === slug);
  if (!p) return {};
  const title = `${p.title} · ${site.name}`;
  const image = { url: "/og.png", width: 1200, height: 630, alt: "Selected work by Dominion Nwakanma" };
  return {
    title: p.title,
    description: p.summary,
    alternates: { canonical: `/work/${p.slug}` },
    openGraph: { title, description: p.summary, url: `/work/${p.slug}`, siteName: site.name, type: "website", images: [image] },
    twitter: { card: "summary_large_image", creator: "@HeIsJoel0x", title, description: p.summary, images: [image] },
  };
}

const st = (k: number) => ({ ["--i" as string]: k }) as React.CSSProperties;

export default async function Case({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const idx = featured.findIndex((f) => f.slug === slug);
  if (idx < 0) notFound();
  const p = featured[idx];
  const nx = featured[(idx + 1) % featured.length];
  const m = media(p.slug);
  const blank: MediaEntry = { poster: null, poster800: null, video: null, phoneVideo: null, phonePoster: null, shots: [], icon: null, altVideo: null, altPoster: null };
  const gallery: { key: string; m: MediaEntry; video: boolean }[] = [];
  if (m.altVideo) gallery.push({ key: m.altVideo, video: true, m: { ...blank, video: m.altVideo, poster: m.altPoster, poster800: m.altPoster } });
  for (const s of m.shots) if (s !== m.poster) gallery.push({ key: s, video: false, m: { ...blank, poster: s, poster800: s.replace(/\.webp$/, "-800.webp") } });

  return (
    <>
      <Nav back={{ href: "/#projects", label: "Index" }} />
      <main className="main">
        <article className="stack" style={{ gap: "3rem" }}>
          <div className="intro">
            <h1 className="ai" style={st(0)}>
              {p.title}
            </h1>
            <p className="secondary ai" style={st(1)}>
              {p.summary}
            </p>
          </div>

          <div className="case-media ai" style={st(2)}>
            <Well variant={p.media} m={m} title={p.title} tint={p.accent} code={p.code} big eager />
            {p.credit && (
              <p className="secondary" style={{ marginTop: "0.5rem" }}>
                {p.credit}
              </p>
            )}
          </div>

          <dl className="facts ai" style={st(3)}>
            <dt>Role</dt>
            <dd>{p.role}</dd>
            <dt>When</dt>
            <dd>
              {p.when} <span className="secondary">· {p.proof.label}</span>
            </dd>
            <dt>Stack</dt>
            <dd>{p.stack.join(", ")}</dd>
            <dt>Links</dt>
            <dd>
              {p.links.map((l, k) => (
                <span key={l.href}>
                  <a className="tl" href={l.href} target="_blank" rel="noopener">
                    {l.label}
                  </a>
                  {k < p.links.length - 1 ? ", " : ""}
                </span>
              ))}
            </dd>
          </dl>

          <div className="intro ai" style={st(4)}>
            <p>{p.intro}</p>
            <ol className="points">
              {p.points.map((pt, k) => (
                <li key={k}>
                  <span>{pt}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="statline ai" style={st(5)}>
            {p.stats.map((s) => (
              <div key={s.label}>
                <b style={{ fontWeight: 500 }} className="tnum">
                  {s.value}
                </b>
                <span>{s.label}</span>
              </div>
            ))}
          </div>

          {gallery.length > 0 && (
            <div className="gallery">
              {gallery.map((g) => (
                <Well key={g.key} variant={g.video ? "video" : "image"} m={g.m} title={p.title} />
              ))}
            </div>
          )}

          <ol className="rows">
            <li>
              <Link className="row" href={`/work/${nx.slug}`}>
                <div className="row-main">
                  <span className="secondary">Next</span>
                  <span>{nx.title}</span>
                </div>
                <span className="row-end arrow">→</span>
              </Link>
            </li>
          </ol>
        </article>
      </main>
      <Footer />
    </>
  );
}
