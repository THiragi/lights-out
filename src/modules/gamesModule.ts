import { ClickAction, BoardGenerator } from '../types/game';

// side(ボード一辺のパネル数)に準じて、ゲームに必要な処理を生成
const gamesModule = (
  side: number
): [ClickAction, () => number[], BoardGenerator] => {
  // ボードのパネル総数
  const max = side * side;

  // パネルをクリックした際に、どのパネルを反転させるか定義
  const inverse: ClickAction = (array, i) => {
    array[i] = !array[i];
    if (i > side - 1) array[i - side] = !array[i - side];
    if (i < max - side) array[i + side] = !array[i + side];
    if (i % side !== 0) array[i - 1] = !array[i - 1];
    if (i % side !== side - 1) array[i + 1] = !array[i + 1];

    return array;
  };

  // ランダムな数列を生成
  const randomSteps = (): number[] => {
    const stepRange = Math.floor(
      Math.random() * (side * side - side + 1) + side
    );
    return [...Array(stepRange)].map((_) => Math.floor(Math.random() * max));
  };

  // パネルの反転アクションと数列を受け取って、パターンを生成
  const boradGenerator: BoardGenerator = (func) => (steps) => {
    const pattern = Array(max).fill(false);
    steps.forEach((p) => func(pattern, p));
    return pattern;
  };

  return [inverse, randomSteps, boradGenerator];
};

export default gamesModule;
