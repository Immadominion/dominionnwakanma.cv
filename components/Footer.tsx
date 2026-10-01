import { site } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="foot">
      <span>Updated {site.updated}</span>
      <a className="tl" href={`mailto:${site.email}`}>
        {site.email}
      </a>
    </footer>
  );
}
