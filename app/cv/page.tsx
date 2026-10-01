import type { Metadata } from "next";
import CVDoc from "@/components/CVDoc";
import { site } from "@/lib/data";

const title = `CV · ${site.name}`;
const description = "CV of Dominion Nwakanma, mobile and product engineer. Apps, open-source SDKs, teaching and community work.";
const image = { url: "/og/cv.png", width: 1200, height: 630, alt: "Dominion Nwakanma — CV, mobile and product engineer" };

export const metadata: Metadata = {
  title: "CV",
  description,
  alternates: { canonical: "/cv" },
  openGraph: { title, description, url: "/cv", siteName: site.name, type: "website", images: [image] },
  twitter: { card: "summary_large_image", creator: "@HeIsJoel0x", title, description, images: [image] },
};

export default function CV() {
  return <CVDoc role="general" />;
}
