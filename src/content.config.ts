import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/* ============================================
   PROJECT COLLECTIONS
   This file defines the SHAPE of project data.
   When you create a new project .md file,
   Astro checks it against this schema.
   ============================================ */

// Tile sizes — all landscape or square, no portrait shapes:
//   feature   — full-width 16:9 hero (only used at top of Work/Selected)
//   landscape — 1 column wide, 16:9 ratio
//   square    — 1 column wide, 1:1 ratio
const tileSize = z.enum(['feature', 'landscape', 'square']).default('landscape');

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

  // Layout & visibility
  size: tileSize,
  order: z.number().default(100),
  featured: z.boolean().default(false),
  draft: z.boolean().default(false),

  // Content
  description: z.string().optional(),
  objective: z.string().optional(),

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
