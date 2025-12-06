import { COLORS } from "./color";
import { options } from "./options";
import { ColorHex } from "./types";

/**
 * Color class
 */
class Color {
  private readonly DEFAULT_COLOR_LEVEL = 5;
  public colors: ColorHex[];

  constructor(colors: ColorHex[]) {
    this.colors = colors;
  }

  public get = (argument?: string): ColorHex => {
    let hex = this.colors[this.DEFAULT_COLOR_LEVEL - 1];
    if (argument) {
      const { level, functions } = options(argument);
      hex = this.colors[level - 1];
      functions.forEach((fn) => {
        hex = fn(hex);
      });
    }
    return hex;
  };
}

/**
 * Predefined color instances
 */
export const gray = new Color(COLORS.gray);
export const red = new Color(COLORS.red);
export const orange = new Color(COLORS.orange);
export const amber = new Color(COLORS.amber);
export const yellow = new Color(COLORS.yellow);
export const lime = new Color(COLORS.lime);
export const green = new Color(COLORS.green);
export const emerald = new Color(COLORS.emerald);
export const teal = new Color(COLORS.teal);
export const cyan = new Color(COLORS.cyan);
export const sky = new Color(COLORS.sky);
export const blue = new Color(COLORS.blue);
export const indigo = new Color(COLORS.indigo);
export const violet = new Color(COLORS.violet);
export const purple = new Color(COLORS.purple);
export const fuchsia = new Color(COLORS.fuchsia);
export const pink = new Color(COLORS.pink);
export const rose = new Color(COLORS.rose);
