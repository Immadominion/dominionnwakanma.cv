import Link from "next/link";
import Nav from "@/components/Nav";

export default function NotFound() {
  return (
    <>
      <Nav back={{ href: "/", label: "Home" }} />
      <main className="main" style={{ minHeight: "70svh" }}>
        <div className="intro">
          <h1>Not here</h1>
          <p className="secondary">
            This page doesn&apos;t exist. <Link className="tl" href="/">Go home</Link>.
          </p>
        </div>
      </main>
    </>
  );
}
