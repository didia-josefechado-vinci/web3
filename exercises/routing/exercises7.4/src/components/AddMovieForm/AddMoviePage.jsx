import { useNavigate, useOutletContext } from "react-router-dom";
import AddMovieForm from "components/AddMovieForm/AddMovieForm";

const AddMoviePage = () => {
  const { addMovie } = useOutletContext();
  const navigate = useNavigate();

  const handleMovieAdded = (newMovie) => {
    addMovie(newMovie);
    navigate("/movieList");
  };

  return (
    <div>
      <h1>Add a New Movie</h1>
      <AddMovieForm onMovieAdded={handleMovieAdded} />
    </div>
  );
};

export default AddMoviePage;