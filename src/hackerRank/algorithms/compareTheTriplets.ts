// https://www.hackerrank.com/challenges/compare-the-triplets

import {getReport} from "../../utils/report";

/**
 * Compare 2 scores against each others and returns the points awarded for each index in the scores.
 *      If a[index] > b[index], a gains a point
 *      If a[index] < b[index], b gains a point
 *      If a[index] == b[index], neither gains a point
 * @param a {Array<number>} first score in the form of [number, number, number]
 * @param b {Array<number>} second score in the form of [number, number, number]
 * @returns {Array<number>} an array containing the finishing scores in the form of [number, number]
 */
const compareTriplets = (a: Array<number>, b: Array<number>): Array<number> => {
  return a.reduce((acc, value, idx) => {
    if (value > b[idx]) acc[0] += 1;
    else if (value < b[idx]) acc[1] += 1;

    return acc;
  }, [0, 0]);
};

(async () => {
  const report = await getReport([
    {
      fn: (a: Array<number>, b: Array<number>) => compareTriplets(a, b),
      input: [[1, 2, 3], [1, 2, 3]],
      expected: [0, 0],
    },
    {
      fn: (a: Array<number>, b: Array<number>) => compareTriplets(a, b),
      input: [[1, 2, 3], [3, 2, 1]],
      expected: [1, 1],
    },
    {
      fn: (a: Array<number>, b: Array<number>) => compareTriplets(a, b),
      input: [[1, 2, 3], [3, 4, 5]],
      expected: [0, 3],
    },
  ]);

  console.log(report);
})();