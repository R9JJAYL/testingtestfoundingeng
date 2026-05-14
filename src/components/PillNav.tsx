"use client";

import { Fragment, useEffect, useState } from "react";

const navLinks = [
  { href: "#why", label: "About First", short: "About First", breakBefore: false },
  { href: "#role", label: "The role", short: "The role", breakBefore: false },
  { href: "#team", label: "Meet the team", short: "The team", breakBefore: false },
  { href: "#process", label: "The interview process", short: "The process", breakBefore: false },
  { href: "#ai", label: "AI in the process", short: "Our AI", breakBefore: true },
  { href: "#prep", label: "Our promise to you", short: "Our promise", breakBefore: false },
  { href: "#next", label: "What happens next", short: "Next steps", breakBefore: false },
];

export function PillNav() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const els = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!els.length) return;

    let ticking = false;
    function check() {
      // No pill highlighted until the first section is near the top
      let best = "";
      let bestDist = Infinity;
      for (let i = 0; i < els.length; i++) {
        const rect = els[i].getBoundingClientRect();
        if (rect.top <= 120) {
          const dist = Math.abs(rect.top - 80);
          if (dist < bestDist) {
            bestDist = dist;
            best = ids[i];
          }
        }
      }
      setActive(best ? "#" + best : "");
    }

    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          check();
          ticking = false;
        });
        ticking = true;
      }
    }

    check();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="sticky top-0 z-50 bg-ink-900/90 backdrop-blur-lg mb-20">
      <nav
        aria-label="Jump to section"
        className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-1.5 px-4 py-3 sm:gap-2.5 sm:px-6 sm:py-5"
      >
        {navLinks.map((link) => {
          const isActive = link.href === active;
          return (
            <Fragment key={link.href}>
              {link.breakBefore && (
                <div aria-hidden className="basis-full sm:hidden" />
              )}
              <a
                href={link.href}
                className={`flex-none rounded-full px-3 py-1.5 text-xs font-medium transition sm:px-5 sm:py-2.5 sm:text-sm ${
                  isActive
                    ? "bg-brand-gradient font-semibold text-ink-900"
                    : "border border-white/10 bg-white/5 text-white/80 hover:border-white/20 hover:bg-white/10 hover:text-white"
                }`}
              >
                <span className="sm:hidden">{link.short}</span>
                <span className="hidden sm:inline">{link.label}</span>
              </a>
            </Fragment>
          );
        })}
      </nav>
    </div>
  );
}
