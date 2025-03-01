import { useState, useRef, useEffect, useMemo } from 'react';
import { useGetMoviesPage, useOutsideClick } from '../../../hooks';
import { Pagination } from '../../elements';
import { MovieCard } from './MovieCard';
import { MovieModal } from './MovieModal';
import './CardsContainer.css';

type CardsContainerProps = {
  searchValue: string;
  hideAdult: boolean;
};

export const CardsContainer = ({ searchValue, hideAdult }: CardsContainerProps) => {
  const [modalMovieId, setModalMovieId] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const moviesPage = useGetMoviesPage(pageNumber).moviesPage;
  const movieModalRef = useRef<HTMLDivElement>(null);

  const displayCards = useMemo(() => {
    if (searchValue === '' && !hideAdult) {
      return moviesPage?.results;
    }

    const sortedMovies = moviesPage?.results.filter(
      (movie) =>
        movie.title.toLowerCase().includes(searchValue.toLowerCase()) && movie.adult === false
    );

    console.log(sortedMovies?.length);
    return sortedMovies;
  }, [searchValue, pageNumber, moviesPage, hideAdult]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [pageNumber]);

  useOutsideClick(movieModalRef, () => setModalMovieId(null));

  const onMovieCardClick = (movieId: number) => {
    setModalMovieId(movieId);
  };
  return (
    <div className="cards">
      {modalMovieId && <MovieModal ref={movieModalRef} movieId={modalMovieId} />}
      {displayCards?.map((movie) => {
        return (
          <MovieCard
            onClick={() => onMovieCardClick(movie.id)}
            title={movie.title}
            description={movie.overview}
            posterPath={movie.poster_path}
            score={Math.round(movie.vote_average * 10)}
            key={movie.id}
          />
        );
      })}
      <Pagination
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        maxPages={moviesPage?.total_pages || 0}
      />
    </div>
  );
};
