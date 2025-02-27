import { MovieCard, MovieModal } from './components';
import './App.css';

export const App = () => {
  return (
    <>
      <div>rated movies</div>
      <div className="cards">
        <MovieModal
          title="Fight Club"
          score={84}
          budget={63000000}
          genres={['Drama', 'Roman', 'Another']}
          fullDescription='A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \"fight clubs\" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.'
          posterPath="/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg"
          releaseDate={new Date('1999-10-15')}
        />
      </div>
    </>
  );
};
