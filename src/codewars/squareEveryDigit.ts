// https://www.codewars.com/kata/546e2562b03326a88e000020

import {getReport} from "../utils/report";

/**
 * Return a number composed by every n digit squared
 * @param n {number} number to square each digit
 * @returns {number} number composed by every n digit squared
 */
const squareDigits = (n: number): number => {
    const nArray = Array.from(String(n));
    const digits = nArray.reduce((acc, value) => acc + Math.pow(Number(value), 2), "");

    return Number(digits);
};

(async () => {
    const report = await getReport([
        {
            fn: (n: number) => squareDigits(n),
            input: [9119],
            expected: 811181,
        },
        {
            fn: (n: number) => squareDigits(n),
            input: [0],
            expected: 0,
        },
        {
            fn: (n: number) => squareDigits(n),
            input: [37],
            expected: 949,
        },
    ]);

    console.log(report);
})();