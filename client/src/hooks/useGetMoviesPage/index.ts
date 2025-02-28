import { useState, useEffect } from 'react';
import { MoviesPageType } from '../../../../server/src/types';
import { getMoviesPageAPI } from '../../services';

export function useGetMoviesPage(movieId: number) {
  const [moviesPage, setMoviesPage] = useState<MoviesPageType>();
  const [moviesPageError, setMoviesPageError] = useState(null);

  useEffect(() => {
    getMoviesPageAPI(movieId)
      .then((data) => setMoviesPage(data))
      .catch((err) => setMoviesPageError(err));
  }, []);

  return { moviesPage, moviesPageError };
}
