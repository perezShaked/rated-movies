import { useState, useRef } from 'react';
import { useGetMoviesPage, useOutsideClick } from '../../../hooks';
import { Pagination } from '../../elements';
import { MovieCard } from './MovieCard';
import { MovieModal } from './MovieModal';
import './CardsContainer.css';

export const CardsContainer = () => {
  const [modalMovieId, setModalMovieId] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const movieModalRef = useRef<HTMLDivElement>(null);

  const moviesPage = useGetMoviesPage(pageNumber).moviesPage?.results;
  console.log(moviesPage);

  useOutsideClick(movieModalRef, () => setModalMovieId(null));

  const onMovieCardClick = (movieId: number) => {
    setModalMovieId(movieId);
  };
  return (
    <div className="cards">
      {modalMovieId && <MovieModal ref={movieModalRef} movieId={modalMovieId} />}
      {moviesPage?.map((movie) => {
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
      <Pagination pageNumber={444} />
    </div>
  );
};
