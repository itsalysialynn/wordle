import { ReactNode, useContext, createContext, useState } from 'react';
import { LetterValidation } from '../components/types';

interface GuessContextValues {
  addGuess: (guess: string) => void;
  guesses: string[];
  validateLetter: (letter: string, index: number) => keyof typeof LetterValidation;
}
export const GuessesContext = createContext<GuessContextValues>({
  guesses: [],
  addGuess: () => {},
  validateLetter: () => LetterValidation.INCORRECT,
});

interface GuessesProviderProps {
  children: ReactNode;
  word: string;
}

export const GuessesProvider = ({ children, word }: GuessesProviderProps) => {
  const [guesses, setGuesses] = useState<string[]>([]);

  const addGuess = (guess: string) => setGuesses((prevState) => [...prevState, guess]);

  const validateLetter = (letter: string, index: number) => {
    if (letter === word[index]) {
      return LetterValidation.CORRECT;
    }
    if (word.split('').includes(letter)) {
      return LetterValidation.PRESENT;
    }
    return LetterValidation.INCORRECT;
  };

  return (
    <GuessesContext.Provider value={{ guesses, addGuess, validateLetter }}>
      {children}
    </GuessesContext.Provider>
  );
};

export const useGuesses = () => useContext(GuessesContext);
