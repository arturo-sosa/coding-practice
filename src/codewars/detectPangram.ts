// https://www.codewars.com/kata/545cedaa9943f7fe7b000048
import {getReport} from "../utils/report";
import {getReportResults} from "../utils/report/report";

/**
 * Check if a given phrase is a pangram, ignoring punctuation and whitespace
 * @param phrase {string} phrase to check
 * @returns {boolean} truthy if is a pangram, falsy if is not
 */
const isPangram = (phrase: string): boolean => {
  const sanitizedPhrase = phrase.toLowerCase().match(/[a-z]/g);
  const letters = new Set(sanitizedPhrase);

  return letters.size === 26;
};

(async () => {
  const report = await getReport([
    {
      fn: (phrase: string) => isPangram(phrase),
      input: ["The quick brown fox jumps over the lazy dog"],
      expected: true,
    },
    {
      fn: (phrase: string) => isPangram(phrase),
      input: ["This is not a pangram."],
      expected: false,
    },
  ]);

  console.log(getReportResults(report));
})();