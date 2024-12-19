import { defineCollection, z } from "astro:content";

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

const docs = defineCollection({
  loader: docsLoader(),
  schema: docsSchema(),
});

export const collections = {
  ships,
  docs,
};
