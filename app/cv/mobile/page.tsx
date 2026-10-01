import type { Metadata } from "next";
import CVDoc from "@/components/CVDoc";
import { site } from "@/lib/data";

const title = `Mobile CV · ${site.name}`;
const description = "Dominion Nwakanma’s CV for mobile engineering. Flutter apps, open-source SDKs and the work behind them.";
const image = { url: "/og/cv.png", width: 1200, height: 630, alt: "Dominion Nwakanma — CV, mobile and product engineer" };

export const metadata: Metadata = {
  title: "CV, Mobile",
  description,
  robots: { index: false, follow: true },
  alternates: { canonical: "/cv/mobile" },
  openGraph: { title, description, url: "/cv/mobile", siteName: site.name, type: "website", images: [image] },
  twitter: { card: "summary_large_image", creator: "@HeIsJoel0x", title, description, images: [image] },
};

export default function CVMobile() {
  return <CVDoc role="mobile" />;
}
