// https://projecteuler.net/minimal=3

import {getReportResults} from "../utils/report/report";
import {getReport} from "../utils/report";

/**
 * Verifies if a given number is a prime number or not
 * @param n {number} given number to verify
 * @returns {boolean} a truthy value if n is a prime number or a falsy value if n is not a prime number
 */
const isPrime = (n: number): boolean => {
  // If number is 2 or 3, is a prime number
  if (n === 2 || n === 3) return true;

  // If number is divisible by 2 or 3, is not a prime number
  if (n % 2 === 0 || n % 3 === 0) return false;

  // Prime numbers above 3 are of the form 6n ± 1, so we can condense the division checks to just two
  // As 4 is not a prime number, we can start at 5
  for (let x = 5; x * x <= n; x += 6) {
    if (n % x === 0 || n % (x + 2) === 0) return false;
  }

  return true;
};

/**
 * Finds the largest prime factor for a number
 * @param n {number} number given to find the largest prime factor
 * @returns {number} largest prime factor for a given number
 */
const getGreatestPrimeFactor = (n: number) => {
  let maxFactor = -1;
  let remains = n;
  let iteration = 2;

  while (remains > 1) {
    // If n is divisible by iteration and iteration is prime number, we found a prime factor
    // Need to set the remains to the result of the division as we need to keep factorizing from there downwards
    if (n % iteration === 0 && isPrime(iteration)) {
      maxFactor = iteration;
      remains = remains / iteration;
    }

    // If the remains are less than our max factor, we can exit the loop
    if (remains <= maxFactor) {
      remains = 1;
    }

    iteration += 1;
  }

  return maxFactor;
};

(async () => {
  const report = await getReport([
    {
      fn: (n: number) => getGreatestPrimeFactor(n),
      input: [12],
      expected: 3,
    },
    {
      fn: (n: number) => getGreatestPrimeFactor(n),
      input: [147],
      expected: 7,
    },
    {
      fn: (n: number) => getGreatestPrimeFactor(n),
      input: [17],
      expected: 17,
    },
    {
      fn: (n: number) => getGreatestPrimeFactor(n),
      input: [600851475143],
      expected: "???",
    },
  ]);

  console.log(getReportResults(report));
})();