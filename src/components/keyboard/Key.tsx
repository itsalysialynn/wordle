import styled from 'styled-components';
import { LetterValidation } from '../types';

interface KeyProps {
  keyText: string;
  validation?: keyof typeof LetterValidation | undefined | null;
}

const Key = styled.button<KeyProps>`
  font-size: 1.25em;
  font-weight: bold;
  border: 0;
  padding: 0;
  margin: 0 6px 0 0;
  height: 58px;
  border-radius: 4px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0.3);
  border: none;
  ${({ keyText }) => keyText === 'enter' && `font-size: 0.65em;`}
  ${({ validation }) => !validation && `background-color: #d3d6da`}
  ${({ validation }) =>
    validation === LetterValidation[LetterValidation.CORRECT] &&
    `
      background-color: #6aaa64;
    `}

  ${({ validation }) =>
    validation === LetterValidation[LetterValidation.INCORRECT] &&
    `
      background-color: #787c7e;
    `}

  ${({ validation }) =>
    validation === LetterValidation[LetterValidation.PRESENT] &&
    `
      background-color: #c9b458;
    `}
`;

export default Key;
