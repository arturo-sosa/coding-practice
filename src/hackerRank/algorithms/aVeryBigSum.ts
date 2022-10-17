// https://www.hackerrank.com/challenges/a-very-big-sum/problem

import {getReport} from "../../utils/report";

/**
 * Sum evey number in an array handling big numbers
 * @param ar {Array<number>} array of numbers to be sum
 * @returns {number} the sum of all numbers in ar
 */
const aVeryBigSum = (ar: Array<number>): number => {
    const sum = ar.reduce((acc, value) => acc + BigInt(value), BigInt(0));
    return Number(sum);
};

(async () => {
    const report = await getReport([
        {
            fn: (ar: Array<number>) => aVeryBigSum(ar),
            input: [[1000000001, 1000000002, 1000000003, 1000000004, 1000000005]],
            expected: 5000000015,
        },
    ]);

    console.log(report);
})();