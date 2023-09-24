import { useState, useEffect, useMemo, useCallback } from 'react';

const WORD_LENGTH = 5;

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

  if (hasError) {
    return <div>Something went wrong...</div>;
  }

  return <div>{word}</div>;
};

export default Wordle;
