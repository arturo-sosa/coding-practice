/**
 * Performant version of findUniq
 * @param arr {string} array of strings used to find the unique element
 * @returns {string} the unique element that do not contain the same letters as the other strings
 */
export const optimizedFindUniq = (arr: string[]): string => {
  let newArr = arr.map(a => [...new Set(a.toLowerCase())].sort().join(""));
  return arr.find((str, i) => newArr.indexOf(newArr[i]) === newArr.lastIndexOf(newArr[i]))!;
};

/**
 * Given an array of string, finds the string that is different from the other ones
 * @param arr {string} array of strings used to find the unique element
 * @returns {string} the unique element that do not contain the same letters as the other strings
 */
const findUniq = (arr: string[]): string => {
  const inputSet = arr.map(entry => Array.from(new Set(entry.toLowerCase())));
  const setCount = inputSet.reduce((acc, val) => {
    const key = Array.from(new Set(val)).sort().join("");
    acc[key] = acc[key] ? acc[key] + 1 : 1;

    return acc;
  }, {} as { [key: string]: number });

  let minCharSet: string;
  Object.keys(setCount).forEach((entry) => minCharSet = minCharSet ? setCount[entry] < setCount[minCharSet] ? entry : minCharSet : entry);

  return arr.find(entry => Array.from(new Set(entry.toLowerCase())).sort().join("") === minCharSet)!;
};

export default findUniq;