/** @type {import('tailwindcss').Config} */
export const theme = {
  extend: {
    typography: {
      DEFAULT: {
        css: {
          color: "var(--color-ctp-text)",
          strong: { color: "var(--color-ctp-green)" },
          em: { color: "var(--color-ctp-sky)" },
          h1: { color: "var(--color-ctp-red)" },
          h2: { color: "var(--color-ctp-peach)" },
          h3: { color: "var(--color-ctp-yellow)" },
          h4: { color: "var(--color-ctp-green)" },
          a: {
            color: "var(--color-ctp-blue)",
            textDecoration: "underline wavy",
            textUnderlineOffset: "0.3em",
            fontWeight: "normal",
            "&:hover": {
              color: "var(--color-ctp-rosewater)",
              textDecoration: "none",
            },
          },
        },
      },
    },
  },
};
