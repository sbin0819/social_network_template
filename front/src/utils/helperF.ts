// GENERATOR + RECURSIVE
export function* range(start, end) {
  yield start;
  if (start === end) return;
  yield* range(start + 1, end);
}

//? setData
export const setDataList = (f: any, num: number) => {
  return Array.from(Array(num)).map((d) => f);
};
