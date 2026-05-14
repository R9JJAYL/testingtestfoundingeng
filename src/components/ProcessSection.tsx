import { pack } from "@/content/pack";
import { Section } from "./Section";

export function ProcessSection() {
  const { process, scorecard } = pack;
  return (
    <Section
      id="process"
      tone="black"
      eyebrow="The interview"
      heading={process.heading}
      subhead={process.subhead}
    >
      <div className="space-y-4">
        {process.stages.map((stage) => (
          <details key={stage.step} className="glass group rounded-2xl">
            <summary className="flex cursor-pointer list-none flex-col items-center gap-2 px-6 py-4 text-center sm:px-8 sm:py-5">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-gradient text-sm font-bold text-ink-900">
                {stage.step}
              </span>
              <h3 className="font-display text-lg font-semibold text-white">
                {stage.title}
              </h3>
              <p className="text-xs uppercase tracking-[0.16em] text-white/40">
                {stage.duration} · {stage.format}
              </p>
              <p className="text-sm leading-relaxed text-white/55 group-open:hidden">
                {stage.teaser}
              </p>
              <span className="mt-1 flex items-center gap-2 text-xs font-medium text-brand-purple transition group-open:hidden">
                <span>Show details</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </span>
              <span className="mt-1 hidden items-center gap-2 text-xs font-medium text-brand-purple/60 transition group-open:flex">
                <span>Hide details</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 15l6-6 6 6" />
                </svg>
              </span>
            </summary>

            <div className="border-t border-white/5 px-6 pb-8 pt-6 text-left sm:px-8">
              <p className="text-xs uppercase tracking-[0.16em] text-white/40">
                With {stage.with}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                {stage.what}
              </p>

              <div className="mt-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/50">
                  What we&apos;re assessing
                </p>
                <ul className="mt-3 space-y-2">
                  {stage.assessing.map((a) => (
                    <li
                      key={a}
                      className="flex gap-3 text-sm leading-relaxed text-white/70"
                    >
                      <span className="mt-[0.55rem] inline-block h-1.5 w-1.5 flex-none rounded-full bg-brand-gradient" />
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 flex flex-col gap-3 rounded-xl border border-brand-purple/20 bg-brand-purple/5 p-4 sm:flex-row">
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-purple">
                  Prep
                </span>
                <p className="text-sm leading-relaxed text-white/70">
                  {stage.prep}
                </p>
              </div>

              <p className="mt-4 text-xs leading-relaxed text-white/45">
                <span className="font-semibold uppercase tracking-[0.14em] text-white/60">
                  Decision:{" "}
                </span>
                {stage.decision}
              </p>
            </div>
          </details>
        ))}
      </div>

      <div className="mt-10 glass-strong rounded-2xl p-6 sm:p-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-purple/80">
          What we score on
        </p>
        <p className="mt-2 text-sm leading-relaxed text-white/60">
          Every interviewer scores you on the same competencies, on a 1–5 rubric. No vibes. You can request your scorecard at any point.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-4">
          {scorecard.competencies.map((c) => (
            <div key={c.name}>
              <p className="font-display text-base font-semibold text-gradient">
                {c.name}
              </p>
              <p className="mt-1 text-xs leading-relaxed text-white/55">
                {c.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
