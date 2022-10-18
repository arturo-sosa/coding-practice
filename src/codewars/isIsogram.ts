import {getReport} from "../utils/report";

/**
 * Check if a given string is an isogram
 * @param str {string} string to check
 * @returns {boolean} truthy if str is an isogram, falsy if str is not an isogram
 */
const isIsogram = (str: string): boolean => {
    const strSet = new Set(str.toLowerCase());
    return strSet.size === str.length;
};

(async () => {
    const report = await getReport([
        {
            fn: (str: string) => isIsogram(str),
            input: ["Dermatoglyphics"],
            expected: true,
        },
        {
            fn: (str: string) => isIsogram(str),
            input: ["isogram"],
            expected: true,
        },
        {
            fn: (str: string) => isIsogram(str),
            input: ["aba"],
            expected: false,
        },
        {
            fn: (str: string) => isIsogram(str),
            input: ["moOse"],
            expected: false,
        },
        {
            fn: (str: string) => isIsogram(str),
            input: ["isIsogram"],
            expected: false,
        },
        {
            fn: (str: string) => isIsogram(str),
            input: [""],
            expected: true,
        },
    ]);

    console.log(report);
})();