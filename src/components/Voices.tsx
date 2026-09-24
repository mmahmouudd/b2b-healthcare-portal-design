import { useState } from "react";
import { testimonials, faqs, IconArrow } from "../data";
import { DecodeText, Reveal } from "./motion";
import { cn } from "../utils/cn";

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-line border-y border-line">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q}>
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${i}`}
                id={`faq-button-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-6 py-5 text-left transition-colors hover:text-teal-700"
              >
                <span className={cn("font-display text-[17px] font-semibold", isOpen ? "text-teal-700" : "text-pine-900")}>
                  {f.q}
                </span>
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className={cn(
                    "h-5 w-5 shrink-0 text-teal-600 transition-transform duration-300",
                    isOpen && "rotate-45"
                  )}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </button>
            </h3>
            <div
              id={`faq-panel-${i}`}
              role="region"
              aria-labelledby={`faq-button-${i}`}
              hidden={!isOpen}
              className="pb-6 pr-10 text-[15px] leading-relaxed text-muted"
            >
              {f.a}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function Voices() {
  return (
    <section id="voices" aria-labelledby="voices-heading" className="scroll-mt-28 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* testimonials */}
        <Reveal className="max-w-2xl">
          <p className="font-mono text-[12px] font-medium tracking-[0.2em] text-teal-700">
            <DecodeText text="IN PRACTICE" />
          </p>
          <h2
            id="voices-heading"
            className="mt-4 font-display text-4xl font-bold tracking-tight text-pine-900 sm:text-5xl"
          >
            Heard in the break room,
            <br />
            cited in the board deck.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal
              as="figure"
              key={t.name}
              delay={i * 120}
              className={cn(
                "lift rounded-xl border border-line bg-white p-6 shadow-[0_20px_45px_-30px_rgba(6,33,31,0.35)] transition-transform hover:rotate-0",
                t.rotate
              )}
            >
              <span
                className={cn(
                  "inline-flex items-center gap-2 rounded-full px-3 py-1 font-mono text-[11px] font-medium text-white",
                  t.tone
                )}
              >
                {t.metric}
              </span>
              <blockquote className="mt-5">
                <p className="font-display text-[19px] font-medium leading-snug text-pine-900">
                  “{t.quote}”
                </p>
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                <span
                  className={cn(
                    "flex h-11 w-11 items-center justify-center rounded-full font-display text-sm font-bold text-white",
                    t.tone
                  )}
                  aria-hidden="true"
                >
                  {t.initials}
                </span>
                <span>
                  <span className="block text-[15px] font-semibold text-pine-900">{t.name}</span>
                  <span className="block text-[13px] text-muted">
                    {t.role} · {t.org}
                  </span>
                </span>
              </figcaption>
            </Reveal>
          ))}
        </div>

        {/* FAQ */}
        <div className="mt-24 grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="font-mono text-[12px] font-medium tracking-[0.2em] text-teal-700">
              <DecodeText text="BEFORE YOU ASK" />
            </p>
            <h3 className="mt-4 font-display text-3xl font-bold tracking-tight text-pine-900 sm:text-4xl">
              The questions procurement always asks first.
            </h3>
            <p className="mt-4 text-[15.5px] leading-relaxed text-muted">
              Anything else — migration edge cases, payer quirks, regional rules — go straight to a supplier
              representative who has sat in your break room before.
            </p>
            <a
              href="#contact"
              className="group mt-6 inline-flex items-center gap-2 font-semibold text-teal-700 transition-colors hover:text-teal-600"
            >
              Ask a human
              <IconArrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-8">
            <Faq />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
