import React from 'react';
import Wordle from './components/Wordle';
import styled from 'styled-components';

const AppLayout = styled.main`
  width: 100%;
  max-width: var(--game-max-width);
  margin: 0 auto;
  height: calc(100% - var(--header-height));
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
