import { Router } from 'express';
import { getMoviesGenres } from './get';

export const movieGenresRouter = Router();

movieGenresRouter.get('/', getMoviesGenres);
