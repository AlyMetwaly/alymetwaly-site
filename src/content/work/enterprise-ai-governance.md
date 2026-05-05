
---
title: ""
draft: true
---

import { defineCollection, z } from "astro:content";

const baseSchema = {
  title: z.string().optional(),
  description: z.string().optional(),
  pubDate: z.coerce.date().optional(),
  draft: z.boolean().default(false),
  tags: z.array(z.string()).optional(),
};

const work = defineCollection({
  type: "content",
  schema: z
    .object(baseSchema)
    .refine(
      (data) => data.draft || Boolean(data.title),
      {
        message: "Published work entries must have a title",
        path: ["title"],
      }
    ),
});

const insights = defineCollection({
  type: "content",
  schema: z
    .object(baseSchema)
    .refine(
      (data) => data.draft || Boolean(data.title),
      {
        message: "Published insights must have a title",
        path: ["title"],
      }
    ),
});

export const collections = { work, insights };
``