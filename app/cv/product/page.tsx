import type { Metadata } from "next";
import CVDoc from "@/components/CVDoc";
import { site } from "@/lib/data";

const title = `Product CV · ${site.name}`;
const description = "Dominion Nwakanma’s CV for product engineering. Products designed and built across mobile, web and backend.";
const image = { url: "/og/cv.png", width: 1200, height: 630, alt: "Dominion Nwakanma — CV, mobile and product engineer" };

export const metadata: Metadata = {
  title: "CV, Product",
  description,
  robots: { index: false, follow: true },
  alternates: { canonical: "/cv/product" },
  openGraph: { title, description, url: "/cv/product", siteName: site.name, type: "website", images: [image] },
  twitter: { card: "summary_large_image", creator: "@HeIsJoel0x", title, description, images: [image] },
};

export default function CVProduct() {
  return <CVDoc role="product" />;
}
