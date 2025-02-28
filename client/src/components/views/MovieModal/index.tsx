import { ScoreView } from '../../elements';
import './movieModal.css';

type MovieModalProps = {
  title: string;
  releaseDate: Date;
  fullDescription: string;
  budget: number;
  genres: string[];
  score: number;
  posterPath: string;
};

export const MovieModal = ({
  title,
  releaseDate,
  fullDescription,
  budget,
  genres,
  score,
  posterPath,
}: MovieModalProps) => {
  return (
    <div className="modalContainer">
      <img className="modalPoster" src={`https://image.tmdb.org/t/p/w185${posterPath}`}></img>
      <div className="movieDetails">
        <div className="modalTitle">{title}</div>
        <div className="modalReleaseDate">{`Release Date: ${releaseDate.toLocaleDateString(
          'he-IL'
        )}`}</div>
        <div className="modalBudget">{`Budget: ${budget}`}</div>
        <div className="modalGenres">{`Genres: ${genres}`}</div>
      </div>
      <div className="modalFullDescription">{fullDescription}</div>
      <ScoreView score={score} />
    </div>
  );
};
