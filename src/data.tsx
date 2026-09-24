import type { ReactNode } from "react";

/* ---------------- custom inline icons (24x24, stroke) ---------------- */

type IconProps = { className?: string };

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
  "aria-hidden": true as const,
};

export const IconSchedule = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" />
    <path d="M3.5 9.5h17M8 3v4M16 3v4" />
    <path d="M7.5 13.5h3l1.5-2 2 4 1.5-2h1" />
  </svg>
);

export const IconBilling = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <path d="M5 3.5h11.5L19 6v14.5H5z" />
    <path d="M8 8h6M8 11.5h8" />
    <circle cx="15.5" cy="16.5" r="3.4" />
    <path d="M14.2 16.5h2.6M15.5 15.2v2.6" />
  </svg>
);

export const IconRoster = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <circle cx="9" cy="8" r="3.2" />
    <path d="M3.5 19.5c0-3 2.5-5 5.5-5s5.5 2 5.5 5" />
    <circle cx="17" cy="9" r="2.5" />
    <path d="M16.5 14.6c2.6.3 4 2 4 4.4" />
  </svg>
);

export const IconTele = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <rect x="3" y="5.5" width="13" height="13" rx="2.5" />
    <path d="M16 10.5l5-3v9l-5-3" />
    <path d="M7.5 12h2l1-1.6 1.5 3 1-1.4h1.5" />
  </svg>
);

export const IconRx = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <rect x="3.5" y="8.5" width="11" height="7" rx="3.5" transform="rotate(-25 9 12)" />
    <path d="M13.8 8.6l6.7-4a1 1 0 0 1 1.4.36l1.2 2.1a1 1 0 0 1-.36 1.37l-6.7 4" />
    <path d="M8.6 13.4l2.6-4.2" />
  </svg>
);

export const IconAudit = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <path d="M4 20.5h16" />
    <path d="M6.5 20.5v-6M11 20.5V10M15.5 20.5v-8M20 20.5V5.5" />
    <path d="M17.5 8.5c.8.8 1.5 1 2.5.6" />
  </svg>
);

export const IconShield = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <path d="M12 3l7.5 2.8v5.4c0 4.6-3 8.2-7.5 9.8-4.5-1.6-7.5-5.2-7.5-9.8V5.8z" />
    <path d="M8.8 12l2.2 2.2 4.2-4.4" />
  </svg>
);

export const IconLock = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <rect x="5" y="10.5" width="14" height="10" rx="2.5" />
    <path d="M8 10.5V8a4 4 0 0 1 8 0v2.5" />
    <path d="M12 14.5v2.5" />
  </svg>
);

export const IconKey = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <circle cx="8" cy="8.5" r="4.5" />
    <path d="M11.3 11.8L20 20.5M16.5 17l2-2M13.8 14.3l2-2" />
  </svg>
);

export const IconServer = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <rect x="4" y="4" width="16" height="7" rx="2" />
    <rect x="4" y="13" width="16" height="7" rx="2" />
    <path d="M7.5 7.5h.01M7.5 16.5h.01M11 7.5h2M11 16.5h2" />
  </svg>
);

export const IconGlobe = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M3.5 12h17M12 3.5c2.6 2.3 3.8 5.2 3.8 8.5s-1.2 6.2-3.8 8.5c-2.6-2.3-3.8-5.2-3.8-8.5s1.2-6.2 3.8-8.5z" />
  </svg>
);

export const IconEye = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <path d="M2.5 12S6 5.8 12 5.8 21.5 12 21.5 12 18 18.2 12 18.2 2.5 12 2.5 12z" />
    <circle cx="12" cy="12" r="2.8" />
  </svg>
);

export const IconBolt = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <path d="M13 2.5L5 13.5h5.5L11 21.5l8-11h-5.5z" />
  </svg>
);

export const IconSeal = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <path d="M12 2.8l2.1 1.9 2.8-.4 1 2.7 2.7 1-.4 2.8 1.9 2.1-1.9 2.1.4 2.8-2.7 1-1 2.7-2.8-.4-2.1 1.9-2.1-1.9-2.8.4-1-2.7-2.7-1 .4-2.8L2.9 12l1.9-2.1-.4-2.8 2.7-1 1-2.7 2.8.4z" />
    <path d="M8.8 12.2l2.2 2.2 4.4-4.6" />
  </svg>
);

