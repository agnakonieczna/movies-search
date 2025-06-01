import { rest } from 'msw';
import { MovieDetails } from '../../services/types.ts';

const movieDetailsResponse: Record<string, MovieDetails> = {
  '123': {
    adult: false,
    backdrop_path: null,
    belongs_to_collection: null,
    budget: 0,
    genres: [
      {
        id: 18,
        name: 'Drama',
      },
    ],
    homepage: '',
    id: 123,
    imdb_id: 'tt1145933',
    original_language: 'es',
    original_title: 'Test',
    overview:
      'Four women are waiting for the blue circle and a possible change of their lives.',
    popularity: 0.3718,
    poster_path: '/pj61H2ZHc2LRatgExI4Kp5fhXsI.jpg',
    production_companies: [],
    production_countries: [
      {
        iso_3166_1: 'ES',
        name: 'Spain',
      },
    ],
    release_date: '2007-11-30',
    revenue: 0,
    runtime: 12,
    spoken_languages: [],
    status: 'Released',
    tagline: '',
    title: 'Test',
    video: false,
    vote_average: 8.1,
    vote_count: 49,
  },
  '789': {
    adult: false,
    backdrop_path: null,
    belongs_to_collection: null,
    budget: 0,
    genres: [
      {
        id: 18,
        name: 'Drama',
      },
    ],
    homepage: '',
    id: 789,
    imdb_id: 'tt1145933',
    original_language: 'es',
    original_title: 'Test',
    overview:
      'Four women are waiting for the blue circle and a possible change of their lives.',
    popularity: 0.3718,
    poster_path: '/pj61H2ZHc2LRatgExI4Kp5fhXsI.jpg',
    production_companies: [],
    production_countries: [
      {
        iso_3166_1: 'ES',
        name: 'Spain',
      },
    ],
    release_date: '2007-11-30',
    revenue: 0,
    runtime: 12,
    spoken_languages: [],
    status: 'Released',
    tagline: '',
    title: 'Test',
    video: false,
    vote_average: 8.1,
    vote_count: 49,
  },
};

export const handlers = [
  rest.get('https://api.themoviedb.org/3/search/movie', (req, res, ctx) => {
    const url = new URL(req.url);
    const query = url.searchParams.get('query');
    const page = url.searchParams.get('page');

    if (query === 'error') {
      return res(ctx.status(401));
    }

    if (query === 'empty') {
      return res(
        ctx.status(200),
        ctx.json({
          page: 0,
          results: [],
          total_pages: 0,
          total_results: 0,
        })
      );
    }

    if (query === 'big') {
      return res(
        ctx.status(200),
        ctx.json({
          page: Number(page) || 1,
          results: [
            {
              adult: false,
              backdrop_path: null,
              genre_ids: [27, 10770],
              id: 123,
              original_language: 'en',
              original_title: 'HELP',
              overview:
                'A man in need of help eventually receives it, whether he asks for it or not.',
              popularity: 0.3802,
              poster_path: null,
              release_date: '2025-02-28',
              title: 'HELP',
              video: false,
              vote_average: 0.0,
              vote_count: 0,
            },
          ],
          total_pages: 5,
          total_results: 30,
        })
      );
    }

    return res(
      ctx.status(200),
      ctx.json({
        page: Number(page) || 1,
        results: [
          {
            adult: false,
            backdrop_path: null,
            genre_ids: [27, 10770],
            id: 123,
            original_language: 'en',
            original_title: 'HELP',
            overview:
              'A man in need of help eventually receives it, whether he asks for it or not.',
            popularity: 0.3802,
            poster_path: null,
            release_date: '2025-02-28',
            title: 'HELP',
            video: false,
            vote_average: 0.0,
            vote_count: 0,
          },
          {
            adult: false,
            backdrop_path: null,
            genre_ids: [27, 10770],
            id: 456,
            original_language: 'en',
            original_title: 'HELP',
            overview:
              'A man in need of help eventually receives it, whether he asks for it or not.',
            popularity: 0.3802,
            poster_path: null,
            release_date: '2025-02-28',
            title: 'HELP',
            video: false,
            vote_average: 0.0,
            vote_count: 0,
          },
        ],
        total_pages: 1,
        total_results: 2,
      })
    );
  }),
  rest.get('https://api.themoviedb.org/3/movie/:id', (req, res, ctx) => {
    const id = req.params.id as string;

    if (id === '456') {
      return res(ctx.status(401));
    }

    return res(ctx.status(200), ctx.json(movieDetailsResponse[id]));
  }),
];
