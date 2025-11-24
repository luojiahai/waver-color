/**
 * Color hexadecimal type
 */
export type ColorHex = string;

/**
 * Color level type
 */
export type ColorLevel = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

/**
 * Color function type
 */
export type ColorFunction = (hex: ColorHex) => ColorHex;

/**
 * Color options type
 */
export type ColorOptions = {
  level: ColorLevel;
  functions: ColorFunction[];
};
