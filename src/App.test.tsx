import { screen } from '@testing-library/react';
import App from './App.tsx';
import { renderWithProviders } from './test/test-utils.tsx';
import { BrowserRouter } from 'react-router';
import { userEvent } from '@testing-library/user-event';

describe('App', () => {
  it('Should navigate between pages', async () => {
    renderWithProviders(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    expect(screen.getByTestId('search-input')).toBeInTheDocument();

    // verify page content for expected route after navigating
    await userEvent.click(screen.getByText(/Favourites/i));
    expect(screen.getByTestId('no-favourites-title')).toBeInTheDocument();
  });
});
