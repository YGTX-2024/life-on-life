import { defineCollection, z } from 'astro:content';

// 仅保留咨询师定义
const counselors = defineCollection({
  schema: z.object({
    name: z.string(),
    title: z.string(),
    description: z.string(),
    order: z.number().optional(),
  }),
});

export const collections = {
  'counselors': counselors,
};
