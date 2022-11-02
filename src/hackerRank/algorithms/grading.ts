// https://www.hackerrank.com/challenges/grading

import {getReport} from "../../utils/report";
import {getReportResults} from "../../utils/report/report";

/**
 * Returns the grades adjusted with the following rules:
 *  1) If the grade difference with the next multiple of 5 is less than 3, round up to the next multiple of 5 (I.E. 84 rounds to 85)
 *  2) If the grade difference with the next multiple of 5 is equal or greater than 3, do not round up (I.E. 87 remains 87)
 *  3) If the grade is less than 38, do not round up (I.E. 37 remains 37)
 * @param grades {Array<number>} array of grades to adjust
 * @returns {Array<number>} array of adjusted grades
 */
const gradingStudents = (grades: Array<number>): Array<number> => {
  return grades.map(grade => {
    if (grade < 38) return grade;

    const diff = 5 - (grade % 5);
    return diff >= 3 ? grade : grade + diff;
  });
};

(async () => {
  const report = await getReport([
    {
      fn: gradingStudents,
      input: [[4, 73, 67, 38, 33]],
      expected: [4, 75, 67, 40, 33],
    },
  ]);

  console.log(getReportResults(report));
})();