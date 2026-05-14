import { pack } from "@/content/pack";
import { Section } from "./Section";

export function PrepSection() {
  const { pledge, role } = pack;
  const interpolate = (text: string) =>
    text.replace(/\{hiringManager\}/g, role.hiringManagerFirstName);
  return (
    <Section
      id="prep"
      tone="black"
      eyebrow="No surprises"
      heading={pledge.heading}
      subhead={pledge.subhead}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {pledge.wontDo.map((item) => (
          <div
            key={item.title}
            className="glass flex h-full gap-3 rounded-2xl p-6"
          >
            <span className="mt-0.5 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full border border-brand-pink/30 bg-brand-pink/10 text-brand-pink">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              >
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </span>
            <div>
              <p className="text-sm font-semibold text-white">{item.title}</p>
              <p className="mt-1 text-xs leading-relaxed text-white/55">
                {interpolate(item.body)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
