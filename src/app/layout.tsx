import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ScrollProgress } from "@/components/ScrollProgress";
import { pack } from "@/content/pack";

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const metaTitle = `Could you be our next ${pack.role.title}?`;
const metaDescription = `We're hiring a ${pack.role.title} at First, the AI hiring platform. Everything you need to know about the role, the team, and the process.`;

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
  openGraph: {
    title: metaTitle,
    description: metaDescription,
    type: "website",
    siteName: pack.brand.name,
  },
  twitter: {
    card: "summary_large_image",
    title: metaTitle,
    description: metaDescription,
  },
};

const revealScript = `
(function(){
  if (typeof window === 'undefined') return;
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function check(){
    var nodes = document.querySelectorAll('.reveal:not(.is-in)');
    if (!nodes.length) return;
    var vh = window.innerHeight || document.documentElement.clientHeight;
    var trigger = vh * 0.92;
    for (var i = 0; i < nodes.length; i++) {
      var rect = nodes[i].getBoundingClientRect();
      if (rect.top < trigger && rect.bottom > 0) {
        nodes[i].classList.add('is-in');
      }
    }
  }
  function showAll(){
    var nodes = document.querySelectorAll('.reveal');
    nodes.forEach(function(n){ n.classList.add('is-in'); });
  }
  function init(){
    if (reduce) { showAll(); return; }
    // Headless / zero-viewport environments: bail and show everything.
    if (!window.innerHeight) { showAll(); return; }
    check();
    var ticking = false;
    function onScroll(){
      if (!ticking) {
        window.requestAnimationFrame(function(){
          check();
          ticking = false;
        });
        ticking = true;
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${body.variable} ${display.variable}`}>
      <body className="font-sans bg-ink-900 text-white antialiased">
        <ScrollProgress />
        {children}
        <script dangerouslySetInnerHTML={{ __html: revealScript }} />
      </body>
    </html>
  );
}
