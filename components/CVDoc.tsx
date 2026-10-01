import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { site, featured, jobs, education, packages, merged, recognition, community, mentions, talks, vouches } from "@/lib/data";

export type CVRole = "general" | "mobile" | "product";

const nf = new Intl.NumberFormat("en-US");

const order: Record<CVRole, string[]> = {
  general: featured.map((f) => f.slug),
  mobile: ["chumbucket", "trimmy", "blueshift", "coral-xyz", "dartus"],
  product: ["aiki", "trimmy", "plinth", "hack4futo", "dartus"],
};

const headline: Record<CVRole, string> = {
  general: "Mobile and product engineer",
  mobile: "Software Engineer, Mobile · Application to Nous Research",
  product: "Software Engineer, Product · Application to Nous Research",
};

// Brief, attributed work summaries keep the CV readable. Full case studies stay on the site.
const workNotes: Record<string, string> = {
  trimmy: "Founded a stock-market learning game. Built the Flutter app, web app, Fastify API and PostgreSQL database, plus the design and launch films. Practice trading and real money have distinct colours throughout.",
  chumbucket: "Built the Flutter app and TypeScript backend for football predictions with friends. Public Android release. First place, TxODDS World Cup Hackathon Nigeria. Escrow program built with Ubadineke Prince.",
  aiki: "Built a marketplace for hiring AI agents, from Next.js screens to APIs, storage and an MCP server. Each job has a budget, rules and a receipt. Authored 288 of 291 commits.",
  blueshift: "Wrote five courses with React Native and Expo examples: wallets, on-chain operations, Mobile Wallet Adapter and dApp Store publishing. Accepted in Blueshift PR #329; featured by Colosseum Codex.",
  "coral-xyz": "Created and maintain a Dart client for Solana programs. Supports Anchor, Quasar and Pinocchio. Published on pub.dev and featured by Colosseum Codex.",
  dartus: "Created and maintain a Dart and Flutter SDK for Walrus file storage. Funded by a Walrus Foundation grant and featured on its blog. Reviewed and merged outside contributions.",
  plinth: "Co-founded a subscription-billing product for Nigerian businesses. Built the brand, website and dashboard. Ubadineke Prince built the billing engine. Authored 47 of 80 commits.",
  hack4futo: "Convened FUTO's student hackathon with 600+ attendees. Raised sponsorship, including a $5,000 Superteam Nigeria grant. Built the website, live voting and public treasury with a Claude MCP connector.",
  web3flutter: "Created a home for developers building web3 apps with Flutter, with guides, examples and a scroll-driven website. Wrote and published teaching resources alongside the site.",
};

function summary(role: CVRole) {
  if (role === "mobile")
    return "I build mobile apps and the servers behind them. My strongest stack is Flutter, Dart and TypeScript. I wrote Blueshift's Solana Mobile courses in React Native and Expo, and maintain 13 Dart packages.";
  if (role === "product")
    return "I build products from the first screen to the API, database and launch. Recent work includes AiKi, a marketplace for AI agents, and Trimmy, a stock-market learning game. My strongest languages are TypeScript and Dart; I also work with Python and Rust.";
  return "I build mobile apps, web products and the servers behind them. I also design their interfaces, write developer tools and teach others how to use them. Author of Blueshift's Solana Mobile courses and 13 Dart packages. Convener of Hack4FUTO 5.0.";
}

function Item({ a, b }: { a: React.ReactNode; b?: string }) {
  return (
    <div className="cv-item">
      <span>{a}</span>
      <span>{b}</span>
    </div>
  );
}

