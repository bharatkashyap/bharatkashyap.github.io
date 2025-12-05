import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: 'page',
      source: 'blog/**/*.md',  // Corrected path - relative to content/ directory
      schema: z.object({
        date: z.string(),
        title: z.string(),
        description: z.string(),
        tags: z.array(z.string()).optional(),
        keywords: z.array(z.string()).optional(),
        comments: z.array(z.object({
          id: z.string(),
          author: z.string(),
          date: z.string(),
          content: z.string(),
          replies: z.array(z.object({
            id: z.string(),
            reply_to: z.string(),
            author: z.string(),
            date: z.string(),
            content: z.string()
          })).optional()
        })).optional()
      })
    })
  }
})
