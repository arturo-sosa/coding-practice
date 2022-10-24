// https://www.codewars.com/kata/514b92a657cdc65150000006
import {getReport} from "../utils/report";
import {getReportResults} from "../utils/report/report";

/**
 * Find the sum of all numbers below number that divisible by 3 or 5
 * @param number {number} max number not inclusive to be checked against 3 and 5
 * @returns {number} the sum of numbers from 0 to number that are divisible by 3 or 5
 */
const getDivisibleNumbersSum = (number: number) => {
  let sum = 0;

  for (let current = 1; current < number; current++) {
    if (current % 3 === 0 || current % 5 === 0)
      sum += current;
  }

  return sum;
};

(async () => {
  const report = await getReport([
    {
      fn: (number: number) => getDivisibleNumbersSum(number),
      input: [10],
      expected: 23,
    },
    {
      fn: (number: number) => getDivisibleNumbersSum(number),
      input: [1000],
      expected: "???",
    },
  ]);

  console.log(getReportResults(report));
})();