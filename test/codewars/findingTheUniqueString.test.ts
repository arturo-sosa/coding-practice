import findUniq from "../../src/codewars/findingTheUniqueString";

describe("Finding the unique string", () => {
  test("should find the string with unique characters", () => {
    const input = ["abc", "acb", "bac", "foo", "bca", "cab", "cba"];
    const result = findUniq(input);

    expect(result).toEqual("foo");
  });

  test("should ignore case", () => {
    const input = ["Tom Marvolo Riddle", "I am Lord Voldemort", "Harry Potter"];
    const result = findUniq(input);

    expect(result).toEqual("Harry Potter");
  });

  test("should handle huge arrays", () => {
    const input = new Array(99999)
    input.fill('Gollum').push('Log');

    const result = findUniq(input);

    expect(result).toEqual('Log');
  })
});