import React from 'react';
import Header from './components/organisms/Header';
import Container from './components/Container';
import Main from './components/Main';
import Game from './components/organisms/Game';


const App = ():JSX.Element => {
  return (
    <Container>
      <Header 
        white={"BLOCKS"}
        blue={"OUT"}
      />
      <Main>
        <Game side={5} />
      </Main>
    </Container>
  );
}

export default App;
