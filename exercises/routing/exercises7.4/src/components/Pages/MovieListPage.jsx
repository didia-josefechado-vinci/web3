import { useOutletContext } from "react-router-dom";
import MovieListView from "components/MovieListView/MovieListView";

const MovieListPage = () => {
  const { movies } = useOutletContext();

  return (
    <div>
      <h1>Movie List</h1>
      <MovieListView movies={movies} />
    </div>
  );
};

export default MovieListPage;