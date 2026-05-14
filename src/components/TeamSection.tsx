import { pack } from "@/content/pack";
import { Section } from "./Section";

export function TeamSection() {
  const { team } = pack;
  return (
    <Section id="team" tone="white" eyebrow="Who you'll meet" heading={team.heading} subhead={team.subhead}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {team.members.map((member) => (
          <div key={member.name} className="glass flex flex-col rounded-2xl p-6">
            <div className="mb-4 flex items-center gap-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={member.photo}
                alt={member.name}
                className="h-14 w-14 flex-none rounded-full object-cover"
                width={56}
                height={56}
              />
              <div className="min-w-0">
                <h3 className="font-display text-base font-semibold leading-tight text-white">
                  {member.name}
                </h3>
                <p className="mt-0.5 text-[11px] uppercase tracking-[0.14em] text-brand-purple/80">
                  {member.role}
                </p>
              </div>
            </div>
            <p className="flex-1 text-sm leading-relaxed text-white/60">
              {member.bio}
            </p>
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex h-8 w-8 items-center justify-center self-end rounded-full border border-white/10 bg-white/5 text-white/60 transition hover:border-white/20 hover:bg-white/10 hover:text-white"
                aria-label={`${member.name} on LinkedIn`}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
