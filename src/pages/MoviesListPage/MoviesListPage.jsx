
import { movies } from "../../data";
import MovieCard from "../../components/MovieCard/MovieCard";

export default function MoviesListPage() {
  const movieCard = movies.map((m) => <MovieCard movie={m} />);
  return (
    <div>
      <h1>Movies</h1>
      {movieCard}
    </div>
  );
}
