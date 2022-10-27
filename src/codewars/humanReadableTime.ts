// https://www.hackerrank.com/challenges/birthday-cake-candles

import {getReport} from "../utils/report";
import {getReportResults} from "../utils/report/report";

/**
 * Transform the given seconds to a human-readable form
 * @param seconds {number} number of seconds to transform
 * @return {string} transformed seconds in the format of hh:mm:ss
 */
const humanReadable = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);

  const sec = seconds % 60;
  const mins = minutes % 60;
  const hours = Math.floor(minutes / 60);

  return [hours, mins, sec].map(value => String(value).padStart(2, "0")).join(":");
};

(async () => {
  const report = await getReport([
    {
      fn: humanReadable,
      input: [0],
      expected: "00:00:00",
    },
    {
      fn: humanReadable,
      input: [5],
      expected: "00:00:05",
    },
    {
      fn: humanReadable,
      input: [60],
      expected: "00:01:00",
    },
    {
      fn: humanReadable,
      input: [86399],
      expected: "23:59:59",
    },
    {
      fn: humanReadable,
      input: [359999],
      expected: "99:59:59",
    },
    {
      fn: humanReadable,
      input: [59],
      expected: "00:00:59",
    },
    {
      fn: humanReadable,
      input: [356320],
      expected: "98:58:40",
    },
  ]);

  console.log(getReportResults(report));
})();