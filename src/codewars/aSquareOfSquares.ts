// https://www.codewars.com/kata/54c27a33fb7da0db0100040e
import {getReport} from "../utils/report";

/**
 * Check if a given number is a perfect square
 * @param n {number} number to validate if it is a perfect square
 * @returns {boolean} truthy value if is a perfect square, falsy value if it is not
 */
const isPerfectSquare = (n: number): boolean => {
  if (n < 0) return false;
  return Number.isInteger(Math.sqrt(n));
};

(async () => {
  const report = await getReport([
    {
      fn: (n: number) => isPerfectSquare(n),
      input: [-1],
      expected: false,
    },
    {
      fn: (n: number) => isPerfectSquare(n),
      input: [0],
      expected: true,
    },
    {
      fn: (n: number) => isPerfectSquare(n),
      input: [3],
      expected: false,
    },
    {
      fn: (n: number) => isPerfectSquare(n),
      input: [4],
      expected: true,
    },
    {
      fn: (n: number) => isPerfectSquare(n),
      input: [25],
      expected: true,
    },
    {
      fn: (n: number) => isPerfectSquare(n),
      input: [26],
      expected: false,
    },
  ]);

  console.log(report);
})();