export const IconCheck = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <path d="M4.5 12.5l5 5 10-11" />
  </svg>
);

export const IconArrow = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <path d="M4 12h16M13 5l7 7-7 7" />
  </svg>
);

export const IconPhone = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <path d="M5 4h4l1.5 4.5-2.2 1.7a12 12 0 0 0 5.5 5.5l1.7-2.2L20 15v4a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 3 6.2 2 2 0 0 1 5 4z" />
  </svg>
);

export const IconMail = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <rect x="3" y="5.5" width="18" height="13" rx="2.5" />
    <path d="M3.5 7l8.5 6 8.5-6" />
  </svg>
);

export const IconPin = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <path d="M12 21s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11z" />
    <circle cx="12" cy="9.8" r="2.6" />
  </svg>
);

export const Logo = ({ className, light = false }: { className?: string; light?: boolean }) => (
  <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
    <rect x="2" y="2" width="36" height="36" rx="10" fill={light ? "#0F6B60" : "#0E3A38"} />
    <path
      d="M8 21.5h5l3-6.5 4 12 3-7.5 1.6 2h6.4"
      fill="none"
      stroke={light ? "#EFF9F5" : "#6FC4B2"}
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="31" cy="10" r="2.2" fill="#35A18F" />
  </svg>
);

/* ---------------- content data ---------------- */

export const navLinks = [
  { label: "Platform", href: "#platform" },
  { label: "Integrations", href: "#integrations" },
  { label: "Compliance", href: "#compliance" },
  { label: "In practice", href: "#voices" },
  { label: "Contact", href: "#contact" },
];

export const standards = [
  "HL7 FHIR R4",
  "SMART on FHIR",
  "USCDI v3",
  "ICD-10-CM",
  "LOINC",
  "RxNorm",
  "DICOM",
  "X12 837 / 835",
  "NPI Registry",
  "21 CFR Part 11",
];

export type FeedEvent = {
  time: string;
  channel: string;
  tone: "teal" | "sea" | "sage" | "mute";
  text: string;
  status: string;
};

export const feedEvents: FeedEvent[] = [
  { time: "09:41:02", channel: "EHR", tone: "teal", text: "FHIR bundle received — Maple St. Family Clinic", status: "128 resources · verified" },
  { time: "09:41:05", channel: "LABS", tone: "sea", text: "CMP-12 panel mapped to LOINC 24320-8", status: "auto-filed" },
  { time: "09:41:11", channel: "e-RX", tone: "sage", text: "Atenolol 50mg → Cedar Pharmacy (RxNorm matched)", status: "sent" },
  { time: "09:41:19", channel: "CLAIM", tone: "sea", text: "ERA posted — clean claim, $1,240.00", status: "98.2% clean rate" },
  { time: "09:41:26", channel: "IMG", tone: "teal", text: "DICOM study C-1187 indexed (14 slices)", status: "indexed" },
  { time: "09:41:33", channel: "ROSTER", tone: "sage", text: "On-call swap approved — Dr. Okafor", status: "confirmed" },
  { time: "09:41:41", channel: "EHR", tone: "teal", text: "Consent refresh synced — 214 patients", status: "verified" },
  { time: "09:41:47", channel: "AUDIT", tone: "mute", text: "Access log sealed — 4,910 events", status: "sealed" },
];

export type Feature = {
  icon: (p: IconProps) => ReactNode;
  title: string;
  desc: string;
  tag: string;
  span: string;
  visual: ReactNode;
};

const weekDays = ["M", "T", "W", "T", "F", "S", "S"];

const weekVisual = (
  <div className="mt-5 space-y-1.5" aria-hidden="true">
    {weekDays.map((d, i) => (
      <div key={i} className="flex items-center gap-2">
        <span className="w-3 font-mono text-[10px] text-muted">{d}</span>
        <div className="flex flex-1 gap-1.5">
          <div
            className={`h-3 rounded-sm ${
              [0, 2, 4].includes(i) ? "w-2/5 bg-teal-400" : "w-1/5 bg-sea-400"
            }`}
          />
          <div className={`h-3 rounded-sm ${i % 2 === 0 ? "w-1/4 bg-sage-300" : "w-1/5 bg-teal-200"}`} />
          <div className={`h-3 rounded-sm ${i === 3 ? "w-3/5 bg-mist-deep" : "w-1/6 bg-teal-300"}`} />
        </div>
      </div>
    ))}
  </div>
);

