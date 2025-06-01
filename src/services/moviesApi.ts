import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { MovieDetails, MoviesSearchResult } from './types.ts';
import { config } from '../config.ts';

const token = config.apiToken;

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
      query: ({ query, page }) => {
        const queryParams = new URLSearchParams({
          query,
          page: page.toString(),
        });
        return `search/movie?${queryParams.toString()}`;
      },
    }),
    getMovieDetails: builder.query<MovieDetails, string>({
      query: (id) => `movie/${id}`,
    }),
  }),
});

export const { useSearchMoviesQuery, useGetMovieDetailsQuery } = moviesApi;
