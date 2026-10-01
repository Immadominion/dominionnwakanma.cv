import type { MetadataRoute } from "next";
import { site } from "@/lib/data";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "/",
    name: site.name,
    short_name: site.short,
    description: "Mobile and product engineer. Selected work, writing and CV.",
    start_url: "/",
    scope: "/",
    display: "browser",
    lang: "en",
    background_color: "#161615",
    theme_color: "#161615",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
    ],
  };
}
