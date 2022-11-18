// https://www.codewars.com/kata/5647c3858d4acbbe550000ad

// Caveat, it matches a binary full of zeroes
export const divisibleByFive = /^(0|1(10)*(0|11)(01*01|01*00(10)*(0|11))*1)+$/;