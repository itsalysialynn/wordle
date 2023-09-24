import { WORD_LENGTH } from '../Wordle';
import { useCallback } from 'react';
import Tile from './Tile';
import styled from 'styled-components';

const BoardRowLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(${WORD_LENGTH}, 1fr);
  grid-gap: 5px;
`;

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
    <BoardRowLayout aria-label={ariaLabel} role="group">
      {guess
        ? guess?.split('').map((letter, index) => (
            <Tile letter={letter} key={index} role="tile" aria-label={`Letter ${index + 1}`}>
              {letter}
            </Tile>
          ))
        : createEmptySquares()}
    </BoardRowLayout>
  );
};

export default BoardRow;
