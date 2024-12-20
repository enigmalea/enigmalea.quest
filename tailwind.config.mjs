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
            color: "#cad3f5",
            strong: { color: "#a6da95" },
            em: { color: "#91d7e3" },
            h1: { color: "#ed8796" },
            h2: { color: "#f5a97f" },
            h3: { color: "#eed49f" },
            h4: { color: "#a6da95" },
            a: {
              color: "#8aadf4",
              textDecoration: "underline wavy",
              textUnderlineOffset: "0.3em",
              fontWeight: "normal",
              "&:hover": {
                color: "#f4dbd6",
                textDecoration: "none",
              },
            },
          },
        },
      },
      cursor: {
        coffee: "url(coffee.cur), url(coffee.png), auto",
        cselect: "url(coffee_select.cur), url(coffee_select.png), auto",
      },
    },
  },
  plugins: [
    require("@catppuccin/tailwindcss")({
      defaultFlavour: "macchiato",
    }),
    require("@tailwindcss/typography"),
  ],
};
