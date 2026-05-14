import { ImageResponse } from "next/og";
import { pack } from "@/content/pack";

export const runtime = "edge";
export const alt = `Could you be our next ${pack.role.title}? - ${pack.brand.name}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(167,139,250,0.18), #05060A 60%)",
          fontFamily: "sans-serif",
          color: "#FFFFFF",
        }}
      >
        {/* Top row: brand pill */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            padding: "14px 28px",
            border: "1px solid rgba(255,255,255,0.12)",
            background: "rgba(255,255,255,0.05)",
            borderRadius: "999px",
            alignSelf: "flex-start",
          }}
        >
          <div
            style={{
              fontSize: "28px",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "#FFFFFF",
            }}
          >
            first
          </div>
          <div
            style={{
              width: "1px",
              height: "20px",
              background: "rgba(255,255,255,0.15)",
            }}
          />
          <div
            style={{
              fontSize: "14px",
              fontWeight: 500,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.5)",
            }}
          >
            {pack.hero.eyebrow}
          </div>
        </div>

        {/* Headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          <div
            style={{
              fontSize: "56px",
              fontWeight: 600,
              letterSpacing: "-0.025em",
              lineHeight: 1.05,
              color: "#FFFFFF",
            }}
          >
            {pack.hero.line1}
          </div>
          <div
            style={{
              fontSize: "96px",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1,
              backgroundImage:
                "linear-gradient(110deg, #60A5FA 0%, #A78BFA 45%, #F472B6 100%)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            {pack.hero.line2}
          </div>
          <div
            style={{
              fontSize: "56px",
              fontWeight: 600,
              letterSpacing: "-0.025em",
              lineHeight: 1.05,
              color: "#FFFFFF",
            }}
          >
            {pack.hero.line3}
          </div>
        </div>

        {/* Bottom row: subhead + URL */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: "40px",
          }}
        >
          <div
            style={{
              fontSize: "20px",
              lineHeight: 1.4,
              color: "rgba(255,255,255,0.6)",
              maxWidth: "780px",
              display: "flex",
            }}
          >
            Everything you need to know to make an educated decision about
            whether you think we could be the right move for you.
          </div>
          <div
            style={{
              fontSize: "16px",
              fontWeight: 500,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.45)",
              display: "flex",
            }}
          >
            first.cx
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
