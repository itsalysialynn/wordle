import BackspaceIcon from './BackspaceIcon';
import styled from 'styled-components';
import Key from './Key';
import { LetterValidation } from '../types';
import { useKeyboard } from '../../hooks/useKeyboard';

const KeyboardRowLayout = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto 8px;
  touch-action: manipulation;
`;

interface KeyboardRowProps {
  keyboardRow: string[];
  word: string;
}

const KeyboardRow = ({ keyboardRow }: KeyboardRowProps) => {
  const { onClickKey } = useKeyboard();

  return (
    <KeyboardRowLayout>
      {keyboardRow.map((key) => (
        <Key
          onClick={() => onClickKey(key)}
          keyText={key}
          key={key}
          role="button"
          aria-label={`${key} key`}
        >
          {key === 'backspace' ? <BackspaceIcon /> : key}
        </Key>
      ))}
    </KeyboardRowLayout>
  );
};

export default KeyboardRow;
