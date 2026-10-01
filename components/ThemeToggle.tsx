"use client";

import { useEffect, useState } from "react";

type Mode = "system" | "light" | "dark";
const next: Record<Mode, Mode> = { system: "light", light: "dark", dark: "system" };
const label: Record<Mode, string> = { system: "Theme follows your system", light: "Light theme", dark: "Dark theme" };

// Cycles system, light, dark. The icon shows the current mode.
export default function ThemeToggle() {
  const [mode, setMode] = useState<Mode>("system");
  useEffect(() => {
    try {
      const t = localStorage.getItem("theme");
      if (t === "light" || t === "dark") setMode(t);
    } catch {}
  }, []);
  const change = () => {
    const m = next[mode];
    setMode(m);
    const apply = () => {
      const root = document.documentElement;
      if (m === "system") root.removeAttribute("data-theme");
      else root.setAttribute("data-theme", m);
    };
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const doc = document as Document & { startViewTransition?: (cb: () => void) => unknown };
    if (doc.startViewTransition && !reduced) doc.startViewTransition(apply);
    else apply();
    try {
      if (m === "system") localStorage.removeItem("theme");
      else localStorage.setItem("theme", m);
    } catch {}
  };
  return (
    <button className="theme-btn" onClick={change} aria-label={`${label[mode]}. Change theme`} title={label[mode]}>
      <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <circle cx="8" cy="8" r="6.25" stroke="currentColor" strokeWidth="1.25" />
        {mode === "system" && <path d="M8 1.75a6.25 6.25 0 0 1 0 12.5Z" fill="currentColor" />}
        {mode === "dark" && <circle cx="8" cy="8" r="6.25" fill="currentColor" />}
      </svg>
    </button>
  );
}
