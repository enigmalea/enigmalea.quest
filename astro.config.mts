import catppuccin from "starlight-theme-catppuccin";
// @ts-check
import { defineConfig } from "astro/config";
import expressiveCode from "astro-expressive-code";
import { pluginLineNumbers } from "@expressive-code/plugin-line-numbers";
import icon from "astro-icon";
import metaTags from "astro-meta-tags";
import robotsTxt from "astro-robots-txt";
import sitemap from "@astrojs/sitemap";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://enigmalea.quest",
  base: "/",
  trailingSlash: "never",
  integrations: [
    tailwind(),
    sitemap(),
    expressiveCode({ plugins: [pluginLineNumbers()] }),
    icon(),
    robotsTxt({
      policy: [
        {
          userAgent: "*",
          disallow: ["/search", "/_astro/"],
          crawlDelay: 5,
        },
        {
          userAgent: "Googlebot",
          allow: "/",
          disallow: ["/_astro/"],
          crawlDelay: 5,
        },
        {
          userAgent: "CCBot",
          disallow: "/",
        },
        {
          userAgent: "GPTBot",
          disallow: "/",
        },
        {
          userAgent: "ChatGPT-User",
          disallow: "/",
        },
        {
          userAgent: "Slurp",
          crawlDelay: 30,
        },
      ],
    }),
    metaTags(),
    starlight({
      title: "enigmalea",
      logo: {
        light: "./src/assets/img/light-home.svg",
        dark: "./src/assets/img/dark-home.svg",
        replacesTitle: true,
      },
      customCss: ["./src/assets/css/starlight.css"],
      plugins: [catppuccin({ dark: "macchiato-blue", light: "latte-blue" })],
      expressiveCode: {
        themes: ["catppuccin-macchiato", "catppuccin-latte"],
        plugins: [pluginLineNumbers()],
      },
      social: {
        blueSky: "https://bsky.app/profile/enigmalea.quest",
        mastodon: "https://easymode.im/@enigmalea",
        github: "https://github.com/enigmalea",
      },
    }),
  ],
});
