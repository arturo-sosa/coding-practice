// https://www.hackerrank.com/challenges/grading

import {getReport} from "../../utils/report";
import {getReportResults} from "../../utils/report/report";

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