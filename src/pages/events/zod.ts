import { z } from "zod";

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

export const parseArticles = (data: unknown) => {
  return ArticleMapSchema.parse(data);
};

export type Article = z.infer<typeof ArticleSchema>;