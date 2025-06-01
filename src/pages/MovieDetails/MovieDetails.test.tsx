import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../test/test-utils.tsx';
import * as Router from 'react-router';
import MovieDetails from './index.tsx';

jest.mock('react-router', () => ({
  ...jest.requireActual('react-router'),
  useParams: jest.fn(),
}));

describe('Movie Details', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Should show movie details for provided id', async () => {
    jest.spyOn(Router, 'useParams').mockReturnValue({ id: '123' });

    renderWithProviders(
      <Router.BrowserRouter>
        <MovieDetails />
      </Router.BrowserRouter>
    );

    const movieCard = await screen.findByTestId('movie-card-item');

    expect(movieCard).toBeInTheDocument();
    expect(screen.getByTestId('movie-card-poster-123')).toBeInTheDocument();
    expect(screen.getByTestId('movie-card-title-123')).toBeInTheDocument();
    expect(screen.getByTestId('movie-card-rating-123')).toBeInTheDocument();
    expect(screen.getByTestId('movie-card-genres-123')).toBeInTheDocument();
  });

  it('Should show error if there is error response', async () => {
    jest.spyOn(Router, 'useParams').mockReturnValue({ id: '456' });

    renderWithProviders(
      <Router.BrowserRouter>
        <MovieDetails />
      </Router.BrowserRouter>
    );

    const errorMessage = await screen.findByTestId('error-message');
    expect(errorMessage).toBeInTheDocument();
  });
});
