import { useState, useEffect } from 'react';
import { MoviesPageType } from '../../../../server/src/types';
import { getMoviesPageAPI } from '../../services';

export function useGetMoviesPage(pageNumber: number) {
  const [moviesPage, setMoviesPage] = useState<MoviesPageType>();
  const [moviesPageError, setMoviesPageError] = useState(null);

  useEffect(() => {
    getMoviesPageAPI(pageNumber)
      .then((data) => setMoviesPage(data))
      .catch((err) => setMoviesPageError(err));
  }, [pageNumber]);

  return { moviesPage, moviesPageError };
}
