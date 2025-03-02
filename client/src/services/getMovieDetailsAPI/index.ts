export const getMovieDetailsAPI = async (movieID: number) => {
  const movieDetails = await fetch(`http://localhost:3000/movieDetails/${movieID}`);
  if (!movieDetails.ok) throw new Error('Failed to fetch movie details');
  return movieDetails.json();
};
