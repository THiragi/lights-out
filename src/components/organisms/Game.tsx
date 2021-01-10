import React, { useState, useEffect } from 'react';
import Board from '../molecules/Board';
import StepCounter from '../molecules/StepCounter';
import RestartButton from '../molecules/RestartButton';

const rangeRand = (min: number, max: number) => Math.floor((Math.random() * (max - min + 1)) + min);

const randomPattern = (steps: number):boolean[] => {
  const pattern = Array(25).fill(false);
  const pushes = [...Array(steps)].map((_) => Math.floor((Math.random() * 25)));
  pushes.forEach(p => inverse(pattern, p));
  return pattern;
};

const inverse = (array: boolean[], i: number): boolean[] => {
  array[i] = !array[i];
  if (i > 4) array[i - 5] = !array[i - 5];
  if (i < 20) array[i + 5] = !array[i + 5];
  if (i % 5 !== 0) array[i - 1] = !array[i - 1]; 
  if (i % 5 !== 4) array[i + 1] = !array[i + 1]; 
  
  return array;
};

const Game: React.FC = ():JSX.Element => {


  const [history, setHistory] = useState<boolean[][]>(
    [
      Array(25).fill(false)
      // [
      //     false, false, false, false, false,
      //     false, false, false, true, false,
      //     false, false, false, false, false,
      //     false, true, false, true, false,
      //     false, false, false, false, false,
      // ]
    ]
  );
  const [stepNum, setStepNum] = useState(0);

  const restart = () => {
    setStepNum(0);
    setHistory([history[0]]);
  }

  const newGame = () => {
    const steps = rangeRand(5, 10);
    const pattern = randomPattern(steps);
    setStepNum(0);
    setHistory([pattern]);
  } 

  const handleClick = (i: number) => {
    const histories = history.slice(0, stepNum + 1);
    const current = histories[histories.length - 1];
    const lights =  inverse(current.slice(), i);

    setHistory(histories.concat([
        lights,
    ]));
    setStepNum(histories.length);
  };

  useEffect(() => {
    newGame()
  },[]);

  const current = history[stepNum];

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
        NEW<br/>GAME
      </RestartButton>
    </>
  );
}

export default Game;




// const steps = [...Array(step)].map((_) => Math.floor((Math.random() * 25)));