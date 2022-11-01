// https://www.codewars.com/kata/51e04f6b544cf3f6550000c1

import {getReport} from "../utils/report";
import {getReportResults} from "../utils/report/report";

/**
 * Returns the number of levels of a 3d beer pyramid, that can be created in the form of 0 < bonus < Σ(x^2), where x is the current level of the pyramid
 * @param bonus {number} amount allocated to purchase beers
 * @param price {number} beer unit price
 * @returns {number} number of complete levels that the pyramid can have
 */
const beeramid = (bonus: number, price: number): number => {
  let beers = bonus / price;
  let levels = 0;

  while (beers > 0) {
    beers -= (levels + 1) ** 2;

    if (beers >= 0)
      levels++;
  }

  return levels;
};

(async () => {
  const report = await getReport([
    {
      fn: beeramid,
      input: [9, 2],
      expected: 1,
    },
    {
      fn: beeramid,
      input: [10, 2],
      expected: 2,
    },
    {
      fn: beeramid,
      input: [11, 2],
      expected: 2,
    },
    {
      fn: beeramid,
      input: [21, 1.5],
      expected: 3,
    },
    {
      fn: beeramid,
      input: [454, 5],
      expected: 5,
    },
    {
      fn: beeramid,
      input: [455, 5],
      expected: 6,
    },
    {
      fn: beeramid,
      input: [4, 4],
      expected: 1,
    },
    {
      fn: beeramid,
      input: [3, 4],
      expected: 0,
    },
    {
      fn: beeramid,
      input: [0, 4],
      expected: 0,
    },
    {
      fn: beeramid,
      input: [-1, 4],
      expected: 0,
    },
  ]);

  console.log(getReportResults(report));
})();