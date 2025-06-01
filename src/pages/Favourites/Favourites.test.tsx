import { screen } from '@testing-library/react';
import Favourites from '../Favourites';
import { renderWithProviders } from '../../test/test-utils.tsx';
import { userEvent } from '@testing-library/user-event';

describe('Favourites', () => {
  it('Should show empty view for no favourites added', async () => {
    renderWithProviders(<Favourites />);

    expect(screen.getByTestId('no-favourites-title')).toBeInTheDocument();
    expect(screen.queryByTestId('favourites-title')).not.toBeInTheDocument();
  });

  it('Should show favourites movie on list for added movie', async () => {
    renderWithProviders(<Favourites />, {
      preloadedState: { favouriteMovies: [123] },
    });

    expect(screen.getByTestId('favourites-title')).toBeInTheDocument();
    const movieCard = await screen.findByTestId('movie-card-item');

    expect(movieCard).toBeInTheDocument();
    expect(screen.getByTestId('movie-card-poster-123')).toBeInTheDocument();
    expect(screen.getByTestId('movie-card-title-123')).toBeInTheDocument();
    expect(screen.getByTestId('movie-card-rating-123')).toBeInTheDocument();
    expect(screen.getByTestId('movie-card-genres-123')).toBeInTheDocument();
  });

  it('Should show error if error response', async () => {
    renderWithProviders(<Favourites />, {
      preloadedState: { favouriteMovies: [456] },
    });

    const errorMessage = await screen.findByTestId('error-message');
    expect(errorMessage).toBeInTheDocument();
  });

  it('Should remove movie from favourites after clicking the button', async () => {
    renderWithProviders(<Favourites />, {
      preloadedState: { favouriteMovies: [123, 789] },
    });

    const movieCards = await screen.findAllByTestId('movie-card-item');

    expect(movieCards).toHaveLength(2);

    //user removes the card from favorites
    await userEvent.click(screen.getByTestId('favourite-movie-button-123'));

    const updatedCards = await screen.findAllByTestId('movie-card-item');
    expect(updatedCards).toHaveLength(1);

    // check the correct card was removed
    expect(screen.getByTestId('movie-card-title-789')).toBeInTheDocument();
    expect(
      screen.queryByTestId('movie-card-title-123')
    ).not.toBeInTheDocument();
  });
});
