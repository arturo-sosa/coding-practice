import {getReport} from "../../utils/report";

/**
 * Returns the absolute difference from diagonal 1 (top left to bottom right) and diagonal 2 (top right to bottom left) in a given array of numbers
 * @param arr {number[][]} two dimensional array of numbers where each array corresponds to a row and each number position corresponds to a column.
 * @returns {number} the absolute difference from arr diagonals
 */
const diagonalDifference = (arr: number[][]): number => {
    const diagonals = arr.reduce((acc, value, idx) => {
        return [acc[0] += value[idx], acc[1] += value[value.length - idx - 1]];
    }, [0, 0]);

    return Math.abs(diagonals[0] - diagonals[1]);
};

(async () => {
    const report = await getReport([
        {
            fn: (arr: number[][]) => diagonalDifference(arr),
            input: [[[1, 2, 3], [4, 5, 6], [9, 8, 9]]],
            expected: 2,
        },
        {
            fn: (arr: number[][]) => diagonalDifference(arr),
            input: [[[11, 2, 4], [4, 5, 6], [10, 8, -12]]],
            expected: 15,
        },
    ]);

    console.log(report);
})();