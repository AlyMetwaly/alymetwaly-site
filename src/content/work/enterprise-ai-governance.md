import { defineCollection, z } from "astro:content";

const work = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.coerce.date().optional(),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).optional(),
  }),
});

const insights = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.coerce.date().optional(),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { work, insights };
