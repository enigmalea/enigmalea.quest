import { defineCollection, z } from "astro:content";

import { SocialLinks } from "@fujocoded/zod-transform-socials";
import { docsLoader } from "@astrojs/starlight/loaders";
import { docsSchema } from "@astrojs/starlight/schema";
import { glob } from "astro/loaders";

const ships = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/ships/" }),
  schema: ({ image }) =>
    z.object({
      fandom: z.string(),
      ship: z.string(),
      image: image(),
      credits: z.string().optional(),
    }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects/" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      status: z.enum(["complete", "wip", "ongoing", "released"]),
      links: SocialLinks,
      categories: z.array(z.string()).optional(),
      tags: z.array(z.string()).optional(),
      image: image().optional(),
    }),
});

const docs = defineCollection({
  loader: docsLoader(),
  schema: docsSchema(),
});

export const collections = {
  ships,
  docs,
  projects,
};
