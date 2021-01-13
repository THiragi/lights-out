import React from 'react';
import Header from './components/organisms/Header';
import Main from './components/Main';
import Game from './components/organisms/Game';


const App = ():JSX.Element => {
  return (
    <>
      <Header 
        white={"BLOCKS"}
        blue={"OUT"}
      />
      <Main>
        <Game side={5} />
      </Main>
    </>
  );
}

export default App;
