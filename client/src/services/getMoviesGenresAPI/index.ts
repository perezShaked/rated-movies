export const getMoviesGenresAPI = async () => {
  const movieGenres = await fetch(`http://localhost:3000/moviesGenres`);
  if (!movieGenres.ok) throw new Error('Failed to fetch movies genres');
  return movieGenres.json();
};
