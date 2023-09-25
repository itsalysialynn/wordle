import styled from 'styled-components';
import KeyboardRow from './KeyboardRow';
import { useKeyboard } from '../../hooks/useKeyboard';

const KeyboardLayout = styled.div`
  height: 200px;
  margin: 0 8px;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
`;

interface KeyboardProps {
  word: string;
}

const keyboardRows = [
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
  ['enter', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'backspace'],
];
const Keyboard = ({ word }: KeyboardProps) => {
  const { stagedGuess } = useKeyboard();
  return (
    <KeyboardLayout>
      {stagedGuess}
      {keyboardRows.map((keyboardRow, index) => (
        <KeyboardRow word={word} key={index} keyboardRow={keyboardRow} />
      ))}
    </KeyboardLayout>
  );
};

export default Keyboard;
