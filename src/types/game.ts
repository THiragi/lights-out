export type ClickAction = (array: boolean[], i: number) => boolean[];
export type BoardGenerator = (
  func: ClickAction
) => (steps: number[]) => boolean[];
