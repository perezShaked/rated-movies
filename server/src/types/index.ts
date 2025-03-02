import { z } from 'zod';
import {
  genresSchema,
  movieDetailsSchema,
  topRatedMoviesPageSchema,
  MovieSchema,
} from '../validation';

export type MovieDetailsType = z.infer<typeof movieDetailsSchema>;

export type MoviesPageType = z.infer<typeof topRatedMoviesPageSchema>;

export type MovieType = z.infer<typeof MovieSchema>;

export type MoviesGenresType = z.infer<typeof genresSchema>;
