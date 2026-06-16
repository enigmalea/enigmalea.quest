import { defineConfig } from "astro/config";
import expressiveCode from "astro-expressive-code";
import favicons from "astro-favicons";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";
import metaTags from "astro-meta-tags";
import { pluginLineNumbers } from "@expressive-code/plugin-line-numbers";
import { remarkReadingTime } from "./src/utils/remark-reading-time.mjs";
import robotsTxt from "astro-robots-txt";
import sitemap from "@astrojs/sitemap";
import starlight from "@astrojs/starlight";
import starlightImageZoom from "starlight-image-zoom";
import starlightSidebarTopics from "starlight-sidebar-topics";
import starlightThemeNova from "starlight-theme-nova";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://enigmalea.quest",
  base: "/",
  trailingSlash: "never",
  markdown: { remarkPlugins: [remarkReadingTime] },

  integrations: [
    sitemap(),
    expressiveCode({ plugins: [pluginLineNumbers()] }),
    icon({
      include: {
        openmoji: [
          "artist-palette",
          "bookmark",
          "card-file-box",
          "card-index-dividers",
          "cup-with-straw",
          "globe-with-meridians",
          "input-latin-letters",
          "love-letter",
          "memo",
          "rainbow-hexagon",
          "sparkling-heart",
          "spiral-notepad",
          "sports-medal",
        ],
        pixelarticons: [
          "align-left",
          "book",
          "calendar",
          "calendar-2",
          "check",
          "chevron-down",
          "chevron-left",
          "chevron-right",
          "chevron-up",
          "clock",
          "close",
          "hash",
          "heart",
          "home-sharp",
          "mail",
          "minus-box",
        ],
        simpleIcons: ["*"],
      },
    }),
    favicons(),
    robotsTxt({
      policy: [
        { userAgent: "*", disallow: ["/search", "/_astro/"], crawlDelay: 5 },
        {
          userAgent: "Googlebot",
          allow: "/",
          disallow: ["/_astro/"],
          crawlDelay: 5,
        },
        { userAgent: "CCBot", disallow: "/" },
        { userAgent: "GPTBot", disallow: "/" },
        { userAgent: "ChatGPT-User", disallow: "/" },
        { userAgent: "Slurp", crawlDelay: 30 },
      ],
    }),
    metaTags(),
    starlight({
      title: "enigmalea",
      titleDelimiter: "★",
      logo: {
        light: "./src/assets/img/light-home.svg",
        dark: "./src/assets/img/dark-home.svg",
        replacesTitle: true,
      },
      customCss: [
        "@fontsource-variable/atkinson-hyperlegible-next/wght.css",
        "@fontsource/monaspace-neon/400.css",
        "@fontsource/unica-one/400.css",
        "./src/styles/starlight.css",
      ],
      components: {
        SocialIcons: "./src/components/starlight/SocialIcons.astro",
      },
      plugins: [
        starlightThemeNova(),
        starlightImageZoom(),
        starlightSidebarTopics([
          {
            label: "Fandom",
            link: "/fandom/",
            id: "fandom",
            icon: "heart",
            items: [
              {
                label: "AO3",
                items: [{ autogenerate: { directory: "/fandom/ao3/" } }],
              },
              {
                label: "Dragon Age",
                items: [{ autogenerate: { directory: "/fandom/dragonage/" } }],
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
                items: [{ autogenerate: { directory: "/tech/tutorials/" } }],
              },
              {
                label: "Open Source",
                items: [{ autogenerate: { directory: "/tech/opensource/" } }],
              },
              {
                label: "Obsidian",
                items: [{ autogenerate: { directory: "/tech/obsidian/" } }],
              },
            ],
          },
        ]),
      ],
      expressiveCode: {
        themes: ["catppuccin-macchiato", "catppuccin-latte"],
        plugins: [pluginLineNumbers()],
      },
      social: [
        {
          icon: "blueSky",
          label: "BlueSky",
          href: "https://bsky.app/profile/enigmalea.quest",
        },
        {
          icon: "mastodon",
          label: "Mastodon",
          href: "https://easymode.im/@enigmalea",
        },
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/enigmalea",
        },
      ],
    }),
    mdx(),
  ],

  vite: { plugins: [tailwindcss()] },
});
