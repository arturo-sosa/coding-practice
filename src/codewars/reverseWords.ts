// https://www.codewars.com/kata/5259b20d6021e9e14c0010d4
import {FunctionMetrics, getReport} from "../utils/report";

/**
 * Returns a word with the characters reversed
 * @param word {string} word to reverse
 * @returns {string} a word with the characters reversed
 */
const reverseWord = (word: string): string => Array.from(word).reverse().join("");

/**
 * Returns a string with each word characters reversed
 * @param str {string} string of characters to reverse words
 * @returns {string} string with str word characters reversed
 */
const reverseWords = (str: string): string => str.split(" ").map(reverseWord).join(" ");

(async () => {
  const report = await getReport([
    {
      fn: (str: string) => reverseWords(str),
      input: ["The quick brown fox jumps over the lazy dog."],
      expected: "ehT kciuq nworb xof spmuj revo eht yzal .god",
    },
    {
      fn: (str: string) => reverseWords(str),
      input: ["apple"],
      expected: "elppa",
    },
    {
      fn: (str: string) => reverseWords(str),
      input: ["a b c d"],
      expected: "a b c d",
    },
    {
      fn: (str: string) => reverseWords(str),
      input: ["double  spaced  words"],
      expected: "elbuod  decaps  sdrow",
    },
    {
      fn: (str: string) => reverseWords(str),
      input: ["This is an example!"],
      expected: "sihT si na !elpmaxe",
    },
    {
      fn: (str: string) => reverseWords(str),
      input: ["double  spaces"],
      expected: "elbuod  secaps",
    },
  ]);

  Object.keys(report).forEach(key => {
    if (key === "root") return;

    const metrics = report[key] as FunctionMetrics;
    console.log(metrics.label);
    console.log(`Input: ${JSON.stringify((metrics.fn.input as any)[0])}`);
    console.log(`Expected: ${JSON.stringify(metrics.fn.expected)}`);
    console.log(`Output: ${JSON.stringify(metrics.fn.output)}`);
    console.log(`Result: ${metrics.fn.expected === metrics.fn.output}\n`);
  });
})();