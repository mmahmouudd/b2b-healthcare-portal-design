import { features, stats } from "../data";
import { CountUp, DecodeText, Reveal } from "./motion";

export default function Platform() {
  return (
    <>
      <section id="platform" aria-labelledby="platform-heading" className="relative scroll-mt-28 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl">
            <p className="font-mono text-[12px] font-medium tracking-[0.2em] text-teal-700">
              <DecodeText text="THE PLATFORM" />
            </p>
            <h2
              id="platform-heading"
              className="mt-4 font-display text-4xl font-bold tracking-tight text-pine-900 sm:text-5xl"
            >
              Six departments.
              <br />
              One quiet backbone.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              No module sprawl, no plugin roulette. Each capability ships pre-wired to the others and to your
              EHR — so a booking, a shift and a claim share the same source of truth.
            </p>
          </Reveal>

          <ul className="mt-12 grid list-none grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-12">
            {features.map((f, i) => (
              <Reveal
                as="li"
                key={f.title}
                delay={(i % 3) * 90}
                className={`lift group rounded-xl border border-line bg-white/80 p-6 hover:border-teal-400 hover:shadow-[0_24px_50px_-30px_rgba(6,33,31,0.4)] ${f.span}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-teal-50 text-teal-700 transition-colors group-hover:bg-teal-600 group-hover:text-white">
                    <f.icon className="h-6 w-6" />
                  </span>
                  <span className="rounded border border-line bg-mist/60 px-2 py-1 font-mono text-[10px] tracking-[0.18em] text-muted">
                    {f.tag}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold text-pine-900">{f.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">{f.desc}</p>
                {f.visual}
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* stats band */}
      <section aria-label="Platform performance in numbers" className="bg-grid-dark relative overflow-hidden bg-pine-950">
        <div
          className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-teal-700/30 blur-3xl"
          aria-hidden="true"
        />
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-10 px-4 py-16 sm:px-6 lg:grid-cols-4 lg:px-8 lg:py-20">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 100} className="text-center lg:text-left">
              <p className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
                <CountUp to={s.value} decimals={s.decimals} suffix={s.suffix} />
              </p>
              <p className="mx-auto mt-2 max-w-[180px] font-mono text-[12px] leading-5 tracking-wide text-teal-300/90 lg:mx-0">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
