import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { site, fitMobile, fitProduct, firstMonth, vouches, nousPost, type Fit } from "@/lib/data";

const title = "Dominion Nwakanma · For Nous Research";
const description = "A 75-second film, real projects and public contributions for Nous Research's Mobile and Product engineering roles.";

export const metadata: Metadata = {
  title: "For Nous Research",
  description,
  alternates: { canonical: "/nous" },
  robots: { index: false, follow: true },
  openGraph: {
    title,
    description,
    url: `${site.url}/nous`,
    siteName: site.name,
    type: "website",
    images: [{ url: `${site.url}/og/nous.png`, width: 1200, height: 630, alt: title }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: "@HeIsJoel0x",
    images: [`${site.url}/og/nous.png`],
  },
};

const st = (k: number) => ({ ["--i" as string]: k }) as React.CSSProperties;

function FitList({ items }: { items: Fit[] }) {
  return (
    <ol className="fit">
      {items.map((f) => (
        <li key={f.ask}>
          <p className="secondary">{f.ask}</p>
          <p>{f.proof}</p>
          {f.links && (
            <p className="fit-links">
              {f.links.map((l) =>
                l.href.startsWith("/") ? (
                  <Link key={l.href} className="tl" href={l.href}>
                    {l.label}
                  </Link>
                ) : (
                  <a key={l.href} className="tl" href={l.href} target="_blank" rel="noopener">
                    {l.label}
                  </a>
                ),
              )}
            </p>
          )}
        </li>
      ))}
    </ol>
  );
}

export default function Nous() {
  return (
    <>
      <Nav back={{ href: "/", label: "Home" }} />
      <main className="main">
        <div className="stack">
          <div className="intro">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="avatar ai" style={st(0)} src="/avatar.webp" alt="Dominion Nwakanma" width={28} height={28} />
            <h1 className="ai" style={st(1)}>
              For Nous Research
            </h1>
            <p className="secondary ai" style={st(2)}>
              I&apos;m Dominion. I build the app, the server behind it, and the small details people feel when they use it.
              I&apos;m applying for Software Engineer, Mobile and Software Engineer, Product.
            </p>
            <p className="secondary ai" style={st(3)}>
              Teknium asked for taste in the mobile app. Here is mine: a 75-second film of the products I have built,
              followed by the work behind them.
            </p>
            <ul className="links dimlist ai" style={st(4)} aria-label="Application materials">
              <li><a className="tl" href="#mobile">Mobile work</a></li>
              <li><a className="tl" href="#product">Product work</a></li>
              <li><a className="tl" href="/Dominion-Nwakanma-CV-Mobile.pdf">Mobile CV (PDF)</a></li>
              <li><a className="tl" href="/Dominion-Nwakanma-CV-Product.pdf">Product CV (PDF)</a></li>
            </ul>
          </div>

          <figure className="film ai" style={st(5)}>
            <div className="well film-well">
              <video controls playsInline preload="metadata" poster="/media/nous-film.webp" aria-label="A 75-second tour of Dominion's apps, websites and open-source work">
                <source src="/media/nous-film.mp4" type="video/mp4" />
                <a href="/media/nous-film.mp4">Watch the application film</a>
              </video>
            </div>
            <figcaption className="secondary">
              Real app screens, websites and open-source work. Leo from Blueshift and other developers responded to the application on X.{" "}
              <a className="tl" href={nousPost.href} target="_blank" rel="noopener">
                See the post
              </a>
              .
            </figcaption>
          </figure>

          <section className="section" id="mobile" aria-labelledby="mobile-title">
            <h2 id="mobile-title">Software Engineer, Mobile</h2>
            <FitList items={fitMobile} />
          </section>

          <section className="section" id="product" aria-labelledby="product-title">
            <h2 id="product-title">Software Engineer, Product</h2>
            <FitList items={fitProduct} />
          </section>

          <section className="section section-tight">
            <h2>Where I would start</h2>
            <ol className="rows">
              {firstMonth.map((w) => (
                <li key={w.when}>
                  <div className="row" style={{ alignItems: "baseline" }}>
                    <span className="secondary" style={{ width: "7.5rem", flexShrink: 0 }}>
                      {w.when}
                    </span>
                    <span className="row-main">{w.what}</span>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section className="section section-tight">
            <h2>What people say</h2>
            <p className="secondary">Public posts from developers in my field. Leo, Alex and Dave responded to this application; Anmol&apos;s post is from October 2025. Each quote links to its source.</p>
            <ol className="rows dimlist">
              {vouches.map((v) => (
                <li key={v.href}>
                  <a className="row" href={v.href} target="_blank" rel="noopener">
                    <div className="row-main" style={{ flexDirection: "column", alignItems: "flex-start" }}>
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

          <section className="section">
            <h2>Next step</h2>
            <p>
              The quickest way to reach me is email:{" "}
              <a className="tl" href={`mailto:${site.email}`}>
                {site.email}
              </a>
              .
            </p>
            <ul className="links dimlist">
              <li>
                <a className="tl" href="/Dominion-Nwakanma-CV-Mobile.pdf">
                  CV for Mobile (PDF)
                </a>
              </li>
              <li>
                <a className="tl" href="/Dominion-Nwakanma-CV-Product.pdf">
                  CV for Product (PDF)
                </a>
              </li>
              <li>
                <Link className="tl" href="/">
                  All my work
                </Link>
              </li>
              <li>
                <a className="tl" href="https://github.com/Immadominion" target="_blank" rel="noopener">
                  GitHub
                </a>
              </li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
