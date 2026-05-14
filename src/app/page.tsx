import { Hero } from "@/components/Hero";
import { PillNav } from "@/components/PillNav";
import { WhySection } from "@/components/WhySection";
import { RoleSection } from "@/components/RoleSection";
import { TeamSection } from "@/components/TeamSection";
import { ProcessSection } from "@/components/ProcessSection";
import { AiSection } from "@/components/AiSection";
import { PrepSection } from "@/components/PrepSection";
import { NextSection } from "@/components/NextSection";

export default function Page() {
  return (
    <main className="relative">
      <Hero />
      <PillNav />
      <WhySection />
      <RoleSection />
      <TeamSection />
      <ProcessSection />
      <AiSection />
      <PrepSection />
      <NextSection />

      <a
        href="/book"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-brand-gradient px-5 py-3 text-sm font-semibold text-ink-900 shadow-glow transition hover:opacity-90"
      >
        Book your call
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14M13 5l7 7-7 7" />
        </svg>
      </a>
    </main>
  );
}
