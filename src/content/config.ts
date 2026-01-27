import { defineCollection, z } from 'astro:content';

// 咨询师数据结构定义
const counselors = defineCollection({
  schema: z.object({
    name: z.string(),
    title: z.string(),
    description: z.string(),
    order: z.number().optional(),
  }),
});

// 原有的 staff 定义（参考你截图中的目录，通常会有这一项）
const staff = defineCollection({
  schema: z.object({
    name: z.string(),
    title: z.string(),
    img: z.string(),
  }),
});

// 导出所有集合
export const collections = {
  'counselors': counselors,
  'staff': staff,
  // 如果你还有 blog 或 events，请确保也写在这里
};
