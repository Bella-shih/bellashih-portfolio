import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/* ============================================
   PROJECT COLLECTIONS
   This file defines the SHAPE of project data.
   When you create a new project .md file,
   Astro checks it against this schema.
   ============================================ */

// Tile sizes for the mosaic grid:
//   small   — 1 col × 1 row (compact)
//   medium  — 1 col × 2 rows (default)
//   tall    — 1 col × 3 rows
//   wide    — 2 cols × 2 rows
//   feature — 2 cols × 3 rows (the big hero)
const tileSize = z.enum(['small', 'medium', 'tall', 'wide', 'feature']).default('medium');

// Schema shared by all project types
const projectSchema = z.object({
  title: z.string(),
  client: z.string().optional(),
  year: z.union([z.string(), z.number()]).optional(),
  role: z.string().optional(),
  tags: z.array(z.string()).default([]),

  // Media
  thumbnail: z.string(),
  hoverVideo: z.string().optional(),
  vimeoId: z.string().optional(),
  poster: z.string().optional(),

  // Sorting & visibility
  size: tileSize,
  order: z.number().default(100),
  featured: z.boolean().default(false),
  draft: z.boolean().default(false),

  // Content
  description: z.string().optional(),
  objective: z.string().optional(),

  // Credits
  credits: z.array(z.object({
    role: z.string(),
    name: z.string(),
  })).default([]),
});

const work = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/work' }),
  schema: projectSchema,
});

const personal = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/personal' }),
  schema: projectSchema,
});

const playground = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/playground' }),
  schema: projectSchema.extend({
    medium: z.enum(['Illustration', 'Rive', 'Type', '3D', 'Sketch', 'Other']).default('Other'),
  }),
});

export const collections = { work, personal, playground };
