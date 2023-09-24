import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Wordle from './Wordle';

describe('Wordle', () => {
  let fetchMock: any = undefined;

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('renders the five-letter word that is fetched', async () => {
    fetchMock = jest.spyOn(global, 'fetch').mockImplementation(() =>
      Promise.resolve({
        ok: true,
        status: 200,
        json: async () => ['micks'],
      } as Response),
    );
    render(<Wordle />);
    await waitFor(() => expect(screen.getByText(/micks/i)).toBeDefined());
  });

  it('renders the loading text when isLoading is true', () => {
    render(<Wordle />);
    expect(screen.getByText(/Loading/i)).toBeDefined();
  });

  it('renders the error text when hasError is true', async () => {
    fetchMock = jest.spyOn(global, 'fetch').mockImplementation(() =>
      Promise.reject({
        ok: false,
      } as Response),
    );
    render(<Wordle />);
    await waitFor(() => expect(screen.getByText(/Something went wrong./i)).toBeDefined());
  });
});
