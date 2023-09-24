import { MAX_NUMBER_OF_GUESSES } from './Wordle';
import BoardRow from './BoardRow';

interface BoardProps {
  word: string;
  guesses: string[];
}

const Board = ({ word, guesses }: BoardProps) => {
  return (
    <>
      {[...Array(MAX_NUMBER_OF_GUESSES)].map((_, index) => (
        <BoardRow key={index} ariaLabel={`Row ${index + 1}`} word={word} guess={guesses[index]} />
      ))}
    </>
  );
};

export default Board;
