import "./MovieCard.css";
import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  function reDate(dateString) {
    const parts = dateString.split("-");
    const month = parts[1];
    const day = parts[2];
    const year = parts[0];
    return `${month}/${day}/${year}`;
  }

  return (
    <div className="MovieCard">
      <Link to={`/movies/${movie.title}`}>
        <div
          style={{
            background: `url(${movie.posterPath}) no-repeat center center`,
            WebkitBackgroundSize: "cover",
          }}
          className="item-card">
          <div className="title">
            <h1>{movie.title}</h1>
            <h4>Released: {reDate(movie.releaseDate)}</h4>
          </div>
        </div>
      </Link>
    </div>
  );
}
