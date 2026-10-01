import type { MetadataRoute } from "next";
import { featured, site } from "@/lib/data";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date("2026-10-01");
  return [
    { url: site.url, lastModified: now, priority: 1 },
    { url: `${site.url}/archive`, lastModified: now },
    { url: `${site.url}/cv`, lastModified: now },
    ...featured.map((p) => ({ url: `${site.url}/work/${p.slug}`, lastModified: now })),
  ];
}