const billingVisual = (
  <div className="mt-5" aria-hidden="true">
    <div className="flex items-baseline justify-between">
      <span className="font-mono text-[11px] text-muted">Clean-claim rate</span>
      <span className="font-display text-2xl font-semibold text-teal-600">98.2%</span>
    </div>
    <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-mist">
      <div className="h-full w-[98%] rounded-full bg-gradient-to-r from-teal-500 to-teal-300" />
    </div>
    <div className="mt-3 flex justify-between font-mono text-[11px] text-muted">
      <span>ERA posted — 4,209 mo</span>
      <span className="text-teal-600">+$214k recovered</span>
    </div>
  </div>
);

const rosterVisual = (
  <div className="mt-5 flex flex-wrap gap-1.5" aria-hidden="true">
    {[
      ["08:00", "teal", 3],
      ["12:30", "sea", 2],
      ["17:00", "sage", 3],
      ["ON-CALL", "mist", 1],
    ].map(([label, tone, n], i) => (
      <span
        key={i}
        className={`inline-flex items-center gap-1.5 rounded-full border border-line bg-white/70 px-2.5 py-1 font-mono text-[11px] text-ink-soft`}
      >
        <span
          className={`h-1.5 w-1.5 rounded-full ${
            tone === "teal" ? "bg-teal-500" : tone === "sea" ? "bg-sea-500" : tone === "sage" ? "bg-sage-500" : "bg-mist-deep"
          }`}
        />
        {label}
        <span className="text-muted">×{n}</span>
      </span>
    ))}
  </div>
);

const teleVisual = (
  <div className="mt-5 grid grid-cols-3 gap-2" aria-hidden="true">
    {["Dr. O", "J. Reyes", "P. Nair"].map((n, i) => (
      <div key={i} className="rounded-md border border-line bg-gradient-to-b from-sea-50 to-white p-2">
        <div
          className={`flex h-9 items-center justify-center rounded font-display text-xs font-semibold ${
            i === 0 ? "bg-teal-500 text-white" : i === 1 ? "bg-sea-500 text-white" : "bg-mist text-ink-soft"
          }`}
        >
          {n}
        </div>
        <div className="mt-1.5 h-1.5 w-2/3 rounded bg-mist-deep" />
      </div>
    ))}
  </div>
);

const rxVisual = (
  <div className="mt-5 space-y-1.5 font-mono text-[11px]" aria-hidden="true">
    {[
      ["Rx-4471", "Atenolol 50mg", "sent"],
      ["Rx-4472", "Metformin 500mg", "sent"],
      ["Rx-4473", "Lisinopril 10mg", "matching…"],
    ].map(([id, med, st], i) => (
      <div key={i} className="flex items-center justify-between rounded-md border border-line bg-white/70 px-2.5 py-1.5">
        <span className="text-muted">{id}</span>
        <span className="text-ink">{med}</span>
        <span className={st === "sent" ? "text-teal-600" : "text-sea-500"}>{st}</span>
      </div>
    ))}
  </div>
);

const auditVisual = (
  <div className="mt-5 flex flex-wrap items-end gap-x-6 gap-y-4" aria-hidden="true">
    <div className="flex h-16 items-end gap-1">
      {[38, 52, 44, 60, 55, 72, 66, 84, 78, 92, 88, 100].map((h, i) => (
        <div key={i} className={`w-2.5 rounded-t-sm ${i >= 9 ? "bg-teal-500" : "bg-teal-200"}`} style={{ height: `${h}%` }} />
      ))}
    </div>
    <div className="font-mono text-[11px] leading-5 text-muted">
      <p>
        events today <span className="text-ink">4,910</span>
      </p>
      <p>
        sealed &amp; hash-chained <span className="text-teal-600">100%</span>
      </p>
    </div>
  </div>
);

