import { pack } from "@/content/pack";
import { Section } from "./Section";
import { VideoEmbed } from "./VideoEmbed";

export function WhySection() {
  const { company, glassdoor } = pack;
  const stars = Math.round(glassdoor.overall.rating);

  return (
    <Section
      id="why"
      tone="white"
      eyebrow="About First"
      heading="The AI hiring platform recruiters actually want to use"
      subhead={company.body}
    >
      <div className="grid items-stretch gap-6 lg:grid-cols-2">
        <div className="glass-strong rounded-2xl p-8 sm:p-10">
          <dl className="grid grid-cols-2 gap-6">
            {company.metrics.map((m) => (
              <div key={m.label}>
                <dt className="font-display text-3xl font-semibold text-gradient sm:text-4xl">
                  {m.value}
                </dt>
                <dd className="mt-2 text-xs uppercase tracking-[0.16em] text-white/50">
                  {m.label}
                </dd>
              </div>
            ))}
          </dl>
          <div className="mt-6 border-t border-white/5 pt-5">
            <p className="text-xs uppercase tracking-[0.18em] text-white/40">
              Trusted by teams at
            </p>
            <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-white/70">
              {company.trustedBy.map((name) => (
                <span key={name}>{name}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-xl glass flex items-center">
          <VideoEmbed />
        </div>
      </div>

      <div className="mt-6 glass rounded-2xl p-6 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-y-3">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <div className="flex items-baseline gap-2">
              <span className="font-display text-3xl font-bold text-white">
                {glassdoor.overall.rating.toFixed(1)}
              </span>
              <span className="text-sm text-white/45">/ 5</span>
              <div className="ml-1 flex gap-0.5 text-brand-green">
                {[0, 1, 2, 3, 4].map((i) => (
                  <svg
                    key={i}
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill={i < stars ? "currentColor" : "none"}
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"
                    className={i < stars ? "" : "opacity-30"}
                  >
                    <polygon points="12 2 15.1 8.6 22 9.6 17 14.7 18.2 21.6 12 18.3 5.8 21.6 7 14.7 2 9.6 8.9 8.6 12 2" />
                  </svg>
                ))}
              </div>
            </div>
            <span className="text-xs text-white/40">
              on Glassdoor · {glassdoor.overall.reviews} reviews · {glassdoor.overall.recommend}% recommend
            </span>
          </div>
          <a
            href="https://www.glassdoor.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/70 transition hover:border-white/20 hover:bg-white/10 hover:text-white"
          >
            Go to Glassdoor &rarr;
          </a>
        </div>

        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          {glassdoor.reviews.map((review) => (
            <div key={review.headline} className="border-l-2 border-brand-green/30 pl-4">
              <p className="text-sm font-semibold text-white">
                &ldquo;{review.headline}&rdquo;
              </p>
              <p className="mt-1 text-xs text-white/45">
                {review.role} · {review.date}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-[10px] italic text-white/30">{glassdoor.disclaimer}</p>
      </div>
    </Section>
  );
}
