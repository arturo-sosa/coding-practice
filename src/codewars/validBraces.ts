// https://www.codewars.com/kata/5277c8a221e209d3f6000b56
import {getReport} from "../utils/report";
import {getReportResults} from "../utils/report/report";

/**
 * Check if a given string of braces is valid
 * @param braces {string} braces check, this string can only contain "()[]{}" characters
 * @return truthy if the braces are closing in the correct order that they are opening, falsy otherwise
 */
const validBraces = (braces: string): boolean => {
  const pool: Array<string> = [];
  const pairs: { [key: string]: string } = {
    "}": "{",
    ")": "(",
    "]": "[",
  };

  for (let char of braces) {
    if (char === "{" || char === "(" || char === "[") {
      pool.push(char);
      continue;
    }

    if (pool.length === 0 || pairs[char] !== pool.pop())
      return false;
  }

  return pool.length === 0;
};

(async () => {
  const report = await getReport([
    {
      fn: validBraces,
      input: ["(){}[]"],
      expected: true,
    },
    {
      fn: validBraces,
      input: ["([{}])"],
      expected: true,
    },
    {
      fn: validBraces,
      input: ["(}"],
      expected: false,
    },
    {
      fn: validBraces,
      input: ["[(])"],
      expected: false,
    },
    {
      fn: validBraces,
      input: ["[({})](]"],
      expected: false,
    },
    {
      fn: validBraces,
      input: ["()"],
      expected: true,
    },
    {
      fn: validBraces,
      input: ["[(])"],
      expected: false,
    },
  ]);

  console.log(getReportResults(report));
})();