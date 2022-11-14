import rgb from "../../src/codewars/rgbToHex";

describe('RGB to Hex', () => {
  test('should alway return a string of length 6', () => {
    const result = rgb(0, 0, 0);
    expect(result.length).toEqual(6);
  });

  test('Should round negative components to 0', () => {
    const result = rgb(-1, -1, -1);
    expect(result).toEqual('000000');
  });

  test('Should rount compnents above 255 to 255', () => {
    const result = rgb(256, 256, 256);
    expect(result).toEqual('FFFFFF');
  });
});