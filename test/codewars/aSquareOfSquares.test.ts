import isPerfectSquare from "../../src/codewars/aSquareOfSquares";

describe("A square of squares", () => {
  test("should be true if the input has a perfect square", () => {
    const result = isPerfectSquare(25);
    expect(result).toBe(true);
  });

  test("should be false if the input do not have a perfect square", () => {
    const result = isPerfectSquare(3);
    expect(result).toBe(false);
  });

  test("should be false if the input is a negative number", () => {
    const result = isPerfectSquare(-25);
    expect(result).toBe(false);
  });
});