import { MovieCard } from '../components/MovieCard';
interface ContentProps {
  title: string;
  movies: MovieProps[]
}
interface MovieProps {
  imdbID: string,
  Title: string,
  Poster: string,
  Ratings: Array<{
  Value: string;
  }>,
  Runtime: string,
}

export function Content({title, movies}: ContentProps) {
  return (
    <>
      <header>
        <span className="category">Categoria:<span> {title}</span></span>
      </header>
      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard key={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
      </>
  );
}