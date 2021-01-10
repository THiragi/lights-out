export type Pattern = {
  name: string,
  pattern: boolean[],
};

type PatternsData = {
  [id: string]: Pattern,
};

export const patternsData: PatternsData = {
  p01: {
    name: 'trial',
    pattern: [
      false, false, false, false, false,
      false, false, false, true, false,
      false, false, false, false, false,
      false, true, false, true, false,
      false, false, false, false, false,
    ]
  }
};