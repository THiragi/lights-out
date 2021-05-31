import { useEffect, useState } from 'react';
import gamesModule from '../modules/gamesModule';

const useGame = (
  side: number
): [boolean[], number, (i: number) => void, () => void, () => void] => {
  const [inverse, randomSteps, boardGenerator] = gamesModule(side);

  const patternGenerator = boardGenerator(inverse);

  const [history, setHistory] = useState<boolean[][]>([[]]);
  const [stepCount, setStepNum] = useState<number>(0);

  const current = history[stepCount];

  const handleClick = (i: number) => {
    if (!current.includes(true)) return;
    const histories = history.slice(0, stepCount + 1);
    const latest = histories[histories.length - 1];
    const lights = inverse([...latest], i);

    setHistory(histories.concat([lights]));
    setStepNum(histories.length);
  };

  const restart = () => {
    if (history.length === 1 && stepCount === 0) return;
    setStepNum(0);
    setHistory([history[0]]);
  };

  const newGame = () => {
    setStepNum(0);
    setHistory([patternGenerator(randomSteps())]);
  };

  useEffect(() => {
    newGame();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [current, stepCount, handleClick, restart, newGame];
};

export default useGame;
