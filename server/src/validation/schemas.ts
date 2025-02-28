import { z } from 'zod';

export const MovieSchema = z.object({
  adult: z.boolean(),
  genre_ids: z.array(z.number()),
  id: z.number(),
  original_language: z.string(),
  overview: z.string(),
  poster_path: z.string(),
  release_date: z.string(),
  title: z.string(),
  vote_average: z.number(),
  vote_count: z.number(),
});

export const topRatedMoviesPageSchema = z.object({
  page: z.number(),
  results: z.array(MovieSchema),
  total_pages: z.number(),
  total_results: z.number(),
});

export const movieDetailsSchema = z.object({
  adult: z.boolean(),
  budget: z.number(),
  genres: z.array(z.object({ id: z.number(), name: z.string() })),
  original_language: z.string(),
  overview: z.string(),
  poster_path: z.string(),
  release_date: z.string(),
  title: z.string(),
  vote_average: z.number(),
  vote_count: z.number(),
});
