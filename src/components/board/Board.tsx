import { MAX_NUMBER_OF_GUESSES } from '../../App';
import BoardRow from './BoardRow';
import styled from 'styled-components';
import { useGuesses } from '../../hooks/useGuesses';

const BoardLayout = styled.div`
  display: grid;
  grid-template-rows: repeat(6, 1fr);
  grid-gap: 5px;
  padding: 10px;
  box-sizing: border-box;
`;

interface BoardProps {
  word: string;
}

const Board = ({ word }: BoardProps) => {
  const { guesses } = useGuesses();

  return (
    <BoardLayout>
      {[...Array(MAX_NUMBER_OF_GUESSES)].map((_, index) => (
        <BoardRow key={index} ariaLabel={`Row ${index + 1}`} word={word} guess={guesses[index]} />
      ))}
    </BoardLayout>
  );
};

export default Board;
