import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// "Notes" = the research/blog notebook. Add a .md or .mdx file to src/content/notes/ and it shows up.
const notes = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/notes' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { notes };
