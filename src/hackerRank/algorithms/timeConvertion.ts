// https://www.hackerrank.com/challenges/time-conversion
import {getReport} from "../../utils/report";
import {getReportResults} from "../../utils/report/report";

/**
 * Convert a time string from 12 hours format to 24 hours format
 * @param s {string} string in format of "hh:mm:ssTF" where TF equals either AM or PM
 * @returns {string} 24 hour format time string
 */
const timeConversion = (s: string): string => {
  const isAM = s.indexOf("AM") != -1;
  const [hours, minutes, seconds] = s.substring(0, s.length - 2).split(":");

  if (hours !== "12") {
    return [isAM ? hours : Number(hours) + 12, minutes, seconds].join(":");
  }

  if (hours === "12" && isAM) {
    return ["00", minutes, seconds].join(":");
  }

  return [hours, minutes, seconds].join(":");
};

(async () => {
  const report = await getReport([
    {
      fn: timeConversion,
      input: ["12:00:00AM"],
      expected: "00:00:00",
    },
    {
      fn: timeConversion,
      input: ["12:00:00PM"],
      expected: "12:00:00",
    },
    {
      fn: timeConversion,
      input: ["01:00:00AM"],
      expected: "01:00:00",
    },
    {
      fn: timeConversion,
      input: ["01:00:00PM"],
      expected: "13:00:00",
    },
    {
      fn: timeConversion,
      input: ["11:00:00PM"],
      expected: "23:00:00",
    },
  ]);

  console.log(getReportResults(report));
})();