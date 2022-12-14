import {getReport} from "../../utils/report";
import {getReportResults} from "../../utils/report/report";

/**
 * Sum two strings numeric values
 * @param a {string} first number to sum
 * @param b {string} second number to sum
 * @returns {number} sum of a dn b numeric values
 */
const sum = (a: string, b: string): number => {
  return Number(a) + Number(b);
};

(async () => {
  const report = await getReport([
    {
      fn: (a: string, b: string) => sum(a, b),
      input: ["2", "3"],
      expected: 5,
    },
  ]);

  console.log(getReportResults(report));
})();