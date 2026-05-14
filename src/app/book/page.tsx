import Link from "next/link";
import { pack } from "@/content/pack";

export const metadata = {
  title: `Nice try - ${pack.brand.name}`,
};

export default function BookPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-ink-900 px-6 py-24 text-center">
      <div className="mx-auto max-w-2xl">
        <p className="text-6xl">😅</p>

        <h1 className="mt-6 font-display text-3xl font-semibold tracking-tight text-white sm:text-5xl">
          OK so… this isn&apos;t a real role
        </h1>

        <p className="mt-6 text-base leading-relaxed text-white/60 sm:text-lg">
          This candidate pack is a demo we built to show recruiters what&apos;s
          possible when you combine AI with a bit of imagination. No actual{" "}
          {pack.role.title} was harmed in the making of this page.
        </p>

        <p className="mt-4 text-base leading-relaxed text-white/60 sm:text-lg">
          But while you&apos;re here - you should probably see how recruiters are
          actually using First to handle application volume. It&apos;s kind of
          the whole point.
        </p>

        <div className="mt-10 overflow-hidden rounded-xl border border-white/10">
          <div className="aspect-video">
            <iframe
              src="https://www.youtube.com/embed/OZSSc5gGAKQ"
              title="First product demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-full w-full"
            />
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://www.first.cx"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-ink-900 transition hover:opacity-90"
          >
            Visit first.cx
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
          <Link
            href="/"
            className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white/80 transition hover:border-white/20 hover:bg-white/10 hover:text-white"
          >
            Back to the pack
          </Link>
        </div>
      </div>
    </main>
  );
}