export default function CVDoc({ role }: { role: CVRole }) {
  const general = role === "general";
  const pkgs = packages.flatMap((g) => g.pkgs);
  const dl = pkgs.reduce((a, p) => a + p.downloads, 0);
  const work = order[role].map((s) => featured.find((f) => f.slug === s)!).filter(Boolean);
  const awards = recognition.filter((r) => r.what === "1st place" || r.detail === "Walrus Foundation, for Dartus" || (general && r.what === "#49 of 5,921"));
  const press = mentions.filter((m) => m.source === "Walrus Foundation" || m.title === "Blueshift's Solana Mobile course");
  const pdf = general ? "/Dominion-Nwakanma-CV.pdf" : `/Dominion-Nwakanma-CV-${role === "mobile" ? "Mobile" : "Product"}.pdf`;
  const leo = vouches[0];

  return (
    <>
      <div className="no-print">
        <Nav back={{ href: general ? "/" : "/nous", label: general ? "Home" : "For Nous" }} />
      </div>
      <main className="main">
        <article className={`cv-page cv-${role}`}>
          <div className="intro">
            <h1>{site.name}</h1>
            <p className="secondary">{headline[role]}</p>
            <p className="secondary">
              <a href={`mailto:${site.email}`}>{site.email}</a> · <a href={site.url}>dominionnwakanma.cv</a>
              <br />
              <a href="https://github.com/Immadominion">github.com/Immadominion</a> · <a href="https://x.com/heisjoel0x">x.com/heisjoel0x</a>
            </p>
            <div className="cv-actions no-print">
              <a className="tl" href={pdf} download>Download PDF</a>
              <Link className="tl" href="/">Back to the site</Link>
            </div>
          </div>

          <section className="cv-sec">
            <h2>Summary</h2>
            <p>{summary(role)}</p>
          </section>

          <section className="cv-sec">
            <h2>Technical skills</h2>
            <p>Flutter, Dart, React Native, Expo, TypeScript, React, Next.js, Node.js, Fastify, PostgreSQL, Supabase, Python, Rust, Solana, MCP.</p>
          </section>

          <section className="cv-sec">
            <h2>Selected work</h2>
            {work.map((p) => (
              <div className="cv-block" key={p.slug}>
                <Item a={<a href={`${site.url}/work/${p.slug}`}>{p.title}</a>} b={p.when} />
                <p className="cv-note">{workNotes[p.slug]}</p>
              </div>
            ))}
            <p className="cv-note"><a className="tl" href={`${site.url}/archive`}>Full project index and proof: dominionnwakanma.cv/archive</a></p>
          </section>

          <section className="cv-sec cv-experience">
            <h2>Experience</h2>
            {jobs.map((j) => (
              <div className="cv-block" key={j.role + j.org}>
                <Item a={`${j.role}, ${j.org}`} b={j.when} />
                <p className="cv-note">{j.note}</p>
              </div>
            ))}
          </section>

          <section className="cv-sec cv-community">
            <h2>Community and volunteering</h2>
            {community.map((c) => (
              <div className="cv-block" key={c.org}>
                <Item
                  a={c.href ? <a href={c.href.startsWith("/") ? `${site.url}${c.href}` : c.href}>{c.title}, {c.org}</a> : `${c.title}, ${c.org}`}
                  b={c.when || undefined}
                />
                {c.note && (general || c.org === "Hack4FUTO 5.0") && <p className="cv-note">{c.note}</p>}
              </div>
            ))}
          </section>

          <section className="cv-sec">
            <h2>Open source</h2>
            <p><a href={`${site.url}/#open-source`}>13 Dart packages</a>; {nf.format(dl)} downloads in the 52 weeks before 1 October 2026.</p>
            <p>
              Merged contributions: {merged.map((m, i) => <span key={m.href}>{i > 0 ? "; " : ""}<a href={m.href}>{m.label}</a></span>)}.
            </p>
          </section>

          <section className="cv-sec">
            <h2>Recognition</h2>
            {awards.map((r) => (
              <Item key={r.detail} a={r.href ? <a href={r.href}>{r.what}, {r.detail}</a> : `${r.what}, ${r.detail}`} b={r.when} />
            ))}
          </section>

          <section className="cv-sec">
            <h2>Teaching and speaking</h2>
            {talks.filter((t) => t.title === "Flutter on Solana, a three-day workshop" || (general && t.where.startsWith("FlutterBytes"))).map((t) => (
              <Item key={t.title} a={t.href ? <a href={t.href}>{t.title}, {t.where}</a> : `${t.title}, ${t.where}`} b={t.when} />
            ))}
            <p><a href="https://www.youtube.com/@immadominion">30 videos on YouTube</a> and <a href="https://medium.com/@immadominion">10 tutorials on Medium</a>, covering Flutter, Solana and developer tools.</p>
          </section>

          <section className="cv-sec">
            <h2>Public mentions</h2>
            {press.map((m) => <Item key={m.href} a={<a href={m.href}>{m.title}, {m.source}</a>} b={m.when} />)}
            {general && <p className="cv-note"><a href={`${site.url}/#mentions`}>Full press, awards and speaking record: dominionnwakanma.cv</a></p>}
          </section>

          <section className="cv-sec">
            <h2>Public endorsement</h2>
            <p><a href={leo.href}>&ldquo;{leo.quote}&rdquo;</a> {leo.name}, {leo.role}, {leo.when}.</p>
          </section>

          <section className="cv-sec">
            <h2>Education</h2>
            <Item a={`${education.degree}, ${education.school}`} b={education.when} />
          </section>
        </article>
      </main>
      <div className="no-print"><Footer /></div>
    </>
  );
}
