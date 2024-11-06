import CinemaPage from "components/Pages/CinemaPage";
import HomePage from "components/Pages/HomePage";
import MovieListPage from "components/Pages/MovieListPage";
import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";

import { Outlet, useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <nav>
      <button onClick={() => navigate("/")}>Home</button>
      <button onClick={() => navigate("/movieList")}>Movie s List</button>
      <button onClick={() => navigate("/cinema")}> Cinema</button>
    </nav>
  );
};

const App = () => (
  <div>
    <NavBar />
    <Header urlLogo="https://media.istockphoto.com/id/1429764305/fr/vectoriel/bande-de-film-vierge-isol%C3%A9e-sur-le-fond-blanc.jpg?s=1024x1024&w=is&k=20&c=is5Y6cun0NC8PxJd51p4YnUoLUpyb758Bdigh4Bqn48="></Header>
    <Outlet />
    <Footer urlLogo="https://media.istockphoto.com/id/1202770152/fr/photo/bobine-de-film-disolement-sur-le-fond-jaune-lumineux-dans-les-couleurs-pastel.jpg?s=1024x1024&w=is&k=20&c=2yKBrC8oyimPdW-5IxFWN_zxFPVK3KWYL9OE2gVmVX4=">
        <p>© 2021 UGC Cinémas</p> </Footer>
    
  </div>
);

export default App;
export { NavBar, HomePage, MovieListPage, CinemaPage, Footer, Header };
