import React from 'react';
import Header from './components/Header';
import Container from './components/Container';
import Main from './components/Main';
import Game from './components/Game';
import WhiteSpan from './components/atoms/WhiteSpan';


const App = ():JSX.Element => {
  return (
    <Container>
      <Header>
        <WhiteSpan>LIGHTS</WhiteSpan>OUT
      </Header>
      <Main>
        <Game />
      </Main>
    </Container>
  );
}

export default App;
