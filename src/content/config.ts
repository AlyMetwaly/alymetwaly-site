import { defineCollection, z } from "astro:content";

const caseMetric = z.object({
  value: z.string(),
  label: z.string(),
});

const work = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    hook: z.string(),
    organization: z.string().optional(),
    pubDate: z.coerce.date().optional(),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).optional(),
    sortOrder: z.number().default(0),
    previewMetrics: z.array(caseMetric).min(1).max(4),
    impactMetrics: z.array(caseMetric).min(1),
  }),
});

const insightCategory = z.enum([
  "AI Transformation",
  "Operating Models",
  "Execution Systems",
]);

const insights = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    preview: z.string(),
    category: insightCategory,
    description: z.string().optional(),
    pubDate: z.coerce.date().optional(),
    draft: z.boolean().default(false),
    sortOrder: z.number().default(0),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { work, insights };
