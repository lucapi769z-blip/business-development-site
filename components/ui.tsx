import Link from "next/link";
import type { ReactNode } from "react";

export function Label({ children, mono = false, className = "" }: { children: ReactNode; mono?: boolean; className?: string }) {
  return <p className={`label${mono ? " label--mono" : ""} ${className}`.trim()}>{children}</p>;
}

export function Arrow() {
  return (
    <svg className="arrow" width="18" height="10" viewBox="0 0 18 10" aria-hidden="true">
      <path d="M0 5h16.5M12.5 1l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.1" />
    </svg>
  );
}

export function ArrowLink({ href, children, variant = "", className = "" }: { href: string; children: ReactNode; variant?: "" | "caps" | "small"; className?: string }) {
  return (
    <Link href={href} className={`arrow-link${variant ? ` arrow-link--${variant}` : ""} ${className}`.trim()}>
      <span>{children}</span>
      <Arrow />
    </Link>
  );
}

export function ButtonLink({ href, children, outline = false, className = "" }: { href: string; children: ReactNode; outline?: boolean; className?: string }) {
  return (
    <Link href={href} className={`button${outline ? " button--outline" : ""} ${className}`.trim()}>
      <span>{children}</span>
      <Arrow />
    </Link>
  );
}

export function Lines({ lines }: { lines: string[] }) {
  return (
    <>
      {lines.map((line, i) => (
        <span key={i} className="line">
          {line}
          {i < lines.length - 1 ? " " : ""}
        </span>
      ))}
    </>
  );
}

/** Fan of straight lines converging on one point, as in the Direction rows. */
export function Rays({ converge, className = "" }: { converge: "left" | "right"; className?: string }) {
  const count = 9;
  const tip = converge === "right" ? 240 : 0;
  const base = converge === "right" ? 0 : 240;
  return (
    <svg className={`rays ${className}`} viewBox="0 0 240 48" preserveAspectRatio="none" aria-hidden="true">
      {Array.from({ length: count }, (_, i) => {
        const y = 2 + (44 / (count - 1)) * i;
        return <line key={i} x1={base} y1={y} x2={tip} y2={24} vectorEffect="non-scaling-stroke" />;
      })}
    </svg>
  );
}

/** Fine curves fanning up from one point, used in the Let's Talk band and the footer. */
export function Fan({ className = "" }: { className?: string }) {
  const count = 10;
  return (
    <svg className={`fan ${className}`} viewBox="0 0 400 520" preserveAspectRatio="none" aria-hidden="true">
      {Array.from({ length: count }, (_, i) => {
        const t = i / (count - 1);
        const endY = 0 + t * 380;
        const c1x = 40 + t * 90;
        const c1y = 400 - t * 120;
        const c2x = 150 + t * 120;
        const c2y = 120 + t * 230;
        return <path key={i} d={`M0 520 C ${c1x} ${c1y}, ${c2x} ${c2y}, 400 ${endY}`} vectorEffect="non-scaling-stroke" />;
      })}
    </svg>
  );
}

/** Vertical bars of varying height, beside the Publishing & Rights image. */
export function Bars() {
  const heights = [96, 112, 64, 100, 116, 84, 104, 60, 92, 82, 98, 116, 90, 76, 114];
  return (
    <svg className="bars" viewBox="0 0 186 116" aria-hidden="true">
      {heights.map((h, i) => (
        <line key={i} x1={3 + i * 12.5} y1={116} x2={3 + i * 12.5} y2={116 - h} />
      ))}
    </svg>
  );
}

export function PublishingIcon({ name }: { name: string }) {
  return (
    <span className="icon-ring" aria-hidden="true">
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="1.2">
        {name === "book" && (
          <>
            <path d="M13 7.5c-2.2-1.6-5-2-8-1.6v12.2c3-.4 5.8 0 8 1.6 2.2-1.6 5-2 8-1.6V5.9c-3-.4-5.8 0-8 1.6z" />
            <path d="M13 7.5v12.2M7 9.4c1.6-.1 3 .2 4 .8M7 12.4c1.6-.1 3 .2 4 .8M15 10.2c1-.6 2.4-.9 4-.8M15 13.2c1-.6 2.4-.9 4-.8" />
          </>
        )}
        {name === "person" && (
          <>
            <circle cx="13" cy="9.5" r="3.6" />
            <path d="M5.5 20.5c.8-3.6 3.8-5.6 7.5-5.6s6.7 2 7.5 5.6" />
          </>
        )}
        {name === "document" && (
          <>
            <path d="M8 4.5h7.2L19 8.3v13.2H8z" />
            <path d="M15 4.5v4h4M10.5 12h6M10.5 15h6M10.5 18h4" />
          </>
        )}
      </svg>
    </span>
  );
}
