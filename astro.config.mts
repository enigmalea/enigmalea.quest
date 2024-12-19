// @ts-check
import { defineConfig } from "astro/config";
import expressiveCode from "astro-expressive-code";
import icon from "astro-icon";
import metaTags from "astro-meta-tags";
import robotsTxt from "astro-robots-txt";
import sitemap from "@astrojs/sitemap";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";
import catppuccin from "starlight-theme-catppuccin";

// https://astro.build/config
export default defineConfig({
  site: "https://enigmalea.quest",
  base: "/",
  trailingSlash: "never",
  integrations: [
    tailwind(),
    sitemap(),
    expressiveCode(),
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
      title: "My delightful docs site",
      plugins: [catppuccin({ dark: "macchiato-blue", light: "latte-blue" })],
    }),
  ],
});
