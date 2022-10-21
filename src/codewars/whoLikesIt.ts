// https://www.codewars.com/kata/5266876b8f4bf2da9b000362
import {getReport} from "../utils/report";
import {getReportResults} from "../utils/report/report";

/**
 * Return a message depending on the given amount of people in an array
 * @param a {Array<String>} array of people that likes something
 * @returns {string} a message indicating people likes
 */
const likes = (a: Array<string>): string => {
  switch (a.length) {
    case 0:
      return "no one likes this";
    case 1:
      return `${a[0]} likes this`;
    case 2:
      return `${a[0]} and ${a[1]} like this`;
    case 3:
      return `${a[0]}, ${a[1]} and ${a[2]} like this`;
    default:
      return `${a[0]}, ${a[1]} and ${a.length - 2} others like this`;
  }
};

(async () => {
  const report = await getReport([
    {
      fn: (a: Array<string>) => likes(a),
      input: [[]],
      expected: "no one likes this",
    }, {
      fn: (a: Array<string>) => likes(a),
      input: [["Peter"]],
      expected: "Peter likes this",
    }, {
      fn: (a: Array<string>) => likes(a),
      input: [["Jacob", "Alex"]],
      expected: "Jacob and Alex like this",
    }, {
      fn: (a: Array<string>) => likes(a),
      input: [["Max", "John", "Mark"]],
      expected: "Max, John and Mark like this",
    }, {
      fn: (a: Array<string>) => likes(a),
      input: [["Alex", "Jacob", "Mark", "Max"]],
      expected: "Alex, Jacob and 2 others like this",
    },
  ]);

  console.log(getReportResults(report));
})();