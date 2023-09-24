import BackspaceIcon from './BackspaceIcon';
import styled from 'styled-components';
import Key from './Key';
import { LetterValidation } from '../types';

const KeyboardRowLayout = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto 8px;
  touch-action: manipulation;
`;

interface KeyboardRowProps {
  keyboardRow: string[];
  word: string;
  guesses: string[];
}

const KeyboardRow = ({ keyboardRow }: KeyboardRowProps) => (
  <KeyboardRowLayout>
    {keyboardRow.map((key) => (
      <Key keyText={key} key={key}>
        {key === 'backspace' ? <BackspaceIcon /> : key}
      </Key>
    ))}
  </KeyboardRowLayout>
);

export default KeyboardRow;
