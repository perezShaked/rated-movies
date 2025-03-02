import { ScoreView } from '../../../elements';
import './movieCard.css';

type MovieCardProps = {
  title: string;
  score: number;
  posterPath: string | null;
  description: string;
  onClick: () => void;
};

export const MovieCard = ({ title, score, posterPath, description, onClick }: MovieCardProps) => {
  return (
    <div className="movieCardContainer" onClick={onClick}>
      <ScoreView score={score} />
      <img className="moviePoster" src={`https://image.tmdb.org/t/p/w185${posterPath}`}></img>
      <div className="cardText">
        <div className="movieTitle">{title}</div>
        <div className="movieDescription">{`${description.slice(0, 90)}${
          description.length > 90 ? '...' : ''
        }`}</div>
      </div>
    </div>
  );
};
