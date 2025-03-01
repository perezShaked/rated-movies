import { useState, useEffect } from 'react';
import { MoviesGenresType } from '../../../../server/src/types';
import { getMoviesGenresAPI } from '../../services';

export const useGetMoviesGenres = () => {
  const [movieGenres, setMovieGenres] = useState<MoviesGenresType>();
  const [movieGenresError, setMovieGenresError] = useState(null);

  useEffect(() => {
    getMoviesGenresAPI()
      .then((data) => setMovieGenres(data))
      .catch((err) => setMovieGenresError(err));
  }, []);

  return { movieGenres, movieGenresError };
};
