// https://www.hackerrank.com/challenges/plus-minus

import {getReport} from "../../utils/report";

/**
 * Print to console the ratios of positive, negative and zero numbers in an array up to 6 decimals
 * @param arr {Array<number>} array of numbers to print ratios
 */
const plusMinus = (arr: Array<number>) => {
  const length = arr.length !== 0 ? arr.length : 1;
  const plus = arr.filter(n => n > 0).length;
  const minus = arr.filter(n => n < 0).length;
  const zero = arr.filter(n => n === 0).length;

  console.log((plus / length).toFixed(6));
  console.log((minus / length).toFixed(6));
  console.log((zero / length).toFixed(6));
};

(async () => {
  await getReport([
    {
      fn: (arr: Array<number>) => plusMinus(arr),
      input: [[1, 1, 0, -1, -1]],
      expected: 0,
    },
    {
      fn: (arr: Array<number>) => plusMinus(arr),
      input: [[-4, 3, -9, 0, 4, 1]],
      expected: 0,
    },
    {
      fn: (arr: Array<number>) => plusMinus(arr),
      input: [[]],
      expected: 0,
    },
  ]);
})();