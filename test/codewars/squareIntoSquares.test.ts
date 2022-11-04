import {decompose} from "../../src/codewars/squareIntoSquares";

describe("squareInSquares", () => {
  test("should return null if n is not decomposable", async () => {
    const result = decompose(1);
    expect(result).toBeNull();
  });

  test("should return null if n is not fully decomposable into an ascending sequence", async () => {
    const result = decompose(4);
    expect(result).toBeNull();
  });

  test("should return a decomposed ascending sequence", async () => {
    const result = decompose(50);
    expect(result).toEqual([1, 3, 5, 8, 49]);
  });
});