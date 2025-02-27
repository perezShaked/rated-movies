import { Router } from 'express';
import { getTopRatedMovies } from './get';

export const moviesRouter = Router();

moviesRouter.get('/:pageNumber', getTopRatedMovies);
