import { useEffect, useState } from "react";
import { feedEvents, standards, IconArrow, IconSeal, IconLock } from "../data";
import { DecodeText, usePrefersReducedMotion } from "./motion";
import { cn } from "../utils/cn";

const toneClass: Record<string, string> = {
  teal: "bg-teal-500/15 text-teal-300 border-teal-500/30",
  sea: "bg-sea-500/15 text-sea-300 border-sea-500/30",
  sage: "bg-sage-500/15 text-sage-300 border-sage-500/30",
  mute: "bg-pine-700/40 text-teal-200 border-pine-700",
};

function LiveConsole() {
  const reduced = usePrefersReducedMotion();
  const [head, setHead] = useState(4); // index of newest event

  useEffect(() => {
    if (reduced) return;
    const id = window.setInterval(() => setHead((h) => h + 1), 2600);
    return () => window.clearInterval(id);
  }, [reduced]);

  const len = feedEvents.length;
  const rows = Array.from({ length: 5 }, (_, i) => {
    const seq = head - 4 + i;
    return { ev: feedEvents[((seq % len) + len) % len], seq };
  });

  return (
    <div className="relative">
      {/* backing card */}
      <div className="absolute -inset-3 -z-10 translate-x-4 translate-y-4 rounded-xl border border-teal-200 bg-mist" aria-hidden="true" />

      <div className="overflow-hidden rounded-xl border border-pine-700 bg-pine-900 shadow-[0_40px_80px_-30px_rgba(6,33,31,0.55)]">
        {/* chrome */}
        <div className="flex items-center justify-between border-b border-pine-700/70 bg-pine-950/60 px-4 py-3">
          <div className="flex items-center gap-3">
            <span className="flex gap-1.5" aria-hidden="true">
              <span className="h-2.5 w-2.5 rounded-full bg-pine-700" />
              <span className="h-2.5 w-2.5 rounded-full bg-pine-700" />
              <span className="h-2.5 w-2.5 rounded-full bg-teal-700" />
            </span>
            <span className="font-mono text-[11px] tracking-[0.18em] text-teal-200">
              MERIDIAN · INTEGRATION CONSOLE
            </span>
          </div>
          <span className="flex items-center gap-2 font-mono text-[11px] text-teal-300">
            <span className="live-dot h-1.5 w-1.5 rounded-full bg-teal-400" aria-hidden="true" />
            LIVE
          </span>
        </div>

        {/* feed */}
        <ul className="divide-y divide-pine-800/70" aria-label="Live integration activity (simulated)">
          {rows.map(({ ev, seq }) => (
            <li
              key={seq}
              className={cn("flex items-center gap-3 px-4 py-2.5", seq === head && "animate-feed-in")}
            >
              <span className="hidden w-16 shrink-0 font-mono text-[11px] text-teal-400/70 sm:block">{ev.time}</span>
              <span
                className={cn(
                  "w-14 shrink-0 rounded border px-1.5 py-0.5 text-center font-mono text-[10px] tracking-wider",
                  toneClass[ev.tone]
                )}
              >
                {ev.channel}
              </span>
              <span className="min-w-0 flex-1 truncate text-[13px] text-teal-50/90">{ev.text}</span>
              <span className="hidden shrink-0 font-mono text-[10.5px] text-teal-400 md:block">{ev.status}</span>
            </li>
          ))}
        </ul>

        {/* console footer */}
        <div className="grid grid-cols-3 divide-x divide-pine-700/70 border-t border-pine-700/70 bg-pine-950/50">
          {[
            ["protocol", "FHIR R4 · TLS 1.3"],
            ["throughput", "128 res/s"],
            ["conflicts", "0 today"],
          ].map(([k, v]) => (
            <div key={k} className="px-4 py-2.5">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-teal-400/70">{k}</p>
              <p className="mt-0.5 truncate font-mono text-[12px] text-teal-100">{v}</p>
            </div>
          ))}
        </div>
      </div>

      {/* floating badge */}
      <div className="absolute -left-4 -bottom-7 hidden rotate-[-3deg] items-center gap-3 rounded-lg border border-line bg-white px-4 py-3 shadow-lg sm:flex">
        <IconSeal className="h-8 w-8 text-teal-600" />
        <span>
          <span className="block text-sm font-semibold text-pine-900">SOC 2 Type II</span>
          <span className="block font-mono text-[10.5px] text-muted">audited Dec 2025 · AICPA</span>
        </span>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="relative overflow-hidden">
      {/* ambient background */}
      <div className="bg-grid absolute inset-0 -z-10" aria-hidden="true" />
      <div
        className="animate-drift absolute -top-32 right-[-10%] -z-10 h-[480px] w-[480px] rounded-full bg-teal-100/70 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -left-40 top-64 -z-10 h-[420px] w-[420px] rounded-full bg-sea-100/70 blur-3xl"
        aria-hidden="true"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 pb-20 pt-14 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:px-8 lg:pb-28 lg:pt-20">
        {/* copy */}
        <div className="lg:col-span-6">
          <p className="font-mono text-[12px] font-medium tracking-[0.2em] text-teal-700">
            <DecodeText text="B2B CLINIC MANAGEMENT · EST. 2016" />
          </p>

          <h1
            id="hero-heading"
            className="mt-5 font-display text-[2.75rem] font-bold leading-[1.02] tracking-tight text-pine-900 sm:text-6xl lg:text-[4.25rem]"
          >
            <span className="mask-line">
              <span style={{ animationDelay: "0.1s" }}>Every department.</span>
            </span>
            <span className="mask-line">
              <span style={{ animationDelay: "0.28s" }} className="text-teal-600">
                One calm system.
              </span>
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Meridian unifies scheduling, billing, rostering and medical records for multi-site clinics —
            built for the audits, the integrations, and the humans working in between.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2.5 rounded-md bg-teal-600 px-6 py-3.5 text-base font-semibold text-white shadow-md shadow-teal-600/20 transition-all hover:-translate-y-0.5 hover:bg-teal-700 hover:shadow-lg"
            >
              Request a supplier demo
              <IconArrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#compliance"
              className="inline-flex items-center gap-2.5 rounded-md border border-line bg-white/70 px-6 py-3.5 text-base font-semibold text-pine-900 transition-colors hover:border-teal-400 hover:bg-mist"
            >
              <IconLock className="h-4 w-4 text-teal-600" />
              Review the compliance pack
            </a>
          </div>

          <dl className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-line pt-6 font-mono text-[12px] text-muted">
            {[
              ["340+", "multi-site clinics"],
              ["18", "states & 3 regions"],
              ["2.4M", "records synced / month"],
            ].map(([v, l]) => (
              <div key={l}>
                <dt className="sr-only">{l}</dt>
                <dd>
                  <span className="font-display text-xl font-bold text-pine-900">{v}</span> {l}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* console */}
        <div className="lg:col-span-6">
          <LiveConsole />
        </div>
      </div>

      {/* standards marquee */}
      <div className="border-y border-line bg-white/60 py-3.5" aria-label="Standards and dialects Meridian speaks">
        <div className="marquee">
          <div className="marquee-track items-center gap-10 px-5">
            {[...standards, ...standards].map((s, i) => (
              <span key={i} className="flex items-center gap-10 whitespace-nowrap font-mono text-[12px] tracking-[0.18em] text-muted">
                {s}
                <span className="text-teal-400" aria-hidden="true">
                  ◆
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
