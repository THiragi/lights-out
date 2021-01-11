import { useState } from 'react';

type ClickAction = (array: boolean[], i: number) => boolean[];
type RandomPattern = (func: ClickAction) => boolean[];
type Result =  [boolean[], number, (i:number) => void, () => void, () => void];
type Props = (initPattern: boolean[], inverse: ClickAction, randomPattern: RandomPattern) => Result;

const useGame: Props = (initPattern, inverse, randomPattern) => {

  const [history, setHistory] = useState<boolean[][]>([initPattern]);
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
    setHistory([randomPattern(inverse)]);
  }; 

  return [current, stepNum, handleClick, restart, newGame];
};

export default useGame;