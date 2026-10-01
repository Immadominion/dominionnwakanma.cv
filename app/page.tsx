import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Stage from "@/components/Stage";
import ProjectCard from "@/components/ProjectCard";
import Well from "@/components/Well";
import { media } from "@/lib/media";
import {
  site, featured, more, packages, merged, articles, videos, recognition, talks, jobs, education,
  community, hack4futo, mentions, vouches,
} from "@/lib/data";

const nf = new Intl.NumberFormat("en-US");

function Ext({ href, children, icon }: { href: string; children: React.ReactNode; icon?: string }) {
  return (
    <a className={`tl ${icon ? "tl-icon" : ""}`} href={href} target="_blank" rel="noopener">
      {icon && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={icon} alt="" width={14} height={14} />
      )}
      <span>{children}</span>
    </a>
  );
}

// Order of entrance: each block gets the next index, so the page rises in 90ms steps.
let n = 0;
const i = () => ({ ["--i" as string]: n++ }) as React.CSSProperties;

export default function Home() {
  n = 0;
  const items = featured.map((p) => ({ ...p, m: media(p.slug) }));
  const minis = more.map((s) => ({ ...s, m: media(s.slug) }));
  const pkgs = packages.flatMap((g) => g.pkgs.map((p) => ({ ...p, eco: g.eco }))).sort((a, b) => b.downloads - a.downloads);
  const totalDl = pkgs.reduce((a, p) => a + p.downloads, 0);
  const h4f = featured.find((f) => f.slug === "hack4futo")!;
  const trimmyIcon = media("trimmy").icon ?? undefined;
  const chumIcon = media("chumbucket").icon ?? undefined;

  return (
    <>
      <Nav />
      <Stage
        intro={
          <div className="intro">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="avatar ai" style={i()} src="/avatar.webp" alt="Dominion Nwakanma" width={28} height={28} />
          <h1 className="ai" style={i()}>
            {site.name}
          </h1>
          <p className="secondary ai" style={i()}>
            Mobile and product engineer, currently building <Ext href="https://trimmy.xyz" icon={trimmyIcon}>Trimmy</Ext> and{" "}
            <Ext href="https://www.chumbucket.fun" icon={chumIcon}>Chumbucket</Ext>.
          </p>
          <p className="secondary ai" style={i()}>
            I build apps people use, the open-source SDKs other developers build on, and the courses that teach them. I wrote{" "}
            <Ext href="https://learn.blueshift.gg/en/paths/solana-mobile-mastery">Solana Mobile Mastery</Ext> for Blueshift and publish 13
            packages on <Ext href="https://pub.dev/packages/coral_xyz">pub.dev</Ext>.
          </p>
          <p className="secondary ai" style={i()}>
            I convened <Link className="tl" href="/work/hack4futo">Hack4FUTO 5.0</Link>, my university&apos;s student hackathon, led the mobile
            track at GDSC FUTO, and I&apos;m a Solana AllStars ambassador in Nigeria.
          </p>
          <p className="secondary ai" style={i()}>
            Excited by interfaces that feel fast and human: how a sheet settles, how a list scrolls, what a button says. Software
            engineering graduate from FUTO, based in Nigeria.
          </p>
          <ul className="links dimlist ai" style={i()}>
            <li><Ext href="https://x.com/HeIsJoel0x">𝕏</Ext></li>
            <li><a className="tl" href={`mailto:${site.email}`}>Email</a></li>
            <li><Ext href="https://github.com/Immadominion">GitHub</Ext></li>
            <li><Ext href="https://www.linkedin.com/in/imma-dominion-b4287725a/">LinkedIn</Ext></li>
            <li><Ext href="https://www.youtube.com/@immadominion">YouTube</Ext></li>
            <li><Link className="tl" href="/cv">CV</Link></li>
          </ul>
        </div>
        }
        rows={[
          {
            id: "projects",
            label: "Projects",
            titles: items.map((p) => p.title),
            cards: items.map((p, k) => (
          <ProjectCard
            key={p.slug}
            title={p.title}
            year={p.year}
            summary={p.summary}
            href={`/work/${p.slug}`}
            m={p.m}
            variant={p.media}
            tint={p.accent}
            code={p.code}
            eager={k === 0}
          />
        )),
          },
          {
            id: "more",
            label: "More projects",
            titles: minis.map((s) => s.title),
            cards: minis.map((s) => (
          <ProjectCard
            key={s.slug}
            title={s.title}
            year={s.year}
            summary={s.summary}
            href={s.href}
            external
            m={s.m}
            variant={s.m.poster ? "image" : "icon"}
          />
        )),
            end: (
          <Link href="/archive" className="srow-end">
            <b>Everything else</b>
            <span>
              The full index, by year <span className="arrow">→</span>
            </span>
          </Link>
            ),
          },
        ]}
      />

      <main className="main" style={{ paddingTop: "5rem" }}>
        <div className="stack">
          {/* ---------- community ---------- */}
          <section className="section" id="community" aria-labelledby="h-community">
            <h2 id="h-community">Community</h2>
            <div className="card" style={{ margin: "0 -1rem" }}>
              <Link href="/work/hack4futo" className="card-link" aria-label="Hack4FUTO 5.0">
                <span className="sr-only">Hack4FUTO 5.0</span>
              </Link>
              <Well variant="image" m={media("hack4futo")} title={h4f.title} />
              <div className="card-text">
                <div className="card-title">
                  <h3>Hack4FUTO 5.0</h3>
                  <span>2026</span>
                </div>
                <p>
                  {hack4futo.summary} Sponsors included {hack4futo.sponsors}.
                </p>
              </div>
            </div>
            <ol className="rows dimlist">
              {community.slice(1).map((r) => {
                const body = (
                  <>
                    <div className="row-main">
                      <span>{r.title}</span>
                      <span className="secondary">{r.org}</span>
                    </div>
                    <span className="row-end">{r.when}</span>
                  </>
                );
                return (
                  <li key={r.org}>
                    {r.href ? (
                      <a className="row" href={r.href} target="_blank" rel="noopener">
                        {body}
                      </a>
                    ) : (
                      <div className="row">{body}</div>
                    )}
                  </li>
                );
              })}
            </ol>
          </section>

          {/* ---------- kind words ---------- */}
          <section className="section section-tight" id="kind-words" aria-labelledby="h-kind">
            <h2 id="h-kind">Kind words</h2>
            <ol className="rows dimlist">
              {vouches.map((v) => (
                <li key={v.href}>
                  <a className="row quote-row" href={v.href} target="_blank" rel="noopener">
                    <div className="row-main">
                      <span>&ldquo;{v.quote}&rdquo;</span>
                      <span className="secondary">
                        {v.name}, {v.role}
                      </span>
                    </div>
                    <span className="row-end">{v.when}</span>
                  </a>
                </li>
              ))}
            </ol>
          </section>

          {/* ---------- open source ---------- */}
          <section className="section section-tight" id="open-source" aria-labelledby="h-os">
            <h2 id="h-os">Open source · {nf.format(totalDl)} downloads this year</h2>
            <ol className="rows dimlist">
              {pkgs.map((p) => (
                <li key={p.name}>
                  <a className="row" href={p.href} target="_blank" rel="noopener">
                    <div className="row-main">
                      <span>{p.name}</span>
                      <span className="secondary">{p.note}</span>
                    </div>
                    <span className="row-end">{nf.format(p.downloads)}</span>
                  </a>
                </li>
              ))}
            </ol>
            <p className="secondary" style={{ marginTop: "0.5rem" }}>
              Merged into{" "}
              {merged.map((m, k) => (
                <span key={m.href}>
                  <Ext href={m.href}>{m.label}</Ext>
                  {k < merged.length - 2 ? ", " : k === merged.length - 2 ? " and " : "."}
                </span>
              ))}
            </p>
          </section>

          {/* ---------- recognition ---------- */}
          <section className="section section-tight" id="recognition" aria-labelledby="h-rec">
            <h2 id="h-rec">Recognition</h2>
            <ol className="rows dimlist">
              {recognition.map((r) => {
                const body = (
                  <>
                    <div className="row-main">
                      <span>{r.what}</span>
                      <span className="secondary">{r.detail}</span>
                    </div>
                    <span className="row-end">{r.when}</span>
                  </>
                );
                return (
                  <li key={r.detail}>
                    {r.href ? (
                      <a className="row" href={r.href} target="_blank" rel="noopener">
                        {body}
                      </a>
                    ) : (
                      <div className="row">{body}</div>
                    )}
                  </li>
                );
              })}
            </ol>
          </section>

          {/* ---------- mentions ---------- */}
          <section className="section section-tight" id="mentions" aria-labelledby="h-men">
            <h2 id="h-men">Mentions</h2>
            <ol className="rows dimlist">
              {mentions.map((m) => (
                <li key={m.href}>
                  <a className="row" href={m.href} target="_blank" rel="noopener">
                    <div className="row-main">
                      <span>{m.title}</span>
                      <span className="secondary">{m.source}</span>
                    </div>
                    <span className="row-end">{m.when}</span>
                  </a>
                </li>
              ))}
            </ol>
          </section>

          {/* ---------- writing and video ---------- */}
          <section className="section section-tight" id="writing" aria-labelledby="h-wr">
            <h2 id="h-wr">Writing</h2>
            <ol className="rows dimlist">
              {articles.slice(0, 6).map((a) => (
                <li key={a.href}>
                  <a className="row" href={a.href} target="_blank" rel="noopener">
                    <div className="row-main">{a.title}</div>
                    <span className="row-end">{a.date}</span>
                  </a>
                </li>
              ))}
              <li>
                <a className="row row-more" href="https://medium.com/@immadominion" target="_blank" rel="noopener">
                  <span>All {articles.length} on Medium</span>
                  <span className="arrow" aria-hidden="true">→</span>
                </a>
              </li>
            </ol>
          </section>

          <section className="section section-tight" id="videos" aria-labelledby="h-vid">
            <h2 id="h-vid">Videos</h2>
            <ol className="rows dimlist">
              {videos.map((v) => (
                <li key={v.id}>
                  <a className="row" href={`https://www.youtube.com/watch?v=${v.id}`} target="_blank" rel="noopener">
                    <div className="row-main">{v.title}</div>
                    <span className="row-end">{v.views} views</span>
                  </a>
                </li>
              ))}
              <li>
                <a className="row row-more" href="https://www.youtube.com/@immadominion" target="_blank" rel="noopener">
                  <span>All 30 on YouTube</span>
                  <span className="arrow" aria-hidden="true">→</span>
                </a>
              </li>
            </ol>
          </section>

          <section className="section section-tight" id="talks" aria-labelledby="h-talks">
            <h2 id="h-talks">Talks and events</h2>
            <ol className="rows dimlist">
              {talks.map((t) => {
                const body = (
                  <>
                    <div className="row-main">
                      <span>{t.title}</span>
                      <span className="secondary">{t.where}</span>
                    </div>
                    <span className="row-end">{t.when}</span>
                  </>
                );
                return (
                  <li key={t.title}>
                    {t.href ? (
                      <a className="row" href={t.href} target="_blank" rel="noopener">
                        {body}
                      </a>
                    ) : (
                      <div className="row">{body}</div>
                    )}
                  </li>
                );
              })}
            </ol>
          </section>

          {/* ---------- experience ---------- */}
          <section className="section section-tight" id="experience" aria-labelledby="h-exp">
            <h2 id="h-exp">Experience</h2>
            <ol className="rows">
              {jobs.map((j) => (
                <li key={j.role + j.org}>
                  <div className="row">
                    <div className="row-main">
                      <span>{j.role}</span>
                      <span className="secondary">{j.org}</span>
                    </div>
                    <span className="row-end">{j.when}</span>
                  </div>
                </li>
              ))}
              <li>
                <div className="row">
                  <div className="row-main">
                    <span>{education.degree}</span>
                    <span className="secondary">{education.school}</span>
                  </div>
                  <span className="row-end">{education.when}</span>
                </div>
              </li>
              <li>
                <Link className="row row-more" href="/cv">
                  <span>Full CV</span>
                  <span className="arrow" aria-hidden="true">→</span>
                </Link>
              </li>
            </ol>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
