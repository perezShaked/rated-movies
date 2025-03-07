import { StatusCodes } from 'http-status-codes';
import { Request, Response } from 'express';
import { fetchMovieDetails } from '../../dal';

export const getMovieDetails = async ({ params }: Request, res: Response) => {
  const movieID = Number(params.movieID);
  if (isNaN(movieID)) res.status(StatusCodes.BAD_REQUEST).json({ error: 'not valid movie id' });
  else {
    try {
      const movieDetails = await fetchMovieDetails(movieID);
      res.status(StatusCodes.OK).json(movieDetails);
    } catch (error) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
    }
  }
};
