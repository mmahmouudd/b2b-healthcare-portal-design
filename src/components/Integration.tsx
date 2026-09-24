import { useRef, useState } from "react";
import { integrationTabs, integrationPoints, IconCheck, IconArrow } from "../data";
import { DecodeText, Reveal, usePrefersReducedMotion } from "./motion";
import { cn } from "../utils/cn";

const statusChip: Record<string, string> = {
  Synced: "bg-teal-50 text-teal-700 border-teal-200",
  Mapped: "bg-sea-50 text-sea-700 border-sea-200",
  Verified: "bg-mist text-pine-800 border-teal-200",
};

export default function Integration() {
  const [active, setActive] = useState(0);
  const reduced = usePrefersReducedMotion();
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const tab = integrationTabs[active];

  const onKey = (e: React.KeyboardEvent) => {
    const last = integrationTabs.length - 1;
    let next: number | null = null;
    if (e.key === "ArrowDown" || e.key === "ArrowRight") next = active === last ? 0 : active + 1;
    if (e.key === "ArrowUp" || e.key === "ArrowLeft") next = active === 0 ? last : active - 1;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = last;
    if (next !== null) {
      e.preventDefault();
      setActive(next);
      tabRefs.current[next]?.focus();
    }
  };

  return (
    <section
      id="integrations"
      aria-labelledby="integration-heading"
      className="scroll-mt-28 border-y border-line bg-gradient-to-b from-mist/70 via-paper to-paper py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-[12px] font-medium tracking-[0.2em] text-teal-700">
            <DecodeText text="MEDICAL RECORDS INTEGRATION" />
          </p>
          <h2
            id="integration-heading"
            className="mt-4 font-display text-4xl font-bold tracking-tight text-pine-900 sm:text-5xl"
          >
            Records that find
            <br />
            their way home.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Meridian speaks your stack's dialect natively. Select a channel below to see exactly how records,
            results and scripts move — and where they land.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-12">
          {/* channel tabs */}
          <Reveal className="lg:col-span-4">
            <div
              role="tablist"
              aria-label="Integration channel"
              aria-orientation="vertical"
              onKeyDown={onKey}
              className="flex flex-col gap-2.5"
            >
              {integrationTabs.map((t, i) => (
                <button
                  key={t.id}
                  ref={(el) => {
                    tabRefs.current[i] = el;
                  }}
                  role="tab"
                  id={`tab-${t.id}`}
                  aria-selected={active === i}
                  aria-controls={`panel-${t.id}`}
                  tabIndex={active === i ? 0 : -1}
                  onClick={() => setActive(i)}
                  className={cn(
                    "rounded-lg border px-4 py-3.5 text-left transition-all",
                    active === i
                      ? "border-teal-500 bg-pine-900 text-white shadow-lg shadow-pine-900/20"
                      : "border-line bg-white/80 text-pine-900 hover:border-teal-300 hover:bg-mist/60"
                  )}
                >
                  <span className="flex items-center justify-between">
                    <span className="font-display text-[17px] font-semibold">{t.label}</span>
                    <span
                      className={cn(
                        "font-mono text-[10px] tracking-[0.18em]",
                        active === i ? "text-teal-300" : "text-muted"
                      )}
                    >
                      0{i + 1}
                    </span>
                  </span>
                  <span
                    className={cn(
                      "mt-1 block text-[13.5px] leading-relaxed",
                      active === i ? "text-teal-100/80" : "text-muted"
                    )}
                  >
                    {t.blurb}
                  </span>
                </button>
              ))}
            </div>
          </Reveal>

          {/* mockup panel */}
          <Reveal delay={120} className="lg:col-span-8">
            <div
              role="tabpanel"
              id={`panel-${tab.id}`}
              aria-labelledby={`tab-${tab.id}`}
              className="overflow-hidden rounded-xl border border-line bg-white shadow-[0_30px_70px_-40px_rgba(6,33,31,0.45)]"
            >
              {/* two panes + connector */}
              <div className="grid grid-cols-[1fr_auto_1fr] items-stretch gap-0 border-b border-line bg-mist/50">
                <div className="p-5 sm:p-6">
                  <p className="font-mono text-[10px] tracking-[0.2em] text-muted">SOURCE</p>
                  <p className="mt-1 font-display text-lg font-semibold text-pine-900">{tab.source}</p>
                  <div className="mt-4 space-y-2" aria-hidden="true">
                    <div className="h-2.5 w-4/5 rounded bg-sea-200" />
                    <div className="h-2.5 w-3/5 rounded bg-sea-100" />
                    <div className="h-2.5 w-2/3 rounded bg-mist-deep" />
                  </div>
                </div>

                <div className="relative flex w-16 flex-col items-center justify-center border-x border-line bg-white/60 sm:w-24">
                  <span
                    className="mb-2 font-mono text-[10px] tracking-widest text-teal-700"
                    aria-hidden="true"
                  >
                    FHIR
                  </span>
                  <div className="relative h-0.5 w-full rounded bg-line" aria-hidden="true">
                    {!reduced && (
                      <span className="packet absolute -top-[5px] h-3 w-3 rounded-full bg-teal-500 shadow-[0_0_0_4px_rgba(23,133,119,0.2)]" />
                    )}
                  </div>
                  <IconArrow className="mt-2 h-4 w-4 text-teal-600" />
                </div>

                <div className="p-5 sm:p-6">
                  <p className="font-mono text-[10px] tracking-[0.2em] text-teal-700">MERIDIAN</p>
                  <p className="mt-1 font-display text-lg font-semibold text-pine-900">Unified chart</p>
                  <div className="mt-4 space-y-2" aria-hidden="true">
                    <div className="h-2.5 w-3/5 rounded bg-teal-300" />
                    <div className="h-2.5 w-4/5 rounded bg-teal-200" />
                    <div className="h-2.5 w-2/3 rounded bg-teal-100" />
                  </div>
                </div>
              </div>

              {/* records table */}
              <div className="overflow-x-auto">
                <table className="w-full min-w-[520px] text-left text-[13.5px]">
                  <caption className="sr-only">
                    {tab.label}: records flowing from {tab.source} into Meridian, with mapping status
                  </caption>
                  <thead>
                    <tr className="border-b border-line font-mono text-[10.5px] uppercase tracking-[0.16em] text-muted">
                      <th scope="col" className="px-5 py-3 font-medium">Record</th>
                      <th scope="col" className="px-5 py-3 font-medium">Resource</th>
                      <th scope="col" className="px-5 py-3 font-medium">Last sync</th>
                      <th scope="col" className="px-5 py-3 font-medium">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-line/70">
                    {tab.rows.map((r, i) => (
                      <tr
                        key={tab.id + r.item}
                        style={reduced ? undefined : { animationDelay: `${i * 90}ms` }}
                        className={cn("bg-white", !reduced && "animate-feed-in")}
                      >
                        <td className="px-5 py-3 font-medium text-pine-900">{r.item}</td>
                        <td className="px-5 py-3 font-mono text-[12px] text-muted">{r.code}</td>
                        <td className="px-5 py-3 font-mono text-[12px] text-muted">{r.sync}</td>
                        <td className="px-5 py-3">
                          <span
                            className={cn(
                              "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-[11px]",
                              statusChip[r.status]
                            )}
                          >
                            <IconCheck className="h-3 w-3" />
                            {r.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* payload */}
              <div className="border-t border-line bg-pine-950 px-5 py-4 sm:px-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-teal-400">
                  {tab.resource} — live payload (simulated)
                </p>
                <pre
                  key={tab.id}
                  className="mt-2 overflow-x-auto whitespace-pre font-mono text-[12px] leading-relaxed text-teal-200"
                >
                  <DecodeText text={tab.payload} />
                  <span className="caret text-teal-400" aria-hidden="true">▍</span>
                </pre>
              </div>
            </div>
          </Reveal>
        </div>

        {/* guarantees */}
        <ul className="mt-12 grid gap-4 md:grid-cols-3">
          {integrationPoints.map((p, i) => (
            <Reveal
              as="li"
              key={p.title}
              delay={i * 100}
              className="flex gap-4 rounded-lg border border-line bg-white/80 p-5"
            >
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-700">
                <IconCheck className="h-4 w-4" />
              </span>
              <span>
                <span className="block font-display text-base font-semibold text-pine-900">{p.title}</span>
                <span className="mt-1 block text-[14px] leading-relaxed text-muted">{p.desc}</span>
              </span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
