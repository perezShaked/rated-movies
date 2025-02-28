import { useState, useRef, useEffect } from 'react';
import { useGetMoviesPage, useOutsideClick } from '../../../hooks';
import { Pagination } from '../../elements';
import { MovieCard } from './MovieCard';
import { MovieModal } from './MovieModal';
import './CardsContainer.css';

export const CardsContainer = () => {
  const [modalMovieId, setModalMovieId] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const movieModalRef = useRef<HTMLDivElement>(null);
  const moviesPage = useGetMoviesPage(pageNumber).moviesPage;

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
      {moviesPage?.results.map((movie) => {
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
