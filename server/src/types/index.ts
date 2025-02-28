import { z } from 'zod';
import { movieDetailsSchema, topRatedMoviesPageSchema } from '../validation';

export type MovieDetailsType = z.infer<typeof movieDetailsSchema>;

export type MoviesPageType = z.infer<typeof topRatedMoviesPageSchema>;
