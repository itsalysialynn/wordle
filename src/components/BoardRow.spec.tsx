import React from 'react';
import { render, screen } from '@testing-library/react';
import BoardRow from './BoardRow';
import { WORD_LENGTH } from './Wordle';

describe('BoardRow', () => {
  it('renders a letter for each WORD_LENGTH when there is no guess', async () => {
    render(<BoardRow ariaLabel="board-row" guess={undefined} word="minks" />);
    const letters = await screen.findAllByLabelText(/Letter/i);
    expect(letters).toHaveLength(WORD_LENGTH);
  });

  it('renders a tile for each letter when there is a guess', async () => {
    render(<BoardRow ariaLabel="board-row" guess="apple" word="minks" />);
    const letters = await screen.findAllByLabelText(/Letter/i);
    expect(letters[0].textContent).toEqual('a');
    expect(letters[1].textContent).toEqual('p');
    expect(letters[2].textContent).toEqual('p');
    expect(letters[3].textContent).toEqual('l');
    expect(letters[4].textContent).toEqual('e');
  });
});
