import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        title: ['"Unica One"', ...defaultTheme.fontFamily.sans],
        sans: ['"Atkinson Hyperlegible"', ...defaultTheme.fontFamily.sans],
        mono: ['"Monaspace Neon"', ...defaultTheme.fontFamily.mono],
      },
      boxShadow: {
        footer: "0 -10px 12px rgba(24,25,38,0.5)",
      },
      typography: {
        DEFAULT: {
          css: {
            color: "rgb(var(--ctp-text))",
            strong: { color: "rgb(var(--ctp-green))"},
            em: { color: "rgb(var(--ctp-sky))" },
            h1: { color: "rgb(var(--ctp-red))"},
            h2: { color: "rgb(var(--ctp-peach))"},
            h3: { color: "rgb(var(--ctp-yellow))"},
            h4: { color: "rgb(var(--ctp-green))"},
            a: {
              color: "rgb(var(--ctp-blue))",
              textDecoration: "underline wavy",
              textUnderlineOffset: "0.3em",
              fontWeight: "normal",
              "&:hover": {
                color: "rgb(var(--ctp-rosewater))",
                textDecoration: "none",
              },
            },
            ul: { listStyleType: "none" },
            li: {},
            "li::before": {
              content: '"★"',
              paddingRight: "0.3rem",
              color: "rgb(var(--ctp-yellow))",
            },
            "li p": { display: "inline" },
            p: {},
            "p img": { padding: "0", margin: "0" },
          },
        },
      },
      cursor: {
        coffee: "url('/images/coffee.cur'), url('/images/coffee.png'), auto",
        coffee_select:
          "url('/images/coffee_select.cur'), url('/images/coffee_select.png'), auto",
      },
    },
  },
  plugins: [
    require("@catppuccin/tailwindcss")({
      defaultFlavour: "latte",
    }),
    require("@tailwindcss/typography"),
  ],
};
