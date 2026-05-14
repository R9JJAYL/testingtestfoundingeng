import { pack } from "@/content/pack";
import { Section } from "./Section";

export function AiSection() {
  const { ai } = pack;
  return (
    <Section
      id="ai"
      tone="white"
      eyebrow="AI in the loop"
      heading={ai.heading}
      subhead={ai.subhead}
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <SideCard
          doTitle="Where we use AI"
          doItems={ai.ours.items}
          dontTitle="Where we don't use AI"
          dontItems={ai.oursNot.items}
        />
        <SideCard
          doTitle="Where you can use AI"
          doItems={ai.yours.items}
          dontTitle="Where we ask you not to use AI"
          dontItems={ai.yoursNot.items}
        />
      </div>
    </Section>
  );
}

function SideCard({
  doTitle,
  doItems,
  dontTitle,
  dontItems,
}: {
  doTitle: string;
  doItems: readonly { name: string; body: string }[];
  dontTitle: string;
  dontItems: readonly string[];
}) {
  return (
    <div className="glass flex flex-col rounded-2xl p-8 sm:p-10">
      <h3 className="font-display text-xl font-semibold tracking-tight text-white">
        {doTitle}
      </h3>

      <ul className="mt-6 flex-1 space-y-6">
        {doItems.map((item) => (
          <li key={item.name} className="flex gap-4">
            <span
              aria-hidden
              className="mt-1.5 inline-block h-1.5 w-1.5 flex-none rounded-full bg-brand-gradient"
            />
            <div>
              <p className="text-sm font-semibold text-white">{item.name}</p>
              <p className="mt-1 text-sm leading-relaxed text-white/55">
                {item.body}
              </p>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-8 border-t border-white/[0.08] pt-6">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/40">
          {dontTitle}
        </p>
        <ul className="mt-4 space-y-3">
          {dontItems.map((item) => (
            <li
              key={item}
              className="text-sm leading-relaxed text-white/55"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
