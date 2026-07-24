import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "480px",
      },
      colors: {
        background: "#030303",
        surface: "#0A0A0C",
        "surface-card": "#121215",
        "surface-hover": "#1A1A20",
        border: "rgba(255, 255, 255, 0.12)",
        "border-chrome": "rgba(226, 232, 240, 0.3)",
        chrome: {
          light: "#E2E8F0",
          DEFAULT: "#C0C0C0",
          dark: "#64748B",
          glow: "rgba(192, 192, 192, 0.25)",
        },
        silver: {
          100: "#F8FAFC",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
        }
      },
      borderRadius: {
        DEFAULT: "16px",
        lg: "16px",
        md: "12px",
        sm: "8px",
        xl: "24px",
        "2xl": "32px",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-space-grotesk)", "sans-serif"],
        accent: ["var(--font-sora)", "sans-serif"],
      },
      backgroundImage: {
        "chrome-gradient": "linear-gradient(135deg, #FFFFFF 0%, #CBD5E1 30%, #94A3B8 60%, #E2E8F0 100%)",
        "chrome-text": "linear-gradient(180deg, #FFFFFF 0%, #CBD5E1 45%, #64748B 85%, #E2E8F0 100%)",
        "dark-radial": "radial-gradient(circle at 50% 0%, rgba(192, 192, 192, 0.12) 0%, rgba(3, 3, 3, 0) 70%)",
        "glass-gradient": "linear-gradient(135deg, rgba(255, 255, 255, 0.07) 0%, rgba(255, 255, 255, 0.02) 100%)",
      },
      boxShadow: {
        "chrome-glow": "0 0 25px rgba(192, 192, 192, 0.2)",
        "chrome-glow-lg": "0 0 45px rgba(255, 255, 255, 0.25)",
        "glass": "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
      },
      animation: {
        "shimmer": "shimmer 3s infinite linear",
        "pulse-glow": "pulseGlow 2.5s infinite ease-in-out",
        "float": "float 4s infinite ease-in-out",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 15px rgba(192, 192, 192, 0.15)" },
          "50%": { boxShadow: "0 0 35px rgba(255, 255, 255, 0.35)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        }
      }
    },
  },
  plugins: [],
};
export default config;
