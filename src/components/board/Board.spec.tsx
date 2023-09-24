import React from 'react';
import { render, screen } from '@testing-library/react';
import Board from './Board';
import { MAX_NUMBER_OF_GUESSES } from '../Wordle';

describe('Board', () => {
  it('renders a BoardRow for each MAX_NUMBER_OF_GUESSES', async () => {
    render(<Board guesses={[]} word="minks" />);
    const row = await screen.findAllByLabelText(/Row/i);
    expect(row).toHaveLength(MAX_NUMBER_OF_GUESSES);
  });
});
