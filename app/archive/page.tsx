import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { archive, site } from "@/lib/data";

const title = `Index · ${site.name}`;
const description = "Everything Dominion Nwakanma has built, by year.";

export const metadata: Metadata = {
  title: "Index",
  description,
  alternates: { canonical: "/archive" },
  openGraph: { title, description, url: "/archive", siteName: site.name, type: "website", images: [{ url: "/og.png", width: 1200, height: 630, alt: "Selected work by Dominion Nwakanma" }] },
  twitter: { card: "summary_large_image", creator: "@HeIsJoel0x", title, description, images: [{ url: "/og.png", alt: "Selected work by Dominion Nwakanma" }] },
};

export default function Archive() {
  return (
    <>
      <Nav back={{ href: "/", label: "Home" }} />
      <main className="main">
        <div className="stack" style={{ gap: "3rem" }}>
          <div className="intro">
            <h1 className="ai">Index</h1>
            <p className="secondary ai" style={{ ["--i" as string]: 1 }}>
              Everything I&apos;ve built, newest first. Apps, sites, SDKs, courses, wins and the small things in between.
            </p>
          </div>
          {archive.map((y, k) => (
            <section key={y.year} className="section section-tight ai" style={{ ["--i" as string]: k + 2 }} aria-labelledby={`y${y.year}`}>
              <h2 id={`y${y.year}`} className="tnum">
                {y.year}
              </h2>
              <ol className="rows dimlist">
                {y.rows.map((r) => {
                  const body = (
                    <>
                      <div className="row-main">
                        <span>{r.title}</span>
                        <span className="secondary">{r.summary}</span>
                      </div>
                      <span className="row-end">{r.proof}</span>
                    </>
                  );
                  return (
                    <li key={r.title}>
                      {r.slug ? (
                        <Link className="row" href={`/work/${r.slug}`}>
                          {body}
                        </Link>
                      ) : r.href ? (
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
              <p className="secondary">Also: {y.tail}</p>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
