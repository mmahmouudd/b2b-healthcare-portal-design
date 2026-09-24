import { useRef, useState, type FormEvent } from "react";
import { IconArrow, IconCheck, IconMail, IconPhone, IconPin, IconSeal } from "../data";
import { DecodeText, Reveal } from "./motion";
import { cn } from "../utils/cn";

const roles = ["Clinician / Medical Director", "Practice Administrator", "COO / Operations", "CFO / Revenue Cycle", "IT / Integration Lead", "Compliance / Privacy Officer", "Other"];
const siteSizes = ["Single site", "2–5 sites", "6–20 sites", "20+ sites"];
const interests = ["Scheduling & front desk", "Billing & payers", "Workforce & rostering", "Records sync (EHR)", "Telehealth & portal", "Audit & compliance tooling"];

const nextSteps = [
  ["1", "A named supplier rep replies within 1 business day — a person, not a funnel."],
  ["2", "We complete your security questionnaire and send the compliance pack under NDA."],
  ["3", "Sandbox walkthrough with 90 days of synthetic PHI, mapped to your module set."],
  ["4", "ROI model built on your current claims data. No setup fees, no seat minimums."],
];

type Errors = Partial<Record<"name" | "email" | "org" | "consent", string>>;

export default function Contact() {
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [ref, setRef] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const next: Errors = {};
    if (!String(fd.get("name") || "").trim()) next.name = "Please tell us your full name.";
    const email = String(fd.get("email") || "").trim();
    if (!email) next.email = "A work email is required so your rep can follow up.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "That email doesn't look valid — please check it.";
    if (!String(fd.get("org") || "").trim()) next.org = "Please enter your clinic or organization name.";
    if (fd.get("hp")) return; // honeypot
    if (!fd.get("consent")) next.consent = "We need your consent to process this inquiry.";
    setErrors(next);
    if (Object.keys(next).length > 0) {
      const first = formRef.current?.querySelector<HTMLElement>("[aria-invalid='true']");
      first?.focus();
      return;
    }
    setRef(`MER-${Math.floor(10000 + Math.random() * 89999)}`);
    setSubmitted(true);
  };

  const inputCls = (bad?: string) =>
    cn(
      "w-full rounded-md border bg-white px-3.5 py-2.5 text-[15px] text-ink placeholder:text-muted/60 transition-colors focus:border-teal-500",
      bad ? "border-red-400 bg-red-50/40" : "border-line hover:border-teal-300"
    );

  const Err = ({ id, msg }: { id: string; msg?: string }) =>
    msg ? (
      <p id={id} className="mt-1.5 flex items-center gap-1.5 text-[13px] font-medium text-red-700">
        <span aria-hidden="true">•</span> {msg}
      </p>
    ) : null;

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-28 border-t border-line bg-gradient-to-b from-paper to-mist/80 py-20 lg:py-28"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:px-8">
        {/* left: context */}
        <div className="lg:col-span-5">
          <Reveal>
            <p className="font-mono text-[12px] font-medium tracking-[0.2em] text-teal-700">
              <DecodeText text="SUPPLIER LIAISON" />
            </p>
            <h2
              id="contact-heading"
              className="mt-4 font-display text-4xl font-bold tracking-tight text-pine-900 sm:text-5xl"
            >
              Talk to a human who knows your stack.
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-muted">
              One supplier representative, end to end — from the first call through go-live and your next
              audit. No ticket queues, no rotating accounts.
            </p>

            <h3 className="mt-10 font-display text-lg font-semibold text-pine-900">What happens next</h3>
            <ol className="mt-4 space-y-4">
              {nextSteps.map(([n, text]) => (
                <li key={n} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-600 font-mono text-[13px] font-semibold text-white">
                    {n}
                  </span>
                  <span className="pt-1 text-[14.5px] leading-relaxed text-muted">{text}</span>
                </li>
              ))}
            </ol>

            <div className="mt-10 space-y-3 rounded-lg border border-line bg-white/80 p-5 font-mono text-[13px] text-ink-soft">
              <p className="flex items-center gap-3">
                <IconPhone className="h-4 w-4 text-teal-600" /> +1 (800) 555-0164
              </p>
              <p className="flex items-center gap-3">
                <IconMail className="h-4 w-4 text-teal-600" /> suppliers@meridian.health
              </p>
              <p className="flex items-center gap-3">
                <IconPin className="h-4 w-4 text-teal-600" /> 4400 Harbor Ave, Suite 900 · Portland, OR
              </p>
              <p className="border-t border-line pt-3 text-[11.5px] text-muted">
                Mon–Fri, 8:00–18:00 PT · NDA available on first contact
              </p>
            </div>
          </Reveal>
        </div>

        {/* right: form */}
        <Reveal delay={120} className="lg:col-span-7">
          <div className="rounded-xl border border-line bg-white p-6 shadow-[0_30px_70px_-40px_rgba(6,33,31,0.4)] sm:p-8">
            {submitted ? (
              <div role="status" className="py-10 text-center">
                <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-teal-50">
                  <IconSeal className="h-9 w-9 text-teal-600" />
                </span>
                <h3 className="mt-6 font-display text-3xl font-bold text-pine-900">Request received.</h3>
                <p className="mx-auto mt-3 max-w-sm text-[15.5px] leading-relaxed text-muted">
                  Reference <span className="font-mono font-semibold text-teal-700">{ref}</span>. Dana Kowalski,
                  supplier liaison, will reach out within one business day with your compliance pack and a
                  proposed call time.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setErrors({});
                  }}
                  className="mt-8 inline-flex items-center gap-2 rounded-md border border-line bg-mist/60 px-5 py-3 text-[15px] font-semibold text-pine-900 transition-colors hover:border-teal-400 hover:bg-mist"
                >
                  Submit another inquiry
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={onSubmit} noValidate aria-describedby="form-note">
                <h3 className="font-display text-2xl font-bold text-pine-900">Supplier inquiry</h3>
                <p id="form-note" className="mt-1.5 text-[13.5px] text-muted">
                  Fields marked <span className="font-semibold text-red-700">*</span> are required. We reply
                  within one business day — no newsletters, no drip campaigns.
                </p>

                {/* honeypot */}
                <div className="absolute -left-[9999px] top-0" aria-hidden="true">
                  <label htmlFor="hp">Company</label>
                  <input id="hp" name="hp" type="text" tabIndex={-1} autoComplete="off" />
                </div>

                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-[14px] font-semibold text-pine-900">
                      Full name <span className="text-red-700" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "err-name" : undefined}
                      className={inputCls(errors.name)}
                      placeholder="Dr. Jordan Reyes"
                    />
                    <Err id="err-name" msg={errors.name} />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-[14px] font-semibold text-pine-900">
                      Work email <span className="text-red-700" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "err-email" : undefined}
                      className={inputCls(errors.email)}
                      placeholder="j.reyes@yourclinic.org"
                    />
                    <Err id="err-email" msg={errors.email} />
                  </div>
                  <div>
                    <label htmlFor="org" className="mb-1.5 block text-[14px] font-semibold text-pine-900">
                      Clinic / organization <span className="text-red-700" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="org"
                      name="org"
                      type="text"
                      autoComplete="organization"
                      required
                      aria-invalid={!!errors.org}
                      aria-describedby={errors.org ? "err-org" : undefined}
                      className={inputCls(errors.org)}
                      placeholder="Brightline Clinics"
                    />
                    <Err id="err-org" msg={errors.org} />
                  </div>
                  <div>
                    <label htmlFor="role" className="mb-1.5 block text-[14px] font-semibold text-pine-900">
                      Your role
                    </label>
                    <select id="role" name="role" className={inputCls()} defaultValue={roles[1]}>
                      {roles.map((r) => (
                        <option key={r}>{r}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="sites" className="mb-1.5 block text-[14px] font-semibold text-pine-900">
                      Number of sites
                    </label>
                    <select id="sites" name="sites" className={inputCls()} defaultValue={siteSizes[1]}>
                      {siteSizes.map((s) => (
                        <option key={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-1.5 block text-[14px] font-semibold text-pine-900">
                      Direct phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      className={inputCls()}
                      placeholder="(503) 555-0100"
                    />
                  </div>
                </div>

                <fieldset className="mt-7">
                  <legend className="text-[14px] font-semibold text-pine-900">
                    What are you looking to manage first? <span className="font-normal text-muted">(pick any)</span>
                  </legend>
                  <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
                    {interests.map((it) => (
                      <label
                        key={it}
                        className="flex cursor-pointer items-center gap-3 rounded-md border border-line bg-white px-3.5 py-2.5 text-[14px] text-ink-soft transition-colors hover:border-teal-300 has-checked:border-teal-500 has-checked:bg-teal-50/60 has-checked:text-pine-900"
                      >
                        <input
                          type="checkbox"
                          name="interests"
                          value={it}
                          className="h-4 w-4 accent-teal-600"
                          defaultChecked={it === "Records sync (EHR)"}
                        />
                        {it}
                      </label>
                    ))}
                  </div>
                </fieldset>

                <div className="mt-7">
                  <label htmlFor="message" className="mb-1.5 block text-[14px] font-semibold text-pine-900">
                    Anything we should know?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className={inputCls()}
                    placeholder="Current EHR, go-live window, payer mix, anything that's been keeping the ops team up at night…"
                  />
                </div>

                <div className="mt-6 space-y-3">
                  <label className="flex cursor-pointer items-start gap-3 text-[13.5px] leading-relaxed text-muted">
                    <input
                      type="checkbox"
                      name="consent"
                      className="mt-0.5 h-4 w-4 accent-teal-600"
                      required
                      aria-invalid={!!errors.consent}
                      aria-describedby={errors.consent ? "err-consent" : undefined}
                    />
                    <span>
                      I agree to Meridian processing this inquiry per the{" "}
                      <a href="#top" className="font-semibold text-teal-700 underline underline-offset-2 hover:text-teal-600">
                        data processing terms
                      </a>
                      . <span className="text-red-700" aria-hidden="true">*</span>
                    </span>
                  </label>
                  <Err id="err-consent" msg={errors.consent} />
                  <label className="flex cursor-pointer items-start gap-3 text-[13.5px] leading-relaxed text-muted">
                    <input type="checkbox" name="bba" className="mt-0.5 h-4 w-4 accent-teal-600" />
                    <span>Send me the security questionnaire and BAA template first.</span>
                  </label>
                </div>

                <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
                  <button
                    type="submit"
                    className="group inline-flex items-center gap-2.5 rounded-md bg-teal-600 px-7 py-3.5 text-base font-semibold text-white shadow-md shadow-teal-600/20 transition-all hover:-translate-y-0.5 hover:bg-teal-700 hover:shadow-lg"
                  >
                    Send to supplier team
                    <IconArrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                  <p className="flex items-center gap-2 font-mono text-[11px] text-muted">
                    <IconCheck className="h-3.5 w-3.5 text-teal-600" />
                    Encrypted in transit · read by 2 people, max
                  </p>
                </div>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
