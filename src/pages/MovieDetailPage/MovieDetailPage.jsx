import { useParams } from "react-router-dom";
import { movies } from "../../data";
import "./MovieDetailPage.css";

export default function MovieDetailPage() {
  let { movieName } = useParams();
  console.log(movieName);
  // Filter array to return item
  const movie = movies.filter((m) => m.title === movieName);
  console.log(movie);
  console.log();
  return (
    <div className="MovieDetailPage">
      <h1>{movie[0].title}</h1>
      <img src={movie[0].posterPath} alt="" />
      <h3>{movie[0].releaseDate}</h3>
      <p>Starring: {movie[0].cast.join(", ")}</p>
    </div>
  );
}
