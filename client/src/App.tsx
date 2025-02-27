import { MovieCard } from './components';
import './App.css';

export const App = () => {
  return (
    <>
      <div>rated movies</div>
      <div className="cards">
        <MovieCard
          title="movie title"
          description="movie description that can be a little bit long and i have to think about it"
          score={99}
          imagePath="/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg"
        />
        <MovieCard
          title="movie title"
          description="movie description that can be a little bit long and i have to think about it"
          score={24}
          imagePath="/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg"
        />
        <MovieCard
          title="movie title"
          description="movie description that can be a little bit long and i have to think about it"
          score={1}
          imagePath="/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg"
        />
        <MovieCard
          title="movie title"
          description="A group of contest winners arrive at an island hotel to live out their dreams, only to find themselves trapped in nightmare scenarios"
          score={54}
          imagePath="/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg"
        />
        <MovieCard
          title="movie title"
          description="A housemaid falls in love with Dr. Jekyll and his darkly mysterious counterpart, Mr. Hyde."
          score={77}
          imagePath="/8ZMrZGGW65ePWIgRn1260nA1uUm.jpg"
        />
        <MovieCard
          title="movie title"
          description="After a local woman is murdered, a group of teenage liars create a warning e-mail of a serial killer named “The Wolf”, coming on the next full moon. The teens describe each death method The Wolf uses, but when the described victims actually do start turning up dead, suddenly no one knows where the lies end and the truth begins."
          score={44}
          imagePath="/eAOPWQdwytdRaLK3VXi7JFJFqmj.jpg"
        />
      </div>
    </>
  );
};
