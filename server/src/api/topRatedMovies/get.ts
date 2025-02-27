import { StatusCodes } from 'http-status-codes';
import { fetchTopRatedMovies } from '../../dal';
import { Request, Response } from 'express';

const isPageNumberValid = (pageNumber: string): boolean => {
  const minPageNumber = 1;
  const maxPageNumber = 500;
  const page = Number(pageNumber);

  const isValidNumber = !isNaN(page);
  const pageNumberInRange = page >= minPageNumber && page <= maxPageNumber;

  return isValidNumber && pageNumberInRange;
};

export const getTopRatedMovies = async ({ params }: Request, res: Response) => {
  if (!isPageNumberValid(params.pageNumber))
    res.status(StatusCodes.BAD_REQUEST).json({ error: 'not valid page number' });
  else {
    try {
      const topRatedMovies = await fetchTopRatedMovies(Number(params.pageNumber));
      res.status(StatusCodes.OK).json(topRatedMovies);
    } catch (error) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
    }
  }
};
