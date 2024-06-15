import { defineCollection, z } from "astro:content";

const posts = defineCollection({
    type: "content",
    // Type-check frontmatter using a schema
    schema: z.object({
        title: z.string(),
        description: z.string(),
        authors: z.array(z.string()),
        tags: z.array(z.string()),
        // Transform string to Date object
        pubDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
        heroImage: z.string().optional(),
    }),
});

const contributors = defineCollection({
    type: "data",
    schema: z
        .object({
            name: z.string().optional(),
            nick: z.string().optional(),
            picture: z.string().optional(),
            socials: z
                .object({
                    github: z.string().optional(),
                    linkedin: z.string().optional(),
                    twitter: z.string().optional(),
                    instagram: z.string().optional(),
                    youtube: z.string().optional(),
                })
                .optional(),
        })
        .refine((data) => data.name || data.nick, {
            message: "Must have at least a name or a nickname (name or nick)",
            path: ["name"],
        }),
});

export const collections = { posts, contributors };