export const features: Feature[] = [
  {
    icon: IconSchedule,
    title: "Scheduling & triage",
    desc: "Multi-site calendar with smart triage routing, waitlist auto-fill and no-show recovery. Front desks stop firefighting.",
    tag: "FRONT DESK",
    span: "lg:col-span-7",
    visual: weekVisual,
  },
  {
    icon: IconBilling,
    title: "Billing & payers",
    desc: "Eligibility checks, charge entry and claim submission with payer-rule validation before the claim ever leaves the building.",
    tag: "REVENUE",
    span: "lg:col-span-5",
    visual: billingVisual,
  },
  {
    icon: IconRoster,
    title: "Workforce & rostering",
    desc: "Shifts, on-call swaps, credential expiry alerts and state-level scope tracking for every clinician on payroll.",
    tag: "OPERATIONS",
    span: "lg:col-span-4",
    visual: rosterVisual,
  },
  {
    icon: IconTele,
    title: "Telehealth & patient portal",
    desc: "In-platform video visits with consent capture, shared records and e-visit notes that file straight into the chart.",
    tag: "PATIENTS",
    span: "lg:col-span-4",
    visual: teleVisual,
  },
  {
    icon: IconRx,
    title: "Pharmacy & e-prescribing",
    desc: "RxNorm-verified e-Rx with interactions screening and pharmacy confirmation loops — no more faxed scripts.",
    tag: "CLINICAL",
    span: "lg:col-span-4",
    visual: rxVisual,
  },
  {
    icon: IconAudit,
    title: "Analytics & immutable audit trail",
    desc: "Every click, edit and export is hash-chained and time-stamped. Board-ready dashboards on top; regulator-ready paper trail underneath.",
    tag: "TRUST",
    span: "lg:col-span-12",
    visual: auditVisual,
  },
];

export type IntegrationTab = {
  id: string;
  label: string;
  blurb: string;
  source: string;
  resource: string;
  rows: { item: string; code: string; sync: string; status: "Synced" | "Mapped" | "Verified" }[];
  payload: string;
};

export const integrationTabs: IntegrationTab[] = [
  {
    id: "ehr",
    label: "EHR exchange",
    blurb: "Bidirectional FHIR R4 sync with your primary EHR — demographics, visits, diagnoses and care plans stay in lockstep.",
    source: "Primary EHR",
    resource: "Bundle · Patient / Encounter / Condition",
    rows: [
      { item: "Patient demographics", code: "Patient", sync: "12s ago", status: "Synced" },
      { item: "Visit history (2 yrs)", code: "Encounter", sync: "12s ago", status: "Synced" },
      { item: "Active diagnoses", code: "Condition", sync: "1m ago", status: "Mapped" },
      { item: "Care plans", code: "CarePlan", sync: "3m ago", status: "Verified" },
    ],
    payload: `{ "resourceType": "Bundle", "type": "collection", "total": 128, "entry": [ { "resource": { "resourceType": "Patient", "name": [ { "family": "Okafor" } ], "birthDate": "1988-04-12" } } ], "_meta": { "profile": "hl7.fhir.us.core" } }`,
  },
  {
    id: "labs",
    label: "Lab results",
    blurb: "Result feeds auto-mapped to LOINC codes and filed to the right chart, with abnormal ranges flagged before the clinician opens the file.",
    source: "Lab network",
    resource: "Observation · LOINC-coded",
    rows: [
      { item: "Comprehensive metabolic", code: "LOINC 24320-8", sync: "34s ago", status: "Mapped" },
      { item: "Complete blood count", code: "LOINC 718-7", sync: "2m ago", status: "Synced" },
      { item: "HbA1c", code: "LOINC 4548-4", sync: "5m ago", status: "Verified" },
      { item: "Lipid panel", code: "LOINC 2335-7", sync: "9m ago", status: "Synced" },
    ],
    payload: `{ "resourceType": "Observation", "status": "final", "code": { "coding": [ { "system": "http://loinc.org", "code": "24320-8", "display": "Comprehensive metabolic panel" } ] }, "valueQuantity": { "value": 92, "unit": "mg/dL" } }`,
  },
  {
    id: "imaging",
    label: "Imaging (DICOM)",
    blurb: "Studies indexed by modality and body part, linked to the encounter in seconds. Report text lands where the order was placed.",
    source: "Imaging hub",
    resource: "ImagingStudy + Media · DICOM",
    rows: [
      { item: "Chest CT, non-contrast", code: "CT · 14 slices", sync: "1m ago", status: "Verified" },
      { item: "Mammogram, bilateral", code: "MG · 8 views", sync: "4m ago", status: "Mapped" },
      { item: "Wrist X-ray, 2 views", code: "DX · 2 views", sync: "11m ago", status: "Synced" },
      { item: "Ultrasound, abdomen", code: "US · 32 frames", sync: "18m ago", status: "Synced" },
    ],
    payload: `{ "resourceType": "ImagingStudy", "id": "C-1187", "modality": [{ "code": { "code": "CT" } }], "numberOfSeries": 2, "series": [ { "instanceAvailability": "AVAILABLE", "numberOfInstances": 14 } ] }`,
  },
  {
    id: "rx",
    label: "e-Prescribing",
    blurb: "Scripts verified against RxNorm with interaction checks, then confirmed by the pharmacy of choice in a single closed loop.",
    source: "e-Rx hub",
    resource: "MedicationRequest · RxNorm",
    rows: [
      { item: "Atenolol 50mg · daily", code: "RxNorm 83140", sync: "22s ago", status: "Verified" },
      { item: "Metformin 500mg · BID", code: "RxNorm 6809", sync: "6m ago", status: "Synced" },
      { item: "Lisinopril 10mg · daily", code: "RxNorm 29046", sync: "14m ago", status: "Mapped" },
      { item: "Omeprazole 20mg · daily", code: "RxNorm 7646", sync: "1h ago", status: "Synced" },
    ],
    payload: `{ "resourceType": "MedicationRequest", "status": "active", "medicationCodeableConcept": { "coding": [ { "system": "http://www.nlm.nih.gov/research/umls/rxnorm", "code": "83140" } ] }, "priority": "routine" }`,
  },
];

