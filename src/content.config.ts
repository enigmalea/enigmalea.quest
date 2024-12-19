import { defineCollection, z } from "astro:content";

import { glob } from "astro/loaders";

const ships = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/ships" }),
  schema: ({ image }) =>
    z.object({
      fandom: z.string(),
      ship: z.string(),
      image: image(),
    }),
});

export const collections = {
  ships,
};
