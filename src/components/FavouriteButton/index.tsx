import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../common';
import {
  selectFavouriteMovies,
  toggleFavouriteMovie,
} from '../../store/slices/favouriteMoviesSlice.ts';

const FavouritesButton = ({ movieId }: { movieId: number }) => {
  const dispatch = useDispatch();
  const favouritesMovies = useSelector(selectFavouriteMovies);
  const isFavouriteMovieAdded = favouritesMovies.includes(movieId);

  const handleAddToFavourites = (movieId: number) => {
    dispatch(toggleFavouriteMovie(movieId));
  };

  return (
    <Button onClick={() => handleAddToFavourites(movieId)}>
      {isFavouriteMovieAdded ? 'Remove from favourites' : 'Add to favourites'}
    </Button>
  );
};

export default FavouritesButton;
