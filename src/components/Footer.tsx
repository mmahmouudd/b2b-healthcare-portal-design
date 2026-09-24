import { footerCols, Logo } from "../data";

export default function Footer() {
  return (
    <footer className="bg-pine-950 text-teal-100/70">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <a href="#top" className="flex items-center gap-3">
              <Logo light className="h-10 w-10" />
              <span className="leading-tight">
                <span className="block font-display text-xl font-bold text-white">Meridian</span>
                <span className="block font-mono text-[10px] uppercase tracking-[0.22em] text-teal-300/80">
                  Clinic management
                </span>
              </span>
            </a>
            <p className="mt-5 max-w-sm text-[14.5px] leading-relaxed">
              The calm, audit-ready operating system for multi-site clinics. Scheduling, billing, rostering and
              records — speaking the same language.
            </p>
            <p className="mt-6 inline-flex items-center gap-2.5 rounded-full border border-pine-700 bg-pine-900/60 px-4 py-2 font-mono text-[11.5px] text-teal-300">
              <span className="live-dot h-1.5 w-1.5 rounded-full bg-teal-400" aria-hidden="true" />
              status.meridian.health — all systems operational
            </p>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-7">
            {footerCols.map((col) => (
              <div key={col.heading}>
                <h3 className="font-mono text-[11px] uppercase tracking-[0.22em] text-teal-300/80">{col.heading}</h3>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l}>
                      <a
                        href={
                          l === "Compliance pack"
                            ? "#compliance"
                            : l === "Supplier contact" || l === "Contact"
                              ? "#contact"
                              : l === "System status"
                                ? "#top"
                                : l === "ROI model"
                                  ? "#platform"
                                  : l === "Integration docs"
                                    ? "#integrations"
                                    : "#top"
                        }
                        className="text-[14px] text-teal-100/70 transition-colors hover:text-white"
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-pine-800 pt-7 md:flex-row md:items-center md:justify-between">
          <p className="text-[13px]">© 2026 Meridian Health Systems, Inc. All rights reserved.</p>
          <p className="font-mono text-[11px] tracking-wide text-teal-300/70">
            WCAG 2.2 AA · HIPAA · SOC 2 TYPE II · ISO 27001 — built for calm clinics
          </p>
        </div>
      </div>
    </footer>
  );
}
