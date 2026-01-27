import { defineCollection, z } from 'astro:content';

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
