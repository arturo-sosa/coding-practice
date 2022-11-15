/**
 * Translates a given array to pig latin
 * @param a {string} string to pig latin translate
 * @returns {string} pig latin translation, where the starting letter of each word is moved to the end of the word and each word is appended "ay" to the end (I.E. Pig => igPay)
 */
const pigIt = (a: string): string => {
  return a.replace(/(\w)(\w*)/gm, "$2$1ay");
};

export default pigIt;