// https://www.hackerrank.com/challenges/mini-max-sum

import {getReport} from "../../utils/report";
import {getReportResults} from "../../utils/report/report";

/**
 * Print the min and max sum between four of five numbers in an array
 * @param arr {Array<number>} array of numbers to sum
 */
const miniMaxSum = (arr: Array<number>) => {
  let min = 0, max = 0;

  arr.forEach((value, idx, array) => {
    const filtered = array.filter((value, innerIdx) => idx !== innerIdx);
    const sum = filtered.reduce((acc, val) => acc + val);

    if (idx === 0)
      min = max = sum;
    else if (sum < min)
      min = sum;
    else if (sum > max)
      max = sum;
  });

  console.log(min, max);
};

(async () => {
  const report = await getReport([
    {
      fn: (arr: Array<number>) => miniMaxSum(arr),
      input: [[1, 3, 5, 7, 9]],
      expected: "16 24",
    },
    {
      fn: (arr: Array<number>) => miniMaxSum(arr),
      input: [[1, 2, 3, 4, 5]],
      expected: "10 14",
    },
  ]);

  console.log(getReportResults(report));
})();