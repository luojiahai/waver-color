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
    let color = this.colors[this.DEFAULT_COLOR_LEVEL - 1];
    if (argument) {
      const { level, functions } = options(argument);
      color = this.colors[level - 1];
      functions.forEach((fn) => {
        color = fn(color);
      });
    }
    return color;
  };
}

/**
 * Predefined color instances
 */
export const gray = new Color(COLORS.gray);
export const red = new Color(COLORS.red);
export const orange = new Color(COLORS.orange);
export const yellow = new Color(COLORS.yellow);
export const lightyellow = new Color(COLORS.lightyellow);
export const lightgreen = new Color(COLORS.lightgreen);
export const green = new Color(COLORS.green);
export const cyan = new Color(COLORS.cyan);
export const lightblue = new Color(COLORS.lightblue);
export const blue = new Color(COLORS.blue);
export const purple = new Color(COLORS.purple);
export const magenta = new Color(COLORS.magenta);
export const pink = new Color(COLORS.pink);
