import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

// Samuel's header: a 48px bar over five stacked blur layers that fade out downward.
export default function Nav({ back }: { back?: { href: string; label: string } }) {
  return (
    <header className="header">
      <div className="header-blur" aria-hidden="true">
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
      <nav className="nav" aria-label="Main">
        {back ? (
          <Link href={back.href} className="back">
            <span aria-hidden="true">←</span> {back.label}
          </Link>
        ) : (
          <span />
        )}
        <div className="nav-right">
          <Link href="/cv">CV</Link>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
