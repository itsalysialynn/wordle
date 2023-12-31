import styled from 'styled-components';
import { LetterValidation } from '../types';

interface TileProps {
  letter?: string | undefined | null;
  validation?: keyof typeof LetterValidation;
}

const Tile = styled.div<TileProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  line-height: 1;
  font-weight: bold;
  vertical-align: middle;
  box-sizing: border-box;
  text-transform: uppercase;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  height: 52px;
  width: 52px;

  ${({ letter }) => !letter && `border: 2px solid #d3d6da;`}
  ${({ letter, validation }) =>
    letter &&
    validation === LetterValidation[LetterValidation.CORRECT] &&
    `
      border: 2px solid #6aaa64;
      background-color: #6aaa64;
    `}

  ${({ letter, validation }) =>
    letter &&
    validation === LetterValidation[LetterValidation.INCORRECT] &&
    `
      border: 2px solid #787c7e;
      background-color: #787c7e;
    `}

  ${({ letter, validation }) =>
    letter &&
    validation === LetterValidation[LetterValidation.PRESENT] &&
    `
      border: 2px solid #c9b458;
      background-color: #c9b458;
    `}
`;

export default Tile;
