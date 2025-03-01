import { z } from 'zod';
import { genresSchema, movieDetailsSchema, topRatedMoviesPageSchema } from '../validation';

export type MovieDetailsType = z.infer<typeof movieDetailsSchema>;

export type MoviesPageType = z.infer<typeof topRatedMoviesPageSchema>;

export type MoviesGenresType = z.infer<typeof genresSchema>;
