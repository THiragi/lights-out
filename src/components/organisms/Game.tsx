import React from 'react';
import useGame from '../../hooks/useGame';
import Board from '../molecules/Board';
import SideNav from '../molecules/SideNav';
import styled from 'styled-components';

const MainFrame = styled.div`
  display: flex;
`;


type Props = {
  side: number,
};

const Game: React.FC<Props> = ({side}):JSX.Element => {

  const [current, stepNum, message, handleClick, restart, newGame] = useGame(side);

  return (
    <MainFrame>
      <Board 
        side={side}
        lights={current}
        onClick={i => handleClick(i)}
      />
      <SideNav
       stepNum={stepNum}
       message={message}
       restart={restart}
       newGame={newGame} 
      />
    </MainFrame>
  );
}

export default Game;

