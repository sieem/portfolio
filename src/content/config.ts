import { defineCollection, z } from 'astro:content';

const project = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		date: z.coerce.date(),
		image: z.string(),
		description: z.string(),
	}),
});

export const collections = { project };
