const hexValue = (n: number): string => {
  const parsed = n < 0 || n > 255 ? Math.min(Math.max(n, 0), 255) : n;
  return parsed.toString(16).toUpperCase().padStart(2, '0');
};

const rgb = (r: number, g: number, b: number): string => {
  return `${hexValue(r)}${hexValue(g)}${hexValue(b)}`;
};

export default rgb;