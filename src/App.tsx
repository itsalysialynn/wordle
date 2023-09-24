import React from 'react';
import Wordle from './components/Wordle';
import styled from 'styled-components';

export const WORD_LENGTH = 5;
export const MAX_NUMBER_OF_GUESSES = 6;

const AppLayout = styled.main`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const App = () => {
  return (
    <AppLayout className="App">
      <h1>Wordle</h1>
      <Wordle />
    </AppLayout>
  );
};

export default App;
