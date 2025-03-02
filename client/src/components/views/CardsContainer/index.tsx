import { useState, useRef, useEffect, useMemo } from 'react';
import { MovieType } from '../../../../../server/src/types';
import { useGetMoviesPage, useOutsideClick } from '../../../hooks';
import { roundRateScore } from '../../../utils';
import { Pagination } from '../../elements';
import { MovieCard } from './MovieCard';
import { MovieModal } from './MovieModal';
import './CardsContainer.css';

type CardsContainerProps = {
  searchValue: string;
  hideAdult: boolean;
  setLanguageOptions: (languageOptions: { name: string }[]) => void;
  languageSortValue?: { name: string };
  genresSortValue?: { name: string; id: number };
  releaseYearSortStart?: number;
  releaseYearSortEnd?: number;
  rateSortStart?: number;
  rateSortEnd?: number;
  voteCountSortStart?: number;
  voteCountSortEnd?: number;
};

export const CardsContainer = ({
  searchValue,
  hideAdult,
  setLanguageOptions,
  languageSortValue,
  genresSortValue,
  releaseYearSortStart,
  releaseYearSortEnd,
  rateSortStart,
  rateSortEnd,
  voteCountSortStart,
  voteCountSortEnd,
}: CardsContainerProps) => {
  const [modalMovieId, setModalMovieId] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const moviesPageData = useGetMoviesPage(pageNumber).moviesPage;
  const movieModalRef = useRef<HTMLDivElement>(null);

  const filterBySearch = (movie: MovieType) => {
    return searchValue === '' || movie.title.toLowerCase().includes(searchValue.toLowerCase());
  };

  const filterByHideAdult = (movie: MovieType) => {
    return hideAdult === false || movie.adult === false;
  };

  const filterByLanguage = (movie: MovieType) => {
    return languageSortValue === undefined || movie.original_language === languageSortValue?.name;
  };

  const filterByGenre = (movie: MovieType) => {
    return (
      genresSortValue === undefined ||
      (genresSortValue?.id && movie.genre_ids.includes(genresSortValue?.id))
    );
  };

  const filterByReleaseYear = (movie: MovieType) => {
    return (
      (releaseYearSortStart === undefined ||
        new Date(movie.release_date).getFullYear() >= releaseYearSortStart) &&
      (releaseYearSortEnd === undefined ||
        new Date(movie.release_date).getFullYear() <= releaseYearSortEnd)
    );
  };

  const filterByRateScore = (movie: MovieType) => {
    return (
      (rateSortStart === undefined || roundRateScore(movie.vote_average) >= rateSortStart) &&
      (rateSortEnd === undefined || roundRateScore(movie.vote_average) <= rateSortEnd)
    );
  };

  const filterByVoteCount = (movie: MovieType) => {
    return (
      (voteCountSortStart === undefined || movie.vote_count >= voteCountSortStart) &&
      (voteCountSortEnd === undefined || movie.vote_count <= voteCountSortEnd)
    );
  };

  // Re-filter displayed cards whenever any filter value changes
  const displayCards = useMemo(() => {
    const sortedMovies = moviesPageData?.results.filter(
      (movie) =>
        filterBySearch(movie) &&
        filterByHideAdult(movie) &&
        filterByLanguage(movie) &&
        filterByGenre(movie) &&
        filterByReleaseYear(movie) &&
        filterByRateScore(movie) &&
        filterByVoteCount(movie)
    );
    return sortedMovies;
  }, [
    searchValue,
    moviesPageData,
    hideAdult,
    languageSortValue,
    genresSortValue,
    releaseYearSortStart,
    releaseYearSortEnd,
    rateSortStart,
    rateSortEnd,
    voteCountSortStart,
    voteCountSortEnd,
  ]);

  //Update dropdown language options based on the languages in the current page movies
  useEffect(() => {
    const languageOptions = new Set(
      moviesPageData?.results.map((movie) => {
        return movie.original_language;
      })
    );
    setLanguageOptions([...languageOptions].map((lang) => ({ name: lang })));
  }, [moviesPageData]);

  //Scroll page up when page number changes
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [pageNumber]);

  //Close modal when clicking outside of it
  useOutsideClick(movieModalRef, () => setModalMovieId(null));

  const openModalOnMovieCardClick = (movieId: number) => {
    setModalMovieId(movieId);
  };

  return (
    <div className="cards">
      {modalMovieId && <MovieModal ref={movieModalRef} movieId={modalMovieId} />}
      <div className="moviesCards">
        {displayCards?.map((movie) => {
          return (
            <MovieCard
              onClick={() => openModalOnMovieCardClick(movie.id)}
              title={movie.title}
              description={movie.overview}
              posterPath={movie.poster_path}
              score={roundRateScore(movie.vote_average)}
              key={movie.id}
            />
          );
        })}
      </div>
      <Pagination
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        maxPages={moviesPageData?.total_pages || 0}
      />
    </div>
  );
};
