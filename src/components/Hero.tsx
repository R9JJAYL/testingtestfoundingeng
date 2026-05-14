import { pack } from "@/content/pack";

export function Hero() {
  const { hero, role, comp } = pack;

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 grid-bg" aria-hidden />
      <div className="absolute inset-x-0 top-0 h-[700px] bg-grid-fade" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-6 pb-12 pt-10 sm:pb-16 sm:pt-14">
        <div className="mb-12 flex justify-center">
        <div className="inline-flex items-center gap-6 rounded-full border border-white/10 bg-white/5 px-6 py-3 backdrop-blur-md">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/first-logo.svg"
            alt="First"
            className="h-6 sm:h-7"
            height={28}
          />
          <span className="h-4 w-px bg-white/15" />
          <span className="text-xs font-medium uppercase tracking-[0.22em] text-white/50">
            {hero.eyebrow}
          </span>
        </div>
        </div>

        <div className="reveal">

          <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            {hero.line1}
            <br />
            <span className="text-gradient">{hero.line2}</span>
            <br />
            {hero.line3}
          </h1>

          <p className="mt-8 max-w-4xl text-base leading-relaxed text-white/60 sm:text-lg">
            {hero.subhead}
          </p>
        </div>

        <div className="reveal">
          <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-white/5 pt-10 sm:grid-cols-4">
            <MetaBlock label="Role" value={role.title} />
            <MetaBlock label="Location" value={role.location} />
            <MetaBlock label="Type" value={role.employmentType} />
            <MetaBlock label="Compensation" value={comp.headline} />
            <MetaBlock label="Reports to" value={role.reportsTo} />
            <MetaBlock label="Team size" value={role.equity} />
            <MetaBlock label="Start date" value={role.startDate} />
            <MetaBlock label="Holiday" value={role.holiday} />
          </dl>
        </div>

        <div className="reveal">
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {role.benefits.map((b) => (
              <div
                key={b.title}
                className="glass rounded-2xl p-5"
              >
                <p className="font-display text-base font-semibold text-gradient">
                  {b.title}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-white/60">
                  {b.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function MetaBlock({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs font-medium uppercase tracking-[0.18em] text-white/40">
        {label}
      </dt>
      <dd className="mt-2 whitespace-pre-line text-sm font-medium text-white sm:text-base">{value}</dd>
    </div>
  );
}
