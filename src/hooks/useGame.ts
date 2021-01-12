import { useState } from 'react';
import gamesModule from '../modules/gamesModule';

const useGame = (side: number):[boolean[], number, (i:number) => void, () => void, () => void] => {
  const [inverse, randomSteps, boardGenerator] = gamesModule(side);

  const patternGenerator = boardGenerator(inverse);

  const [history, setHistory] = useState<boolean[][]>([patternGenerator([12])]);
  const [stepNum, setStepNum] = useState<number>(0);

  const current = history[stepNum];

  const handleClick = (i: number) => {
    const histories = history.slice(0, stepNum + 1);
    const current = histories[histories.length - 1];
    const lights =  inverse(current.slice(), i);

    setHistory(histories.concat([
        lights,
    ]));
    setStepNum(histories.length);
  };

  const restart = () => {
    setStepNum(0);
    setHistory([history[0]]);
  }

  const newGame = () => {
    setStepNum(0);
    setHistory([patternGenerator(randomSteps())]);
  }; 


  return [current, stepNum, handleClick, restart, newGame];
};

export default useGame;