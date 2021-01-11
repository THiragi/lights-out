const gamesModule = (side: number): [(array: boolean[], i:number) => boolean[], () => boolean[]] => {
  const max = side * side;
  
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
    const pattern = Array(max).fill(false);
    pushes.forEach(p => inverse(pattern, p));
    return pattern;
  };

  return [inverse, randomPattern];
};

export default gamesModule;