import React from 'react';
import Header from './components/Header';
import Container from './components/Container';
import Main from './components/Main';
import Game from './components/organisms/Game';
import WhiteSpan from './components/atoms/WhiteSpan';

const App = ():JSX.Element => {
  return (
    <Container>
      <Header>
        <WhiteSpan>B L O C K S </WhiteSpan>O U T
      </Header>
      <Main>
        <Game/>
      </Main>
    </Container>
  );
}

export default App;
