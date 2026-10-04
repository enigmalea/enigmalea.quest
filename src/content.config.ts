import type { LocalImageProps } from "astro:assets";
import { SocialLinks } from "@fujocoded/zod-transform-socials/zod4"
import { defineCollection } from "astro:content";
import { docsLoader } from "@astrojs/starlight/loaders";
import { docsSchema } from "@astrojs/starlight/schema";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const badges = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/badges/" }),
  schema: ({ image }:LocalImageProps) =>
    z.object({
      order: z.number(),
      image: image(),
      link: z.string().optional(),
      alt: z.string(),
    }),
});

const banners = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/banners/" }),
  schema: ({ image }:LocalImageProps) =>
    z.object({
      order: z.number(),
      image: image(),
      link: z.string().optional(),
      alt: z.string(),
    }),
});

const docs = defineCollection({
  loader: docsLoader(),
  schema: docsSchema(),
});

const posts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/posts/" }),
  schema: z.object({
    title: z.string(),
    published: z.coerce.date(),
    updated: z.coerce.date().optional(),
    draft: z.boolean().optional().default(false),
    description: z.string(),
    image: z.string().optional(),
    tags: z.array(z.string()),
    category: z.array(z.string()),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects/" }),
  schema: ({ image }: LocalImageProps) =>
    z.object({
      title: z.string(),
      description: z.string(),
      status: z.enum(["complete", "wip", "ongoing", "released"]),
      links: SocialLinks,
      categories: z.array(z.string()).default([]),
      tags: z.array(z.string()).default([]),
      image: image().optional(),
    }),
});

const ships = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/ships/" }),
  schema: ({ image }: LocalImageProps) =>
    z.object({
      fandom: z.string(),
      ship: z.string(),
      image: image(),
      credits: z.url().optional(),
    }),
});

export const collections = {
  badges,
  banners,
  docs,
  posts,
  projects,
  ships,
};
