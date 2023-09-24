import { WORD_LENGTH } from './Wordle';
import { useCallback } from 'react';

interface BoardRowProps {
  guess: string | undefined | null;
  word: string;
  ariaLabel: string;
}

const BoardRow = ({ guess, ariaLabel }: BoardRowProps) => {
  const createEmptySquares = useCallback(
    () =>
      [...Array(WORD_LENGTH)].map((_, index) => (
        <div key={index} role="tile" aria-label={`Letter ${index + 1}, empty`}></div>
      )),
    [],
  );

  return (
    <div aria-label={ariaLabel} role="group">
      {guess
        ? guess?.split('').map((letter, index) => (
            <div key={index} role="tile" aria-label={`Letter ${index + 1}`}>
              {letter}
            </div>
          ))
        : createEmptySquares()}
    </div>
  );
};

export default BoardRow;
