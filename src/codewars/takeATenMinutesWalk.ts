// https://www.codewars.com/kata/54da539698b8a2ad76000228

import {getReport} from "../utils/report";

const distance = 10;

/**
 * Check if is possible to walk a given path and go back to the starting point in a certain distance from starting point
 * @param walk {Array<string>} Array containing a single letter indicating a direction to walk in the form of "n", "e", "s", "w"
 * @returns {boolean} truthy if the walk is doable at the given distance and the walks ends at the starting point, falsy if the walk is shorter or longer than the given distance or the walk do not finish at the starting point
 */
const isValidWalk = (walk: Array<string>): boolean => {
    if (walk.length != distance) return false;

    const result = walk.reduce((acc: Array<number>, value: string) => {
        const stepDirection = value === "n" || value === "e" ? 1 : -1;

        if (value === "n" || value === "s")
            acc[0] += stepDirection;
        else
            acc[1] += stepDirection;

        return acc;
    }, [0, 0]);

    return result[0] === 0 && result[1] === 0;
};

(async () => {
    const report = await getReport([
        {
            fn: (walk: Array<string>) => isValidWalk(walk),
            input: [["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]],
            expected: true,
        },
        {
            fn: (walk: Array<string>) => isValidWalk(walk),
            input: [["w", "e", "w", "e", "w", "e", "w", "e", "w", "e", "w", "e"]],
            expected: false,
        },
        {
            fn: (walk: Array<string>) => isValidWalk(walk),
            input: [["w"]],
            expected: false,
        },
        {
            fn: (walk: Array<string>) => isValidWalk(walk),
            input: [["n", "n", "n", "s", "n", "s", "n", "s", "n", "s"]],
            expected: false,
        },
        {
            fn: (walk: Array<string>) => isValidWalk(walk),
            input: [["n", "s", "n", "s", "n", "s", "n", "s", "n", "w"]],
            expected: false,
        },
        {
            fn: (walk: Array<string>) => isValidWalk(walk),
            input: [["w", "n", "e", "s"]],
            expected: false,
        },
        {
            fn: (walk: Array<string>) => isValidWalk(walk),
            input: [["n", "s"]],
            expected: false,
        },
        {
            fn: (walk: Array<string>) => isValidWalk(walk),
            input: [[]],
            expected: false,
        },
    ]);

    console.log(report);
})();