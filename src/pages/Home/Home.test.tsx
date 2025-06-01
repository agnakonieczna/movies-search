import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../test/test-utils.tsx';
import Home from './index.tsx';
import { MemoryRouter } from 'react-router';

describe('Home', () => {
  it('Should show input and helper text for empty input', async () => {
    renderWithProviders(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    expect(screen.getByTestId('search-input')).toBeInTheDocument();
    expect(screen.getByTestId('helper-text')).toBeInTheDocument();
  });

  it('Should show movies after query is present', async () => {
    renderWithProviders(
      <MemoryRouter initialEntries={['?query=Test']}>
        <Home />
      </MemoryRouter>
    );

    const movieItem = await screen.findByTestId('movie-item-123');

    expect(movieItem).toBeInTheDocument();
    expect(screen.queryByTestId('helper-text')).not.toBeInTheDocument();
    expect(screen.getByTestId('movie-item-456')).toBeInTheDocument();

    // check all the movie item elements
    expect(screen.getByTestId('movie-item-poster-123')).toBeInTheDocument();
    expect(screen.getByTestId('movie-item-title-123')).toBeInTheDocument();
    expect(screen.getByTestId('movie-item-rating-123')).toBeInTheDocument();
    expect(screen.getByTestId('movie-item-poster-456')).toBeInTheDocument();
    expect(screen.getByTestId('movie-item-title-456')).toBeInTheDocument();
    expect(screen.getByTestId('movie-item-rating-456')).toBeInTheDocument();
  });

  it('Should show error if there is error response', async () => {
    renderWithProviders(
      <MemoryRouter initialEntries={['?query=error']}>
        <Home />
      </MemoryRouter>
    );

    const errorMessage = await screen.findByTestId('error-message');
    expect(errorMessage).toBeInTheDocument();
  });

  it('Should show empty view if results list is empty', async () => {
    renderWithProviders(
      <MemoryRouter initialEntries={['?query=empty']}>
        <Home />
      </MemoryRouter>
    );

    const emptyView = await screen.findByTestId('empty-view');
    expect(emptyView).toBeInTheDocument();
  });

  it('Should not show pagination for small amount of results', async () => {
    renderWithProviders(
      <MemoryRouter initialEntries={['?query=Test']}>
        <Home />
      </MemoryRouter>
    );

    const movieItem = await screen.findByTestId('movie-item-123');

    expect(movieItem).toBeInTheDocument();
    expect(screen.queryByTestId('pagination')).not.toBeInTheDocument();
  });

  it('Should show pagination for big amount of results', async () => {
    renderWithProviders(
      <MemoryRouter initialEntries={['?query=big']}>
        <Home />
      </MemoryRouter>
    );

    const movieItem = await screen.findByTestId('movie-item-123');

    expect(movieItem).toBeInTheDocument();
    expect(screen.getByTestId('pagination')).toBeInTheDocument();
  });
});
