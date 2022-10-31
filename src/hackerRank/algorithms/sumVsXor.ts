// https://www.hackerrank.com/challenges/sum-vs-xor
import {getReport} from "../../utils/report";
import {getReportResults} from "../../utils/report/report";

/**
 * Get the number of instances where n + x = n ^ x (bitwise), having n as limit and x as the iteration from 0 to limit
 * Notes: This work with small number for n, but it was far from optimized and some test cases' timeout. A new approach is needed,
 * I´m leaving this method in here just to have a reference from the brute-forced approach, but do not use this method as it can run really slow.
 * @param n {number} number to get matching instances
 * @returns {number} amount of instances where n +x = n ^ x
 */
function sumXorNotOptimized(n: number): number {
  let count = 0;

  for (let idx = 0; idx <= n; idx++) {
    if ((n + idx) === (n ^ idx)) count++;
  }

  return count;
}

/**
 * Get the number of instances where n + x = n ^ x (bitwise), having n as limit and x as the iteration from 0 to limit
 * Notes: This is a new approach that I found, in which you can get the actual matches if you get the amount of zeros in the binary form of n and then elevate 2 to the "zeroes" potency.
 * @param n {number} number to get matching instances
 * @returns {number} amount of instances where n +x = n ^ x
 */
const sumXor = (n: number): number => {
  // Get the number as a binary string
  const binary = (n > 0 ? n : ~n).toString(2);
  let pow = 0;

  // Check every character in the binary string
  for (let bit of binary) {
    // If we have a zero, then increase pow by one
    if (bit === "0") pow += 1;
  }

  // Return 2 to the zeroes potency
  return 2 ** pow;
};

(async () => {
  const report = await getReport([
    {
      fn: (n: number) => sumXor(n),
      input: [4],
      expected: 4,
    },
    {
      fn: (n: number) => sumXor(n),
      input: [5],
      expected: 2,
    },
    {
      fn: (n: number) => sumXor(n),
      input: [10],
      expected: 4,
    },
    {
      fn: (n: number) => sumXor(n),
      input: [1000000000000000],
      expected: 1073741824,
    },
  ]);

  console.log(getReportResults(report));
})();