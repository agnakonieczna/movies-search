import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Movie from "./pages/MovieDetails";
import Favourites from "./pages/Favourites";
import Layout from "./components/Layout";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/:id" element={<Movie />} />
        <Route path="/favourites" element={<Favourites />} />
      </Route>
    </Routes>
  );
}

export default App;
