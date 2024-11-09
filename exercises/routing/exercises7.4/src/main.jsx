import React from "react";
import ReactDOM from "react-dom/client";
import App, { CinemaPage, MovieListPage, HomePage } from "../src/components/App/App";
import MoviePage from "components/Pages/MoviePage";
import AddMoviePage from "components/AddMovieForm/AddMoviePage";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "cinema",
        element: <CinemaPage />,
      },
      {
        path: "movieList",
        element: <MovieListPage />,
      },
      {
        path: "addMovie",
        element: <AddMoviePage />,
      },
      {
        path: "movies/:movieId",
        element: <MoviePage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);