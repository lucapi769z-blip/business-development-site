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

/** Vertical bars of varying height, beside the For Manufacturers image. */
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

export function ManufacturerIcon({ name }: { name: string }) {
  return (
    <span className="icon-ring" aria-hidden="true">
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="1.2">
        {name === "pulse" && <path d="M3.5 13.5h5l2-5 3.2 10 2.3-7 1.5 2h5" strokeLinejoin="round" />}
        {name === "link" && (
          <>
            <path d="M11 15l4-4" />
            <path d="M12.6 8.4l1.7-1.7a3.6 3.6 0 015.1 5.1l-1.7 1.7M13.4 17.6l-1.7 1.7a3.6 3.6 0 01-5.1-5.1l1.7-1.7" />
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
