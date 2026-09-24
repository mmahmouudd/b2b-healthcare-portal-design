import { useEffect, useState } from "react";
import { navLinks, Logo } from "../data";
import { cn } from "../utils/cn";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      {/* utility bar */}
      <div className="bg-pine-950 text-teal-100">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-1.5 font-mono text-[11px] tracking-wide sm:px-6 lg:px-8">
          <p className="flex items-center gap-2">
            <span className="live-dot inline-block h-1.5 w-1.5 rounded-full bg-teal-400" aria-hidden="true" />
            <span>
              All systems operational · <span className="text-teal-300">99.98%</span> uptime (90d)
            </span>
          </p>
          <a
            href="#compliance"
            className="hidden items-center gap-1.5 text-teal-200 transition-colors hover:text-white sm:flex"
          >
            HIPAA · SOC 2 TYPE II · ISO 27001
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>

      {/* main nav */}
      <nav
        aria-label="Primary"
        className={cn(
          "border-b border-line/80 bg-paper/90 backdrop-blur-md transition-shadow",
          scrolled && "shadow-[0_8px_30px_-18px_rgba(6,33,31,0.35)]"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <a href="#top" className="group flex items-center gap-3">
            <Logo className="h-9 w-9 transition-transform duration-300 group-hover:-rotate-3" />
            <span className="leading-tight">
              <span className="block font-display text-lg font-bold tracking-tight text-pine-900">Meridian</span>
              <span className="block font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
                Clinic management
              </span>
            </span>
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="rounded-md px-3.5 py-2 text-[15px] font-medium text-ink-soft transition-colors hover:bg-mist hover:text-pine-900"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden rounded-md bg-teal-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-teal-700 hover:shadow-md sm:inline-block"
            >
              Talk to a supplier rep
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line bg-white text-pine-900 lg:hidden"
            >
              <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
                {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h10" />}
              </svg>
            </button>
          </div>
        </div>

        {/* mobile panel */}
        <div
          id="mobile-menu"
          hidden={!open}
          className="border-t border-line bg-paper px-4 pb-4 pt-2 lg:hidden"
        >
          <ul className="space-y-1">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2.5 font-medium text-ink-soft hover:bg-mist"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-3 block rounded-md bg-teal-600 px-4 py-3 text-center font-semibold text-white"
          >
            Talk to a supplier rep
          </a>
        </div>
      </nav>
    </header>
  );
}
