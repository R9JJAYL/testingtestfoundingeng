import { ReactNode } from "react";

export type Tone = "black" | "white";

export function Section({
  id,
  eyebrow,
  heading,
  subhead,
  children,
  tone = "black",
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  heading?: string;
  subhead?: string;
  children: ReactNode;
  tone?: Tone;
  className?: string;
}) {
  const isWhite = tone === "white";

  const bg = isWhite ? "bg-white" : "bg-ink-900";
  const eyebrowColor = isWhite
    ? "text-brand-purple"
    : "text-brand-purple/80";
  const headingColor = isWhite ? "text-ink-900" : "text-white";
  const subheadColor = isWhite ? "text-ink-900/70" : "text-white/70";

  return (
    <section
      id={id}
      data-tone={tone}
      className={`relative ${bg} ${className}`}
    >
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <div className="reveal">
          {eyebrow && (
            <p
              className={`mb-3 text-xs font-medium uppercase tracking-[0.22em] ${eyebrowColor}`}
            >
              {eyebrow}
            </p>
          )}
          {heading && (
            <h2
              className={`font-display text-3xl font-semibold tracking-tight sm:text-5xl ${headingColor}`}
            >
              {heading}
            </h2>
          )}
          {subhead && (
            <p
              className={`mt-4 max-w-4xl text-base leading-relaxed sm:text-lg ${subheadColor}`}
            >
              {subhead}
            </p>
          )}
        </div>
        <div className={`reveal ${heading || subhead ? "mt-12" : ""}`}>
          {children}
        </div>
      </div>
    </section>
  );
}
