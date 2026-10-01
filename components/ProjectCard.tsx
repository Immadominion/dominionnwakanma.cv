import Link from "next/link";
import Well from "./Well";
import type { MediaEntry } from "@/lib/media";

type Props = {
  title: string;
  year: string;
  summary: string;
  href?: string;
  external?: boolean;
  m: MediaEntry;
  variant: "video" | "phone" | "code" | "image" | "icon";
  tint?: string;
  code?: { file: string; lines: string[] };
  eager?: boolean;
};

// Samuel's project card: a padded block that tints on hover, a dark media well,
// then the title and a line of secondary text. The whole card is one link.
export default function ProjectCard({ title, year, summary, href, external, m, variant, tint, code, eager }: Props) {
  return (
    <div className="card">
      {href &&
        (external ? (
          <a href={href} target="_blank" rel="noopener" className="card-link" aria-label={title}>
            <span className="sr-only">{title}</span>
          </a>
        ) : (
          <Link href={href} className="card-link" aria-label={title}>
            <span className="sr-only">{title}</span>
          </Link>
        ))}
      <Well variant={variant} m={m} title={title} tint={tint} code={code} eager={eager} />
      <div className="card-text">
        <div className="card-title">
          <h3>{title}</h3>
          <span>{year}</span>
        </div>
        <p>{summary}</p>
      </div>
    </div>
  );
}
