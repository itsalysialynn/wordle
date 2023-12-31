import { useState, useEffect, useCallback } from 'react';
import Board from './board/Board';
import styled from 'styled-components';
import Keyboard from './keyboard/Keyboard';
import { WORD_LENGTH } from '../App';
import { GuessesProvider } from '../hooks/useGuesses';
import { KeyboardProvider } from '../hooks/useKeyboard';

const WordleLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;

const Wordle = () => {
  const [word, setWord] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const fetchWord = useCallback(
    () =>
      fetch(`https://random-word-api.herokuapp.com/word?length=${WORD_LENGTH}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setWord(data[0]);
        })
        .catch(() => setHasError(true)),
    [],
  );

  useEffect(() => {
    fetchWord().finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (hasError || !word) {
    return <div>Something went wrong...</div>;
  }

  return (
    <>
      <GuessesProvider word={word}>
        <KeyboardProvider>
          <WordleLayout>
            <Board word={word} />
          </WordleLayout>
          <Keyboard word={word} />
        </KeyboardProvider>
      </GuessesProvider>
    </>
  );
};

export default Wordle;
