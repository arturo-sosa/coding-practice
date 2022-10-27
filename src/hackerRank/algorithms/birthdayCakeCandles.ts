// https://www.hackerrank.com/challenges/birthday-cake-candles

import {getReport} from "../../utils/report";
import {getReportResults} from "../../utils/report/report";

/**
 * Get the amount of the tallest candles in an array
 * @param candles {Array<number>} array of candles where each position indicates the candle length
 * @return {number} the amount of the talles candles
 */
const birthdayCakeCandles = (candles: Array<number>): number => {
  const tallestCandle = Math.max(...candles);
  const filteredCandles = candles.filter(candle => candle === tallestCandle);

  return filteredCandles.length;
};

(async () => {
  const report = await getReport([
    {
      fn: (candles: Array<number>) => birthdayCakeCandles(candles),
      input: [[4, 4, 1, 3]],
      expected: 2,
    },
    {
      fn: (candles: Array<number>) => birthdayCakeCandles(candles),
      input: [[3, 2, 1, 3]],
      expected: 2,
    },
    {
      fn: (candles: Array<number>) => birthdayCakeCandles(candles),
      input: [[3, 2, 1, 3, 3]],
      expected: 3,
    },
  ]);

  console.log(getReportResults(report));
})();