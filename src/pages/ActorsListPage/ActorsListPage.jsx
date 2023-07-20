import { movies } from "../../data";
import ActorCard from "../../components/ActorCard/ActorCard";

export default function ActorsListPage() {
  const castSet = new Set();
  movies.forEach((movie) => {
    movie.cast.forEach((actor) => {
      castSet.add(actor);
    });
  });
  const actorList = Array.from(castSet).map((a) => <ActorCard actor={a} />);
  return (
    <div className ="container">
      {actorList}
    </div>
  );
}
