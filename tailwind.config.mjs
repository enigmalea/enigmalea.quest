import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        title: ['"Unica One"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require("@catppuccin/tailwindcss")({
      defaultFlavour: "macchiato",
    }),
  ],
};
