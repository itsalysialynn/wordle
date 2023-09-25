import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import Wordle from './Wordle';
import { KeyboardProvider } from '../hooks/useKeyboard';
import Keyboard from './keyboard/Keyboard';
import { GuessesProvider } from '../hooks/useGuesses';

describe('Wordle', () => {
  let fetchMock: any = undefined;

  beforeEach(() => {
    fetchMock = jest.spyOn(global, 'fetch').mockImplementation(() =>
      Promise.resolve({
        ok: true,
        status: 200,
        json: async () => ['light'],
      } as Response),
    );
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('renders the board when the word is successfully fetched', async () => {
    render(<Wordle />);
    await waitFor(() => expect(screen.findByRole(/group/i)).toBeDefined());
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

  it('renders all green tiles when I solve the puzzle', async () => {
    render(
      <GuessesProvider word="light">
        <KeyboardProvider>
          <Wordle />
        </KeyboardProvider>
      </GuessesProvider>,
    );

    await guessWord('light');

    await expect(screen.getByLabelText(/Letter 1, l/i)).toHaveStyleRule(
      'background-color',
      '#6aaa64',
    );
    await expect(screen.getByLabelText(/Letter 2, i/i)).toHaveStyleRule(
      'background-color',
      '#6aaa64',
    );
    await expect(screen.getByLabelText(/Letter 3, g/i)).toHaveStyleRule(
      'background-color',
      '#6aaa64',
    );
    await expect(screen.getByLabelText(/Letter 4, h/i)).toHaveStyleRule(
      'background-color',
      '#6aaa64',
    );
    await expect(screen.getByLabelText(/Letter 5, t/i)).toHaveStyleRule(
      'background-color',
      '#6aaa64',
    );
  });

  it('renders yellow tiles when the letters are present but in the wrong location', async () => {
    render(
      <GuessesProvider word="light">
        <KeyboardProvider>
          <Wordle />
        </KeyboardProvider>
      </GuessesProvider>,
    );

    await guessWord('thgil');

    await expect(screen.getByLabelText(/Letter 5, l/i)).toHaveStyleRule(
      'background-color',
      '#c9b458',
    );
    await expect(screen.getByLabelText(/Letter 4, i/i)).toHaveStyleRule(
      'background-color',
      '#c9b458',
    );
    await expect(screen.getByLabelText(/Letter 3, g/i)).toHaveStyleRule(
      'background-color',
      '#6aaa64',
    );
    await expect(screen.getByLabelText(/Letter 2, h/i)).toHaveStyleRule(
      'background-color',
      '#c9b458',
    );
    await expect(screen.getByLabelText(/Letter 1, t/i)).toHaveStyleRule(
      'background-color',
      '#c9b458',
    );
  });

  it('renders grey tiles when the letters are not present', async () => {
    render(
      <GuessesProvider word="light">
        <KeyboardProvider>
          <Wordle />
        </KeyboardProvider>
      </GuessesProvider>,
    );

    await guessWord('dusts');

    await expect(screen.getByLabelText(/Letter 5, s/i)).toHaveStyleRule(
      'background-color',
      '#787c7e',
    );
    await expect(screen.getByLabelText(/Letter 4, t/i)).toHaveStyleRule(
      'background-color',
      '#c9b458',
    );
    await expect(screen.getByLabelText(/Letter 3, s/i)).toHaveStyleRule(
      'background-color',
      '#787c7e',
    );
    await expect(screen.getByLabelText(/Letter 2, u/i)).toHaveStyleRule(
      'background-color',
      '#787c7e',
    );
    await expect(screen.getByLabelText(/Letter 1, d/i)).toHaveStyleRule(
      'background-color',
      '#787c7e',
    );
  });
});

const guessWord = async (word: string) => {
  await waitFor(() => expect(screen.getByLabelText(`${word.split('')[0]} key`)).toBeDefined());
  word.split('').forEach((letter) => {
    fireEvent.click(screen.getByLabelText(`${letter} key`));
  });

  await waitFor(() => expect(screen.getByText(word)).toBeDefined());
  fireEvent.click(screen.getByLabelText(/enter key/i));
};
