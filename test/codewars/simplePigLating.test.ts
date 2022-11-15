import pigIt from "../../src/hackerRank/algorithms/simplePigLatin";

describe("Simple pig latin", () => {
  test("should send the first letter of each word to the end and append \"ay\"", () => {
    const result = pigIt("Pig latin is cool");
    expect(result).toEqual("igPay atinlay siay oolcay");
  });

  test("Should leave punctuation without changes", () => {
    const result = pigIt("AHECxckL umLLivmytlNcA f DgNjeQTBPZxZldJfF  lipjjqZtFzyITgRCge X MJFTDJcWIpgFJYKqNH woVPAFiiLpoiSOaiq VVizzcwACks sCWxZkfDyDnUtUjGPm cL");
    expect(result).toEqual("HECxckLAay mLLivmytlNcAuay fay gNjeQTBPZxZldJfFDay  ipjjqZtFzyITgRCgelay Xay JFTDJcWIpgFJYKqNHMay oVPAFiiLpoiSOaiqway VizzcwACksVay CWxZkfDyDnUtUjGPmsay Lcay");
  });
});