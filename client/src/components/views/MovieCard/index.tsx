import { ScoreView } from '../../elements';
import './movieCard.css';

type MovieCardProps = {
  title: string;
  score: number;
  posterPath: string;
  description: string;
};

export const MovieCard = ({ title, score, posterPath, description }: MovieCardProps) => {
  return (
    <div className="movieCardContainer">
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
