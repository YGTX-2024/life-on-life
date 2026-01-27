import { defineCollection, z } from 'astro:content';

const counselors = defineCollection({
  schema: z.object({
    // 使用 .optional() 确保即使文件写错了，构建也不会崩溃
    name: z.string().optional(),
    title: z.string().optional(),
    description: z.string().optional(),
    order: z.number().optional(),
  }),
});

export const collections = {
  'counselors': counselors,
};
