import { ReactNode, useContext, createContext, useState } from 'react';
import { useGuesses } from './useGuesses';

interface KeyboardValues {
  onClickKey: (guess: string) => void;
  onEnter: (guess: string) => void;
  stagedGuess: string;
}
export const KeyboardContext = createContext<KeyboardValues>({
  stagedGuess: '',
  onClickKey: () => {},
  onEnter: () => {},
});

interface KeyboardProviderProps {
  children: ReactNode;
}

export const KeyboardProvider = ({ children }: KeyboardProviderProps) => {
  const [stagedGuess, setStagedGuess] = useState<string>('');
  const { addGuess } = useGuesses();

  const onEnter = () => {
    addGuess(stagedGuess);
    setStagedGuess('');
  };

  const handleBackspace = () => {
    if (stagedGuess.length > 0) {
      setStagedGuess((prevState) => prevState.slice(0, -1));
    }
  };

  const onClickKey = (key: string) => {
    if (key === 'backspace') {
      return handleBackspace();
    } else if (key === 'enter') {
      return onEnter();
    }
    return setStagedGuess((prevState) => prevState.concat(key));
  };

  return (
    <KeyboardContext.Provider value={{ stagedGuess, onClickKey, onEnter }}>
      {children}
    </KeyboardContext.Provider>
  );
};

export const useKeyboard = () => useContext(KeyboardContext);
