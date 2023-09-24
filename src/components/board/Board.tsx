import { MAX_NUMBER_OF_GUESSES } from '../Wordle';
import BoardRow from './BoardRow';
import styled from 'styled-components';

const BoardLayout = styled.div`
  display: grid;
  grid-template-rows: repeat(${MAX_NUMBER_OF_GUESSES}, 1fr);
  grid-gap: 5px;
  padding: 10px;
  box-sizing: border-box;
`;

interface BoardProps {
  word: string;
  guesses: string[];
}

const Board = ({ word, guesses }: BoardProps) => {
  return (
    <BoardLayout>
      {[...Array(MAX_NUMBER_OF_GUESSES)].map((_, index) => (
        <BoardRow key={index} ariaLabel={`Row ${index + 1}`} word={word} guess={guesses[index]} />
      ))}
    </BoardLayout>
  );
};

export default Board;
