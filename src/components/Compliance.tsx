import { certs, securityCapabilities, IconSeal, IconCheck, IconArrow } from "../data";
import { DecodeText, Reveal } from "./motion";

const auditLines = [
  "14:02:11  ACCESS   user=okafor.a  chart=PT-88213  ok",
  "14:02:12  WRITE    note=ROS       hash=9f2e…c41a",
  "14:07:56  EXPORT   scope=audit    approver=2FA  sealed",
];

export default function Compliance() {
  return (
    <section
      id="compliance"
      aria-labelledby="compliance-heading"
      className="bg-grid-dark relative scroll-mt-20 overflow-hidden bg-pine-950 py-20 lg:py-28"
    >
      <div className="absolute -left-32 top-40 h-96 w-96 rounded-full bg-teal-700/25 blur-3xl" aria-hidden="true" />
      <div className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-sea-700/25 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:px-8">
        {/* sticky intro */}
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <Reveal>
              <p className="font-mono text-[12px] font-medium tracking-[0.2em] text-teal-300">
                <DecodeText text="TRUST, VERIFIED" />
              </p>
              <h2
                id="compliance-heading"
                className="mt-4 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl"
              >
                Certified to the standard regulators actually cite.
              </h2>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-teal-100/70">
                Compliance at Meridian is not a brochure. It's a continuous, independently audited program — and
                the evidence is available to your procurement team under NDA.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2.5 rounded-md bg-teal-500 px-6 py-3.5 text-base font-semibold text-pine-950 shadow-lg shadow-teal-500/20 transition-all hover:-translate-y-0.5 hover:bg-teal-400"
                >
                  Request the compliance pack
                  <IconArrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <span className="font-mono text-[11.5px] text-teal-300/80">PDF · 2.1 MB · under NDA</span>
              </div>

              <div className="mt-10 rounded-lg border border-pine-700 bg-pine-900/70 p-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-teal-400">
                  Sample audit trail · read-only
                </p>
                <div className="mt-3 space-y-1.5 overflow-x-auto font-mono text-[11.5px] leading-relaxed text-teal-200/80">
                  {auditLines.map((l) => (
                    <p key={l} className="whitespace-nowrap">
                      {l}
                    </p>
                  ))}
                </div>
                <p className="mt-3 border-t border-pine-800 pt-2.5 font-mono text-[10.5px] text-teal-400/70">
                  log chain verified ✓ · WORM bucket · us-east-1
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* certifications */}
        <div className="lg:col-span-7">
          <ul className="grid gap-4 sm:grid-cols-2" role="list">
            {certs.map((c, i) => (
              <Reveal
                as="li"
                key={c.name}
                delay={(i % 2) * 100}
                className="lift group flex flex-col rounded-xl border border-pine-700 bg-pine-900/60 p-5 hover:border-teal-500/60 hover:bg-pine-900"
              >
                <div className="flex items-start justify-between gap-3">
                  <IconSeal className="h-9 w-9 text-teal-400 transition-transform duration-500 group-hover:rotate-[18deg]" />
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-teal-500/40 bg-teal-500/10 px-2.5 py-1 font-mono text-[10px] tracking-wider text-teal-300">
                    <IconCheck className="h-3 w-3" /> VALID
                  </span>
                </div>
                <h3 className="mt-4 font-display text-[22px] font-bold text-white">{c.name}</h3>
                <p className="mt-0.5 font-mono text-[11px] tracking-wide text-teal-300/90">
                  {c.issuer} · {c.ref}
                </p>
                <p className="mt-3 flex-1 text-[13.5px] leading-relaxed text-teal-100/65">{c.scope}</p>
                <p className="mt-4 border-t border-pine-800 pt-3 font-mono text-[11px] text-teal-400/80">
                  {c.valid}
                </p>
              </Reveal>
            ))}
          </ul>

          {/* security capabilities */}
          <Reveal className="mt-12">
            <h3 className="font-display text-2xl font-bold text-white">Engineered before it's certified.</h3>
            <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-teal-100/60">
              The controls behind the certificates — the day-to-day mechanics that keep PHI quiet and provable.
            </p>
          </Reveal>
          <ul className="mt-6 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4" role="list">
            {securityCapabilities.map((s, i) => (
              <Reveal as="li" key={s.title} delay={(i % 4) * 80} className="group">
                <s.icon className="h-6 w-6 text-teal-400 transition-colors group-hover:text-teal-300" />
                <h4 className="mt-3 text-[15px] font-semibold text-white">{s.title}</h4>
                <p className="mt-1 text-[13px] leading-relaxed text-teal-100/60">{s.desc}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
