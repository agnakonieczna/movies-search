import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store.ts';
import type { MovieDetails } from '../../services/types.ts';

type FavouriteMoviesState = MovieDetails[];
const initialState: FavouriteMoviesState = [];

const favouriteMoviesSlice = createSlice({
  name: 'favouriteMovies',
  initialState,
  reducers: {
    toggleFavouriteMovie(state, action: PayloadAction<MovieDetails>) {
      const { id } = action.payload;
      const isFavouriteMovieIncluded = state.find(
        (favouriteMovie) => favouriteMovie.id === id
      );

      if (isFavouriteMovieIncluded) {
        return state.filter((movie) => movie.id !== id);
      } else {
        return [...state, action.payload];
      }
    },
  },
});

export const selectFavouriteMovies = (state: RootState) =>
  state.favouriteMovies;
export const { toggleFavouriteMovie } = favouriteMoviesSlice.actions;
export default favouriteMoviesSlice.reducer;
