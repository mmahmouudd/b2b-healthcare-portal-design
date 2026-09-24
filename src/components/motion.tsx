import { useCallback, useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { cn } from "../utils/cn";

export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

export function useInView<T extends HTMLElement>(threshold = 0.18, rootMargin = "0px 0px -8% 0px") {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold, rootMargin }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold, rootMargin]);
  return { ref, inView };
}

/* Scroll-reveal wrapper */
export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "figure" | "article";
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const style: CSSProperties = delay ? { transitionDelay: `${delay}ms` } : {};
  return (
    <Tag ref={ref as never} style={style} className={cn("reveal", inView && "in-view", className)}>
      {children}
    </Tag>
  );
}

/* Scramble-decode text (monospace friendly) */
const CHARSET = "ABCDEFGHKLMNPRSTUVWXYZ0123456789·/—#";

export function DecodeText({ text, className }: { text: string; className?: string }) {
  const reduced = usePrefersReducedMotion();
  const { ref, inView } = useInView<HTMLSpanElement>(0.4);
  const [display, setDisplay] = useState<string | null>(null);

  useEffect(() => {
    if (!inView || reduced) return;
    let frame = 0;
    const id = window.setInterval(() => {
      frame += 1;
      const solved = Math.floor(frame / 2.2);
      if (solved >= text.length) {
        setDisplay(text);
        window.clearInterval(id);
        return;
      }
      setDisplay(
        text
          .split("")
          .map((c, i) => {
            if (c === " ") return " ";
            if (i < solved) return c;
            return CHARSET[Math.floor(Math.random() * CHARSET.length)];
          })
          .join("")
      );
    }, 30);
    return () => window.clearInterval(id);
  }, [inView, reduced, text]);

  const shown = display ?? (reduced ? text : "");
  return (
    <span ref={ref} className={className} aria-label={text}>
      <span aria-hidden="true">{shown || "\u00A0"}</span>
    </span>
  );
}

/* Count-up number */
export function CountUp({
  to,
  decimals = 0,
  suffix = "",
  duration = 1800,
  className,
}: {
  to: number;
  decimals?: number;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const reduced = usePrefersReducedMotion();
  const { ref, inView } = useInView<HTMLSpanElement>(0.5);
  const [val, setVal] = useState(0);
  const started = useRef(false);

  const fmt = useCallback(
    (v: number) =>
      v.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals }) + suffix,
    [decimals, suffix]
  );

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    if (reduced) {
      setVal(to);
      return;
    }
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(to * eased);
      if (p < 1) requestAnimationFrame(tick);
      else setVal(to);
    };
    requestAnimationFrame(tick);
  }, [inView, reduced, to, duration]);

  return (
    <span ref={ref} className={className}>
      {fmt(val)}
    </span>
  );
}
