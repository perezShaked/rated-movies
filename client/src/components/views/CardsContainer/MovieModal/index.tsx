import { useGetMovieDetails } from '../../../../hooks';
import { roundRateScore } from '../../../../utils';
import { ScoreView } from '../../../elements';
import './movieModal.css';

type MovieModalProps = {
  movieId: number;
  ref: React.RefObject<HTMLDivElement | null>;
};

export const MovieModal = ({ movieId, ref }: MovieModalProps) => {
  const movieDetails = useGetMovieDetails(movieId).movieDetails;

  return (
    <div className="modalBackground">
      {movieDetails && (
        <div ref={ref} className="modalContainer">
          <img
            className="modalPoster"
            src={`https://image.tmdb.org/t/p/w185${movieDetails?.poster_path}`}
          ></img>
          <div className="movieDetails">
            <div className="modalTitle">{movieDetails?.title}</div>
            <div className="modalReleaseDate">{`Release Date: ${movieDetails?.release_date}`}</div>
            <div className="modalBudget">{`Budget: ${movieDetails?.budget}`}</div>
            <div className="modalGenres">{`Genres: ${movieDetails?.genres.map(
              (genre) => ` ${genre.name}`
            )}`}</div>
          </div>
          <div className="modalFullDescription">{movieDetails?.overview}</div>
          <ScoreView score={(movieDetails && roundRateScore(movieDetails.vote_average)) || 0} />
        </div>
      )}
    </div>
  );
};
