import { Router } from 'express';
import { moviesRouter } from './topRatedMovies';
import { movieDetailsRouter } from './movieDetails';

export const apiRouter = Router();

apiRouter.use('/topRatedMovies', moviesRouter);
apiRouter.use('/movieDetails', movieDetailsRouter);
