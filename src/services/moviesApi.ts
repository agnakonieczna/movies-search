import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { MovieDetails, MoviesSearchResult } from './types.ts';

const token = import.meta.env.VITE_API_TOKEN;

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://api.themoviedb.org/3/',
  prepareHeaders: (headers) => {
    headers.set('Authorization', `Bearer ${token}`);
    return headers;
  },
});

export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    searchMovies: builder.query<
      MoviesSearchResult,
      { query: string; page: number }
    >({
      query: ({ query, page }) =>
        `search/movie?query=${encodeURIComponent(query)}&page=${page}`,
    }),
    getMovieDetails: builder.query<MovieDetails, string>({
      query: (id) => `movie/${id}`,
    }),
  }),
});

export const { useSearchMoviesQuery, useGetMovieDetailsQuery } = moviesApi;
