import { SIDE_LEN } from '../utils/const';

const side = SIDE_LEN;

const max = side * side;

export const inverse = (array: boolean[], i: number): boolean[] => {
  array[i] = !array[i];
  if (i > (side - 1)) array[i - side] = !array[i - side];
  if (i < (max - side)) array[i + side] = !array[i + side];
  if (i % side !== 0) array[i - 1] = !array[i - 1];
  if (i % side !== (side - 1)) array[i + 1] = !array[i + 1]; 
  
  return array;
};

export const randomPattern = (func: (array: boolean[], i: number) => boolean[]): boolean[] => {
  console.log('random is work');
  const stepRange = Math.floor((Math.random() * (side * side - side + 1)) + side);
  const pushes = [...Array(stepRange)].map((_) => Math.floor((Math.random() * max)));
  const pattern = Array(max).fill(false);
  pushes.forEach(p => func(pattern, p));
  return pattern;
};

export const initPattern = randomPattern(inverse);

