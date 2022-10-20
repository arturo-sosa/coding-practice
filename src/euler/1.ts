// https://projecteuler.net/minimal=1
import {getReport} from "../utils/report";
import {getReportResults} from "../utils/report/report";

/**
 * Find the sum of all numbers below limit that divisible by divisors
 * @param divisors {Array<number>} array of divisor numbers used to check against numbers
 * @param limit {number} max number not inclusive to be checked against divisors
 * @returns {number} the sum of numbers from 0 to limit that are divisible by divisors
 */
const getDivisibleNumbersSum = (divisors: Array<number>, limit: number) => {
  const divisibleNumbers: Array<number> = [];

  for (let current = 1; current < limit; current++) {
    const isDivisible = divisors.some(div => current % div === 0);

    if (isDivisible)
      divisibleNumbers.push(current);
  }

  return divisibleNumbers.reduce((acc, value) => acc + value, 0);
};

(async () => {
  const report = await getReport([
    {
      fn: (divisors: Array<number>, limit: number) => getDivisibleNumbersSum(divisors, limit),
      input: [[3, 5], 10],
      expected: 23,
    },
    {
      fn: (divisors: Array<number>, limit: number) => getDivisibleNumbersSum(divisors, limit),
      input: [[3, 5], 1000],
      expected: "???",
    },
  ]);

  console.log(getReportResults(report));
})();