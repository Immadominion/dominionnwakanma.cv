import fs from "node:fs";
import path from "node:path";

// Reads public/media/manifest.json at build time. Every lookup degrades to null,
// so a missing asset falls back to a typographic card instead of a broken image.

export type MediaEntry = {
  poster: string | null;
  poster800: string | null;
  video: string | null;
  phoneVideo: string | null;
  phonePoster: string | null;
  shots: string[];
  icon: string | null;
  altVideo: string | null;
  altPoster: string | null;
};

type Raw = {
  poster?: string | null;
  video?: string | null;
  phoneVideo?: string | null;
  phonePoster?: string | null;
  shots?: string[];
  icon?: string | null;
  altVideo?: string | null;
  altPoster?: string | null;
};

const pub = path.join(process.cwd(), "public");
let cache: Record<string, Raw> | null = null;

function manifest(): Record<string, Raw> {
  if (cache) return cache;
  try {
    cache = JSON.parse(fs.readFileSync(path.join(pub, "media", "manifest.json"), "utf8"));
  } catch {
    cache = {};
  }
  return cache!;
}

function exists(web: string | null | undefined): string | null {
  if (!web) return null;
  return fs.existsSync(path.join(pub, web)) ? web : null;
}

function small(web: string | null): string | null {
  if (!web) return null;
  return exists(web.replace(/\.webp$/, "-800.webp")) ?? web;
}

export function media(slug: string): MediaEntry {
  const m = manifest()[slug] ?? {};
  const shots = (m.shots ?? []).map((s) => exists(s)).filter((s): s is string => !!s);
  const poster = exists(m.poster) ?? shots[0] ?? null;
  return {
    poster,
    poster800: small(poster),
    video: exists(m.video),
    phoneVideo: exists(m.phoneVideo),
    phonePoster: exists(m.phonePoster),
    shots,
    icon: exists(m.icon),
    altVideo: exists(m.altVideo),
    altPoster: exists(m.altPoster),
  };
}

export function youtubeThumb(id: string): string {
  const yt = (manifest() as unknown as { youtube?: Record<string, string> }).youtube ?? {};
  return exists(yt[id]) ?? `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
}
