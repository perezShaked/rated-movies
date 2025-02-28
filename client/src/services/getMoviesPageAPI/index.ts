export const getMoviesPageAPI = async (pageNumber: number) => {
  const movieDetails = await fetch(`http://localhost:3000/topRatedMovies/${pageNumber}`);
  if (!movieDetails.ok) throw new Error('Failed to fetch movie details');
  return movieDetails.json();
};
