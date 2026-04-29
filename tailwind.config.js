/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        violet: {
          50:  "#F3F0FF", 100: "#E8E2FF", 200: "#D0C5FF",
          300: "#B3A0FF", 400: "#9178FF", 500: "#6D4AFF",
          600: "#5535DB", 700: "#3E22B3", 800: "#291488", 900: "#160A5E",
        },
        sand: {
          50: "#FDFCF9", 100: "#F8F4EC", 200: "#F0E9D8",
          300: "#E4D9C0", 400: "#CCBA96", 500: "#B09870",
        },
        ink: { DEFAULT: "#0B0A12", soft: "#1C1A2E", muted: "#3D3857" },
      },
      fontFamily: {
        display: ["'Syne'", "sans-serif"],
        body:    ["'Cabinet Grotesk'", "system-ui", "sans-serif"],
        mono:    ["'JetBrains Mono'", "monospace"],
      },
      animation: {
        "float":        "float 6s ease-in-out infinite",
        "float-slow":   "float 9s ease-in-out infinite",
        "pulse-ring":   "pulse-ring 2.5s ease-out infinite",
        "marquee":      "marquee 30s linear infinite",
        "spin-slow":    "spin 20s linear infinite",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%":     { transform: "translateY(-18px)" },
        },
        "pulse-ring": {
          "0%":   { transform: "scale(0.9)", opacity: "1" },
          "100%": { transform: "scale(1.6)", opacity: "0" },
        },
        marquee: {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      backgroundImage: {
        "mesh-violet": "radial-gradient(at 40% 20%, #6D4AFF33 0px, transparent 50%), radial-gradient(at 80% 0%, #9178FF22 0px, transparent 50%), radial-gradient(at 0% 50%, #B3A0FF22 0px, transparent 50%)",
        "mesh-warm":   "radial-gradient(at 60% 80%, #F0E9D8 0px, transparent 50%), radial-gradient(at 0% 100%, #E8E2FF 0px, transparent 50%)",
      },
    },
  },
  plugins: [],
};
