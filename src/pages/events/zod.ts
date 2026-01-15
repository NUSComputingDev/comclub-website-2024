import { z } from "zod";

// Define schema for an Article
const ArticleSchema = z.object({
  department: z.union([z.literal("IR"), z.literal("SD/SL")]),
  title: z.string(),
  body: z.string(),
  link: z.string(),
  imgSrc: z.string(),
  startDatetime: z.iso.datetime({ offset: true }),
  endDatetime: z.iso.datetime({ offset: true }),
});

export const ArticleMapSchema = z.record(z.string(), ArticleSchema);

// Function to parse articles using the defined schema
export const parseArticles = (data: unknown): Record<string, Article> => {
  return ArticleMapSchema.parse(data);
};

// Export the Article type inferred from the schema
export type Article = z.infer<typeof ArticleSchema>;