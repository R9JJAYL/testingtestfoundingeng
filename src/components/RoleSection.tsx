import { pack } from "@/content/pack";
import { Section } from "./Section";

export function RoleSection() {
  const { role, responsibilities, youAre } = pack;
  return (
    <Section
      id="role"
      tone="black"
      eyebrow="The role"
      heading={role.title}
      subhead={role.snapshot}
    >
      <div className="grid gap-6 md:grid-cols-2">
        <Card heading={responsibilities.heading} items={responsibilities.items} />
        <Card heading={youAre.heading} items={youAre.items} />
      </div>
    </Section>
  );
}

function Card({
  heading,
  items,
}: {
  heading: string;
  items: readonly string[];
}) {
  return (
    <div className="glass rounded-2xl p-8">
      <h3 className="font-display text-xl font-semibold text-white">{heading}</h3>
      <ul className="mt-6 space-y-4">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-relaxed text-white/70">
            <span className="mt-[0.55rem] inline-block h-1.5 w-1.5 flex-none rounded-full bg-brand-gradient" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
