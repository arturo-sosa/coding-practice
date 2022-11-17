// https://www.codewars.com/kata/54c27a33fb7da0db0100040e

/**
 * Check if a given number is a perfect square
 * @param n {number} number to validate if it is a perfect square
 * @returns {boolean} truthy value if is a perfect square, falsy value if it is not
 */
const isPerfectSquare = (n: number): boolean => {
  if (n < 0) return false;
  return Number.isInteger(Math.sqrt(n));
};

export default isPerfectSquare;