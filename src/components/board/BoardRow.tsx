import { WORD_LENGTH } from '../Wordle';
import { useCallback } from 'react';
import Tile from './Tile';

interface BoardRowProps {
  guess: string | undefined | null;
  word: string;
  ariaLabel: string;
}

const BoardRow = ({ guess, ariaLabel }: BoardRowProps) => {
  const createEmptySquares = useCallback(
    () =>
      [...Array(WORD_LENGTH)].map((_, index) => (
        <Tile key={index} role="tile" aria-label={`Letter ${index + 1}, empty`} />
      )),
    [],
  );

  return (
    <div aria-label={ariaLabel} role="group">
      {guess
        ? guess?.split('').map((letter, index) => (
            <Tile letter={letter} key={index} role="tile" aria-label={`Letter ${index + 1}`}>
              {letter}
            </Tile>
          ))
        : createEmptySquares()}
    </div>
  );
};

export default BoardRow;
