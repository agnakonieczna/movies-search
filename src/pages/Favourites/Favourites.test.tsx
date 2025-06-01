import { screen } from '@testing-library/react';
import Favourites from '../Favourites';
import { renderWithProviders } from '../../test-utils.tsx';

describe('Favourites', () => {
  it('Should show empty view for no favourites added', () => {
    renderWithProviders(<Favourites />);

    expect(screen.getByTestId('no-favourites-title')).toBeInTheDocument();
    expect(screen.queryByTestId('favourites-title')).not.toBeInTheDocument();
  });

  it('Should show favourites movie on list for added movie', () => {
    renderWithProviders(<Favourites />, {
      preloadedState: { favouriteMovies: [123] },
    });

    expect(screen.getByTestId('favourites-title')).toBeInTheDocument();
    expect(screen.getByTestId('movie-card-poster-123')).toBeInTheDocument();
    expect(screen.getByTestId('movie-card-subtitle-123')).toBeInTheDocument();
    expect(screen.getByTestId('movie-card-rating-123')).toBeInTheDocument();
    expect(screen.getByTestId('movie-card-genres-123')).toBeInTheDocument();
  });
});
