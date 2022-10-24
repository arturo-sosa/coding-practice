// https://www.hackerrank.com/challenges/staircase

import {getReport} from "../../utils/report";

/**
 * Print a staircase of width and height of n, using the character # for each step and empty spaces as right padding, the staircase must be aligned to the right
 * @param n {number} number of steps in the staircase
 */
const staircase = (n: number) => {
  let count = n - 1;

  while (count >= 0) {
    console.log([...Array(count).fill(" "), ...Array(n - count).fill("#")].join(""));
    count--;
  }
};

(async () => {
  await getReport([
    {
      fn: (n: number) => staircase(n),
      input: [4],
      expected: 0,
    },
    {
      fn: (n: number) => staircase(n),
      input: [6],
      expected: 0,
    },
    {
      fn: (n: number) => staircase(n),
      input: [0],
      expected: 0,
    },
  ]);
})();