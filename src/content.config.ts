import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/* ============================================
   PROJECT COLLECTIONS
   This file defines the SHAPE of project data.
   When you create a new project .md file,
   Astro checks it against this schema.
   ============================================ */

// Schema shared by all project types
const projectSchema = z.object({
  title: z.string(),
  client: z.string().optional(),
  year: z.union([z.string(), z.number()]).optional(),
  role: z.string().optional(),
  tags: z.array(z.string()).default([]),

  // Media
  thumbnail: z.string(), // path to image, e.g. "/images/projects/npr/thumb.jpg"
  hoverVideo: z.string().optional(), // short looping .mp4 shown on tile hover
  vimeoId: z.string().optional(), // main video — just the numeric ID from Vimeo
  poster: z.string().optional(), // hero image at top of project page (if no video)

  // Sorting & visibility
  order: z.number().default(100), // lower numbers appear first
  featured: z.boolean().default(false),
  draft: z.boolean().default(false), // set to true to hide a project

  // Content
  description: z.string().optional(), // short tagline shown on tile/header
  objective: z.string().optional(), // project objective paragraph

  // Credits — array of role/name pairs
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