export const integrationPoints = [
  { title: "Field-level mapping", desc: "LOINC, ICD-10 and RxNorm validation on every field, so nothing lands in a chart mislabeled." },
  { title: "Conflict-safe & bidirectional", desc: "Writes from both directions are merged by record lineage — no overwrites, no silent drift." },
  { title: "Full audit lineage", desc: "Every transferred record carries its provenance: source system, timestamp, hash and operator." },
];

export type Cert = {
  name: string;
  issuer: string;
  ref: string;
  valid: string;
  scope: string;
};

export const certs: Cert[] = [
  { name: "HIPAA", issuer: "HHS · 45 CFR Part 164", ref: "PHI handling, end-to-end", valid: "Continuous", scope: "Privacy & security rules enforced across storage, transfer and access for all protected health information." },
  { name: "SOC 2 Type II", issuer: "AICPA Trust Services", ref: "Audited annually", valid: "Through Dec 2026", scope: "Two-year observation of security, availability and confidentiality controls by an independent auditor." },
  { name: "ISO/IEC 27001:2022", issuer: "Accredited registrar", ref: "ISMS certificate 88412", valid: "Renewal 2027-03", scope: "Certified information security management system covering infrastructure, people and process." },
  { name: "HITRUST CSF r2", issuer: "HITRUST Alliance", ref: "i2 · Level 140", valid: "Current cycle", scope: "Healthcare-specific security framework, assessed against 140 controls across the full data path." },
  { name: "HITECH Act", issuer: "US federal statute", ref: "Breach notification", valid: "Continuous", scope: "Transparent breach notification workflows, with 60-day clock tooling built into the admin console." },
  { name: "GDPR & CCPA", issuer: "EU / California", ref: "DPA + RoPA on file", valid: "Continuous", scope: "For multi-region health systems: data subject rights tooling and EU data residency options." },
];

export const securityCapabilities = [
  { icon: IconLock, title: "AES-256 at rest", desc: "Field-level encryption for PHI, keys rotated every 90 days in HSMs." },
  { icon: IconServer, title: "TLS 1.3 in transit", desc: "Certificate-pinned channels between every node and every device." },
  { icon: IconKey, title: "SSO + MFA", desc: "SAML 2.0 and OIDC with enforced MFA for clinical and billing roles." },
  { icon: IconEye, title: "Granular RBAC", desc: "12 role templates, downscopable per site, per chart, per field." },
  { icon: IconShield, title: "Immutable audit log", desc: "Hash-chained, WORM storage. Export for auditors in one click." },
  { icon: IconBolt, title: "24/7 security SOC", desc: "15-minute mean response, with a named incident commander per account." },
  { icon: IconGlobe, title: "Data residency", desc: "US and EU regions; you choose where PHI lives, and it stays there." },
  { icon: IconSeal, title: "BAA on day one", desc: "Business associate agreement signed before any real data touches the platform." },
];

