import {getReport} from "../../utils/report";

/**
 * Sum all numbers in a given array
 * @param ar {Array<number>} array of numbers to sum
 * @returns {number} sum of all numbers in ar
 */
const simpleArraySum = (ar: Array<number>): number => {
    return ar.reduce((acc, val) => acc + val, 0);
};

(async () => {
    const report = await getReport([
        {
            fn: (ar: Array<number>) => simpleArraySum(ar),
            input: [[1, 2, 3]],
            expected: 6,
        },
        {
            fn: (ar: Array<number>) => simpleArraySum(ar),
            input: [[1, 2, 3, 4, 10, 11]],
            expected: 31,
        },
    ]);

    console.log(report);
})();