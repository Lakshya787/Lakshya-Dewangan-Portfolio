import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ground: "var(--dp-color-ground)",
        panel: "var(--dp-color-panel)",
        ink: "var(--dp-color-ink)",
        outline: "var(--dp-color-outline)",
        accent: {
          DEFAULT: "var(--dp-color-accent)",
          secondary: "var(--dp-color-accent-secondary)",
          warm: "var(--dp-color-accent-warm)",
          fresh: "var(--dp-color-accent-fresh)",
        },
        field: {
          soft: "var(--dp-color-field-soft)",
        },
        selection: "var(--dp-color-selection)",
        "rule-muted": "var(--dp-color-rule-muted)",
      },
      fontFamily: {
        display: ["var(--dp-typography-display)", "PlayfulGeometricDisplay", "sans-serif"],
        reading: ["var(--dp-typography-reading)", "PlayfulGeometricReading", "sans-serif"],
        PlayfulGeometricDisplay: ["var(--font-host-grotesk)", "PlayfulGeometricDisplay", "sans-serif"],
        PlayfulGeometricReading: ["var(--font-instrument-sans)", "PlayfulGeometricReading", "sans-serif"],
      },
      borderRadius: {
        corner: "var(--dp-radius-corner)",
      },
      borderWidth: {
        outline: "var(--dp-border-outline-width)",
        detail: "var(--dp-border-detail-width)",
      },
      boxShadow: {
        hard: "4px 4px 0px var(--dp-color-outline)",
        "hard-sm": "2px 2px 0px var(--dp-color-outline)",
        "hard-md": "4px 4px 0px var(--dp-color-outline)",
        "hard-lg": "6px 6px 0px var(--dp-color-outline)",
        "hard-xl": "8px 8px 0px var(--dp-color-outline)",
      },
      maxWidth: {
        layout: "1152px",
      },
      transitionDuration: {
        interaction: "var(--dp-motion-interaction)",
      },
    },
  },
  plugins: [],
};

export default config;

