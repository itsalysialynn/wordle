import { ReactNode, useContext, createContext, useState } from 'react';

interface GuessContextValues {
  addGuess: (guess: string) => void;
  guesses: string[];
}
export const GuessesContext = createContext<GuessContextValues>({
  guesses: [],
  addGuess: () => {},
});

interface GuessesProviderProps {
  children: ReactNode;
  word: string;
}

export const GuessesProvider = ({ children, word }: GuessesProviderProps) => {
  const [guesses, setGuesses] = useState<string[]>([]);

  const addGuess = (guess: string) => setGuesses((prevState) => [...prevState, guess]);

  return (
    <GuessesContext.Provider value={{ guesses, addGuess }}>{children}</GuessesContext.Provider>
  );
};

export const useGuesses = () => useContext(GuessesContext);
