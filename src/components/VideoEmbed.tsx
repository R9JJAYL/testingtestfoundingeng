"use client";

import { useState } from "react";

const THUMB = "https://img.youtube.com/vi/OZSSc5gGAKQ/maxresdefault.jpg";

export function VideoEmbed() {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <div className="aspect-video w-full">
        <iframe
          src="https://www.youtube.com/embed/OZSSc5gGAKQ?autoplay=1"
          title="First product demo"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="h-full w-full"
        />
      </div>
    );
  }

  return (
    <button
      onClick={() => setPlaying(true)}
      className="relative flex aspect-video w-full flex-col items-center justify-center gap-4 overflow-hidden text-center"
    >
      {/* Faded YouTube thumbnail background */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={THUMB}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-ink-900/50" />

      <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-brand-gradient text-ink-900 shadow-glow transition hover:scale-105">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <polygon points="6 3 20 12 6 21 6 3" />
        </svg>
      </span>
      <span className="relative max-w-[280px] text-sm font-medium leading-snug text-white/90">
        Click to see a breakdown of how recruiters use our product to manage application volume
      </span>
    </button>
  );
}
