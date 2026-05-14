import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          900: "#05060A",
          800: "#0A0B14",
          700: "#10121C",
          600: "#161928",
        },
        brand: {
          blue: "#60A5FA",
          purple: "#A78BFA",
          pink: "#F472B6",
          green: "#34D399",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(110deg, #60A5FA 0%, #A78BFA 45%, #F472B6 100%)",
        "grid-fade":
          "radial-gradient(circle at 50% 0%, rgba(167,139,250,0.18), rgba(5,6,10,0) 60%)",
      },
      boxShadow: {
        glow: "0 0 80px -20px rgba(167,139,250,0.45)",
      },
    },
  },
  plugins: [],
};

export default config;
