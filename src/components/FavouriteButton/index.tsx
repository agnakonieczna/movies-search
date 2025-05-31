import { useDispatch, useSelector } from "react-redux";
import { Button } from "../common";
import {
  selectFavouriteMovies,
  toggleFavouriteMovie,
} from "../../store/slices/favouriteMoviesSlice.ts";
import type { MovieDetails } from "../../services/types.ts";

const FavouritesButton = ({ movieDetails }: { movieDetails: MovieDetails }) => {
  const dispatch = useDispatch();
  const favouritesMovies = useSelector(selectFavouriteMovies);
  const isFavouriteMovieAdded = favouritesMovies.find(
    (movie) => movie.id === movieDetails.id,
  );
  const handleAddToFavourites = (movieDetails: MovieDetails) => {
    dispatch(toggleFavouriteMovie(movieDetails));
  };

  return (
    <Button onClick={() => handleAddToFavourites(movieDetails)}>
      {isFavouriteMovieAdded ? "Remove from favourites" : "Add to favourites"}
    </Button>
  );
};

export default FavouritesButton;
