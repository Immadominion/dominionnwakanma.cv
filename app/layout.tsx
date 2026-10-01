import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/data";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

const description =
  "Mobile and product engineer. Apps people use, open-source SDKs other developers build on, and the courses that teach them.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name}`, template: `%s · ${site.name}` },
  description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: site.name,
    description,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: `${site.name}, mobile and product engineer. Selected work and community.` }],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@HeIsJoel0x",
    title: site.name,
    description,
    images: [{ url: "/og.png", alt: `${site.name}, mobile and product engineer. Selected work and community.` }],
  },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fdfdfc" },
    { media: "(prefers-color-scheme: dark)", color: "#161615" },
  ],
};

// Applies a saved theme before first paint, so there is no flash.
const themeScript = `document.documentElement.classList.add('js');try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark')document.documentElement.setAttribute('data-theme',t)}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
