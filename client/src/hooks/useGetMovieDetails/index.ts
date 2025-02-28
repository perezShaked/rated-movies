import { useState, useEffect } from 'react';
import { MovieDetailsType } from '../../../../server/src/types';
import { getMovieDetailsAPI } from '../../services';

export function useGetMovieDetails(movieId: number) {
  const [movieDetails, setMovieDetails] = useState<MovieDetailsType>();
  const [movieDetailsError, setMovieDetailsError] = useState(null);

  useEffect(() => {
    getMovieDetailsAPI(movieId)
      .then((data) => setMovieDetails(data))
      .catch((err) => setMovieDetailsError(err));
  }, []);

  return { movieDetails, movieDetailsError };
}
