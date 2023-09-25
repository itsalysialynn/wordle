import { WORD_LENGTH } from '../../App';
import { useCallback } from 'react';
import Tile from './Tile';
import styled from 'styled-components';
import { useGuesses } from '../../hooks/useGuesses';

const BoardRowLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 5px;
`;

interface BoardRowProps {
  guess: string | undefined | null;
  word: string;
  ariaLabel: string;
}

const BoardRow = ({ guess, ariaLabel }: BoardRowProps) => {
  const { validateLetter } = useGuesses();

  const createEmptySquares = useCallback(
    () =>
      [...Array(WORD_LENGTH)].map((_, index) => (
        <Tile key={index} role="tile" aria-label={`Letter ${index + 1}, empty`} />
      )),
    [],
  );

  return (
    <BoardRowLayout aria-label={ariaLabel} role="group">
      {guess
        ? guess?.split('').map((letter, index) => (
            <Tile
              validation={validateLetter(letter, index)}
              letter={letter}
              key={index}
              role="tile"
              aria-label={`Letter ${index + 1}, ${letter}`}
            >
              {letter}
            </Tile>
          ))
        : createEmptySquares()}
    </BoardRowLayout>
  );
};

export default BoardRow;
