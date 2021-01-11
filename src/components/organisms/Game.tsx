import React from 'react';
import useGame from '../../hooks/useGame';
import Board from '../molecules/Board';
import StepCounter from '../molecules/StepCounter';
import RestartButton from '../molecules/RestartButton';
import { inverse, randomPattern, initPattern } from '../../modules/gamesModule';

const Game: React.FC = ():JSX.Element => {

  const [current, stepNum, handleClick, restart, newGame] = useGame(initPattern, inverse, randomPattern);

  return (
    <>
      <Board 
        lights={current}
        onClick={i => handleClick(i)}
      />
      <StepCounter>
        {stepNum}
      </StepCounter>
      <RestartButton
        onClick={() => restart()}
      >
        RESTART
      </RestartButton>
      <RestartButton onClick={() => newGame()}>
        NEW GAME
      </RestartButton>
    </>
  );
}

export default Game;

