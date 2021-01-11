import { useState } from 'react';
// import gamesModule from '../modules/gamesModule';

const useGame = (side: number):[boolean[], number, (i:number) => void, () => void, () => void] => {
  const max = side * side;
  const pattern = Array(max).fill(false);
  
  const inverse = (array: boolean[], i: number): boolean[] => {
    array[i] = !array[i];
    if (i > (side - 1)) array[i - side] = !array[i - side];
    if (i < (max - side)) array[i + side] = !array[i + side];
    if (i % side !== 0) array[i - 1] = !array[i - 1];
    if (i % side !== (side - 1)) array[i + 1] = !array[i + 1]; 
    
    return array;
  };
  
  const randomPattern = ():boolean[] => {
    const stepRange = Math.floor((Math.random() * (side * side - side + 1)) + side);
    const pushes = [...Array(stepRange)].map((_) => Math.floor((Math.random() * max)));
    pushes.forEach(p => inverse(pattern, p));
    return pattern;
  };

  const [history, setHistory] = useState<boolean[][]>([pattern]);
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
    setHistory([randomPattern()]);
  }; 

  return [current, stepNum, handleClick, restart, newGame];
};

export default useGame;