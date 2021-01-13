import React from 'react';
import useGame from '../../hooks/useGame';
import Board from '../molecules/Board';
import Navi from '../molecules/Navi';

type Props = {
  side: number,
};

const Game: React.FC<Props> = ({side}):JSX.Element => {

  const [current, stepCount, message, handleClick, restart, newGame] = useGame(side);

  return (
    <>
      <Board 
        side={side}
        lights={current}
        onClick={i => handleClick(i)}
      />
      <Navi
       stepCount={stepCount}
       message={message}
       restart={restart}
       newGame={newGame} 
      />
    </>
  );
}

export default Game;

