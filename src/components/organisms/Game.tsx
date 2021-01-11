import React from 'react';
import useGame from '../../hooks/useGame';
import Board from '../molecules/Board';
import StepCounter from '../molecules/StepCounter';
import RestartButton from '../molecules/RestartButton';

type Props = {
  side: number,
};

const Game: React.FC<Props> = ({side}):JSX.Element => {

  const [current, stepNum, handleClick, restart, newGame] = useGame(side);

  return (
    <>
      <Board 
        side={side}
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

