import { MoviesGenresType } from '../../types';
import { moviesGenresApiUrl } from '../../config';

export const fetchMoviesGenres = async (): Promise<MoviesGenresType> => {
  const apiUrl = moviesGenresApiUrl;
  const apiKey = process.env.API_KEY;

  const url = `${apiUrl}?api_key=${apiKey}`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTRkMTkwZmUzNWVlMzM5NjM5NmNiZjQ0Y2YxZGUwNCIsIm5iZiI6MTc0MDQ4NjA2MC40MjU5OTk5LCJzdWIiOiI2N2JkYjVhYzExNDM0Y2FiNGI1OWEzMjQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.gfRv_ZHQPdTpZ8VmgWNEDf18347tK1VEjf0P_FSe-sM',
    },
  };

  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error('Failed fetching movies genres');
  }
  return response.json();
};
