import { useParams } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import MovieCard from "components/MovieCard/MovieCard";

const MoviePage = () => {
  const { movieId } = useParams();
  const { movies } = useOutletContext();

  if (!movies) {
    return <p>Loading movies...</p>;
  }

  const movie = movies.find((m) => m.id.toString() === movieId);

  if (!movie) {
    return <p>Movie not found</p>;
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <MovieCard movie={movie} />
    </div>
  );
};

export default MoviePage;