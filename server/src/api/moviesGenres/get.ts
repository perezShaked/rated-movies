import { StatusCodes } from 'http-status-codes';
import { Request, Response } from 'express';
import { fetchMoviesGenres } from '../../dal';

export const getMoviesGenres = async (_req: Request, res: Response) => {
  try {
    const genresDetails = await fetchMoviesGenres();
    res.status(StatusCodes.OK).json(genresDetails);
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
  }
};
