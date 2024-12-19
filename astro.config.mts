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
import starlightSidebarTopics from "starlight-sidebar-topics";
import starlightImageZoom from "starlight-image-zoom";

import mdx from "@astrojs/mdx";

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
      plugins: [
        starlightImageZoom(),
        catppuccin({ dark: "macchiato-blue", light: "latte-blue" }),
        starlightSidebarTopics([
          {
            label: "Fandom",
            link: "/fandom/",
            id: "fandom",
            icon: "heart",
            items: [
              {
                label: "General",
                items: [
                  {
                    label: "AO3",
                    autogenerate: { directory: "/fandom/general/ao3" },
                  },
                ],
              },
              {
                label: "Dragon Age",
                autogenerate: { directory: "/fandom/dragonage/" },
              },
            ],
          },
          {
            label: "Tech",
            link: "/tech/",
            id: "tech",
            icon: "laptop",
            items: [
              {
                label: "Tutorials",
                autogenerate: { directory: "/tech/tutorials/" },
              },
              {
                label: "Open Source",
                autogenerate: { directory: "/tech/opensource/" },
              },
              {
                label: "Obsidian",
                autogenerate: { directory: "/tech/obsidian/" },
              },
            ],
          },
        ]),
      ],
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
    mdx(),
  ],
});