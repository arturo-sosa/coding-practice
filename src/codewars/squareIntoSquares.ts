// https://www.codewars.com/kata/54eb33e5bc1a25440d000891

/**
 * Returns an array of incremental numbers in the form of Σx^2 = n^2 where 0 < x < n - 1, or null if it can´t be fully decomposed
 * @param n {number} number to decompose
 * @returns {Array<number> | null} the array of incrementing sequence that compose n or null if it can´t be fully decomposed
 */
export const decompose = (n: number): Array<number> | null => {
  // Decompose the number, this will include n in the result which we need to remove
  const decomposed = extract(n, Math.pow(n, 2));

  // Check if the number was decomposed, if decomposed only contains a 1 number, it means it can`t be decomposed
  // If the number is decomposed, we need to remove the last number as it includes n in it
  return decomposed === null || decomposed.length <= 1 ? null : decomposed.splice(0, decomposed.length - 1);
};

/**
 * Returns a decomposed array of numbers in the form of Σx^2 = n^2 where 0 < x < n - 1, or a null if it can´t be fully decomposed
 * @param n {number} base number to extract components
 * @param remains {number} value of the remains to check the current number
 * @returns {Array<number> | null} the array of incrementing sequence that compose n or null if it can´t be fully decomposed
 */
const extract = (n: number, remains: number): Array<number> | null => {
  // If we don't have remains, we have a matching number
  if (remains === 0)
    return [n];

  // Iterate from n - 1 to 0
  for (let idx = n - 1; idx > 0; idx--) {
    // Current number to check if belongs to the sequence
    const current = Math.pow(idx, 2);

    // If the current number fits into the remains, it`s a possible component
    if (remains - current >= 0) {
      // Check if the current number is fully decomposable with the remains
      const extracted = extract(idx, remains - current);

      // If is not fully decomposable we skip it
      if (extracted !== null) {
        extracted.push(n);
        return extracted;
      }
    }
  }

  // If we reach this line, it means we can´t decompose the number
  return null;
};