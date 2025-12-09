const { fontFamily } = require("tailwindcss/defaultTheme");

/** Shared Tailwind preset for Cynalitx branding */
module.exports = {
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "oklch(0.577 0.245 27.325)",
          primaryAlt: "oklch(0.637 0.237 25.331)",
          neon: "oklch(0.971 0.013 17.38)",
          charcoal: "oklch(0.21 0.006 285.885)",
          accent: "oklch(0.808 0.114 19.571)",
          muted: "oklch(0.552 0.016 285.938)"
        }
      },
      fontFamily: {
        sans: ["Inter", "Roboto", ...fontFamily.sans],
        display: ["'Space Grotesk'", "'Eurostile'", ...fontFamily.sans]
      },
      backgroundImage: {
        "grid-mesh": "radial-gradient(circle at 20% 20%, rgba(107,255,179,0.2), transparent 25%), radial-gradient(circle at 80% 0%, rgba(20,241,149,0.25), transparent 30%), linear-gradient(135deg, rgba(11,31,58,0.9), rgba(15,23,41,0.95))"
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(20,241,149,0.35), 0 20px 60px rgba(11,31,58,0.45)",
        card: "0 10px 40px rgba(0,0,0,0.25)"
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
};