export const stats = [
  { value: 99.98, decimals: 2, suffix: "%", label: "uptime over trailing 90 days" },
  { value: 2.4, decimals: 1, suffix: "M", label: "records synced every month" },
  { value: 340, decimals: 0, suffix: "+", label: "multi-site clinics on Meridian" },
  { value: 0, decimals: 0, suffix: "", label: "reportable breaches since 2019" },
];

export const testimonials = [
  {
    quote: "We replaced four tools and a paper wall of sticky notes. The first audit after going live took our compliance team a week instead of a month.",
    name: "Dr. Amara Chen",
    role: "Medical Director",
    org: "Lakewood Health Partners",
    metric: "Audit prep −78%",
    initials: "AC",
    tone: "bg-teal-500",
    rotate: "lg:-rotate-2",
  },
  {
    quote: "Records from our EHR, labs and two imaging centers now land in one place before the provider sees the patient. That's the part that stuck with our teams.",
    name: "Marcus Webb",
    role: "COO",
    org: "Brightline Clinics",
    metric: "11 min saved per consult",
    initials: "MW",
    tone: "bg-sea-600",
    rotate: "lg:rotate-1 lg:translate-y-4",
  },
  {
    quote: "Meridian's supplier team sat with ours through HITRUST evidence collection. Nobody else we met treated compliance as a feature, not an afterthought.",
    name: "Priya Nair",
    role: "Practice Administrator",
    org: "Cedar Grove Medical",
    metric: "NPS 94 from staff",
    initials: "PN",
    tone: "bg-pine-800",
    rotate: "lg:-rotate-1 lg:translate-y-8",
  },
];

export const faqs = [
  {
    q: "Do you sign a BAA before any data is shared?",
    a: "Yes. A Business Associate Agreement is executed before the first record is ingested, including sandbox environments. We also complete your security questionnaire and provide SOC 2 Type II and ISO 27001 reports under NDA.",
  },
  {
    q: "How does migration from our current EHR work?",
    a: "We run a field-level mapping workshop, then a dual-run period where Meridian shadows your existing system. Most 2–10 site clinics go live in 6–8 weeks; larger health systems typically plan one quarter. Historical PHI is migrated in encrypted, verified batches with a reconciliation report you sign off on.",
  },
  {
    q: "What uptime SLA do you guarantee?",
    a: "99.9% monthly uptime with service credits, 99.98% trailing 90-day actuals, and a 15-minute incident response target. Status history and incident postmortems are published to customer accounts within 48 hours.",
  },
  {
    q: "Where is our data stored?",
    a: "You choose the region — US (multi-AZ) or EU (Frankfurt). PHI never leaves the selected region, backups follow the same boundary, and cross-region failover only occurs with a signed customer opt-in.",
  },
  {
    q: "Who owns the data, and can we leave?",
    a: "You do, unconditionally. Export your full corpus — clinical, billing, roster and audit lineage — in FHIR and CSV formats at any time, with a 30-day assisted offboarding window at no charge.",
  },
  {
    q: "How is pricing structured?",
    a: "Per site, per month, tiered by volume and module set. Every new evaluation starts with a free ROI model based on your current claims data — no seat minimums, no setup fees, annual or monthly terms.",
  },
];

export const footerCols = [
  { heading: "Platform", links: ["Scheduling & triage", "Billing & payers", "Workforce & rostering", "Telehealth & portal", "Analytics & audit"] },
  { heading: "Trust", links: ["Compliance pack", "Security overview", "System status", "Privacy notice", "Subprocessors"] },
  { heading: "Company", links: ["About Meridian", "Careers", "Press", "Supplier contact", "Partner program"] },
  { heading: "Resources", links: ["Integration docs", "Migration guide", "ROI model", "Help center", "API reference"] },
];
