import {divisibleByFive} from "../../src/codewars/regexBinaryDividedBy5";

describe("Regular expression for binary numbers divisible by 5", () => {
  test("should be true if a binary number can be divided by 5", () => {
    const result = divisibleByFive.test("01100100");
    expect(result).toBe(true);
  });

  test("should be false if a binary number can not be divided by 5", () => {
    const result = divisibleByFive.test("01100101");
    expect(result).toBe(false);
  });

  test("should be false if provided with an empty string", () => {
    const result = divisibleByFive.test("");
    expect(result).toBe(false);
  });

  test("should handle complex patterns", () => {
    const result = divisibleByFive.test((65020).toString(2));
    expect(result).toBe(true);
  });
});