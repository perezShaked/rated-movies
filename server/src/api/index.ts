import { Router } from 'express';
import { moviesRouter } from './topRatedMovies';
import { movieDetailsRouter } from './movieDetails';
import { movieGenresRouter } from './moviesGenres';

export const apiRouter = Router();

apiRouter.use('/topRatedMovies', moviesRouter);
apiRouter.use('/movieDetails', movieDetailsRouter);
apiRouter.use('/moviesGenres', movieGenresRouter);
