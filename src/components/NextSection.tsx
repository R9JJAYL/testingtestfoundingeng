import { pack } from "@/content/pack";

export function NextSection() {
  const { next, brand } = pack;
  return (
    <section id="next" data-tone="white" className="relative bg-white">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <div className="relative overflow-hidden rounded-3xl bg-ink-900 p-10 sm:p-16">
          <div className="absolute inset-0 grid-bg opacity-40" aria-hidden />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 via-brand-purple/15 to-brand-pink/20" aria-hidden />
          <div className="relative">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-brand-purple/80">
              Ready when you are
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              {next.heading}
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
              {next.body}
            </p>
          </div>
        </div>
        <footer className="mt-12 flex flex-wrap items-center justify-between gap-3 text-xs text-ink-900/40">
          <span>
            © {new Date().getFullYear()} {brand.name} · {brand.domain}
          </span>
          <span>{brand.tagline}</span>
        </footer>
      </div>
    </section>
  );
}
