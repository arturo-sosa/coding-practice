// https://www.codewars.com/kata/54b724efac3d5402db00065e
import MORSE_CODE from "../constants/morseCode.json";
import {getReport} from "../utils/report";
import {getReportResults} from "../utils/report/report";

type Dictionary = {
  [key: string]: string
}

/**
 * Decode a morse code string into readable format
 * @param morseCode {string} morse code to decode
 * @returns {string} human readable decoded message
 */
const decodeMorse = (morseCode: string): string => morseCode
  .trim()
  .replace(/\s{2,}/g, "?")
  .split(/(\s|\?)/g)
  .map(char => char === "?" ? " " : (MORSE_CODE as Dictionary)[char])
  .join("");

(async () => {
  const report = await getReport([
    {
      fn: decodeMorse,
      input: [".... . -.--   .--- ..- -.. ."],
      expected: "HEY JUDE",
    },
    {
      fn: decodeMorse,
      input: ["...---..."],
      expected: "SOS",
    },
    {
      fn: decodeMorse,
      input: [".... . -.--  ...---... .-.-.-"],
      expected: "HEY SOS.",
    },
    {
      fn: decodeMorse,
      input: ["   .   . "],
      expected: "E E",
    },
  ]);

  console.log(getReportResults(report));
})();