import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store.ts';

type FavouriteMoviesState = number[];
const initialState: FavouriteMoviesState = [];

const favouriteMoviesSlice = createSlice({
  name: 'favouriteMovies',
  initialState,
  reducers: {
    toggleFavouriteMovie(state, action: PayloadAction<number>) {
      const isFavouriteMovieIncluded = state.includes(action.payload);

      if (isFavouriteMovieIncluded) {
        return state.filter((id) => id !== action.payload);
      } else {
        return [action.payload, ...state];
      }
    },
  },
});

export const selectFavouriteMovies = (state: RootState) =>
  state.favouriteMovies;
export const { toggleFavouriteMovie } = favouriteMoviesSlice.actions;
export default favouriteMoviesSlice.reducer;
