// https://projecteuler.net/minimal=2
import {FunctionMetrics, getReport} from "../utils/report";

/**
 * Get the fibonacci sequence up to a number matching maxValue
 * @param fib {Array<number>} array of fibonacci numbers in the current iteration
 * @param maxValue max value a number in the sequence can have
 * @returns {Array<number>} an array containing a fibonacci sequence up to maxValue
 */
const getFibonacciNumbers = (fib: Array<number>, maxValue: number): Array<number> => {
  const length = fib.length;
  const nextNumber = fib[length - 2] + fib[length - 1];

  if (nextNumber > maxValue) return fib;

  const numbers = [...fib, nextNumber];
  return getFibonacciNumbers(numbers, maxValue);
};

/**
 * Gets the sum of every even number in a fibonacci sequence up to maxNumber
 * @param maxNumber {number} max value a number in the sequence can have
 * @returns {number} the sum of even values up to maxValue in the sequence
 */
const getEvenFibonacciSum = (maxNumber: number) => {
  if (maxNumber <= 2) return 2;

  const numbers = getFibonacciNumbers([1, 2], maxNumber);
  return numbers.reduce((acc: number, value: number) => value % 2 === 0 ? acc + value : acc, 0);
};

(async () => {
  const report = await getReport([
    {
      fn: (maxValue: number) => getEvenFibonacciSum(maxValue),
      input: [89],
      expected: 44,
    },
    {
      fn: (maxValue: number) => getEvenFibonacciSum(maxValue),
      input: [4000000],
      expected: "???",
    },
  ]);

  console.log(report);
  console.log("Problem solution:", (report[1] as FunctionMetrics).fn.output);
})();