import { Router } from 'express';
import { getMovieDetails } from './get';

export const movieDetailsRouter = Router();

movieDetailsRouter.get('/:movieID', getMovieDetails);
