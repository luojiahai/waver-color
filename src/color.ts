import Color from "color";
import convert from "color-convert";
import { ColorHex } from "./types";

/**
 * Generate color levels based on a base color
 * @param base ColorHex
 * @returns ColorHex[]
 */
const generate = (base: ColorHex): ColorHex[] =>
  [
    (color: ColorHex) => Color(color).white(80).hex(),
    (color: ColorHex) => Color(color).white(70).hex(),
    (color: ColorHex) => Color(color).white(60).hex(),
    (color: ColorHex) => Color(color).white(50).hex(),
    (color: ColorHex) => Color(color).hex(),
    (color: ColorHex) => Color(color).black(15).hex(),
    (color: ColorHex) => Color(color).black(30).hex(),
    (color: ColorHex) => Color(color).black(45).hex(),
    (color: ColorHex) => Color(color).black(60).hex(),
    (color: ColorHex) => Color(color).black(75).hex(),
  ].map((fn) => fn(base));

/**
 * Predefined color levels
 */
export const COLORS: Record<string, ColorHex[]> = {
  gray: [
    "#dae2e6",
    "#c0c8cc",
    "#aab0b3",
    "#939799",
    "#7d7f80",
    "#686a6b",
    "#545657",
    "#3f4142",
    "#2b2d2e",
    "#17191a",
  ],
  red: generate("#ff6666"),
  orange: generate("#ff9966"),
  yellow: generate("#ffcc66"),
  lightyellow: generate("#ffff66"),
  lightgreen: generate("#99ff66"),
  green: generate("#66ff99"),
  cyan: generate("#66ffff"),
  lightblue: generate("#66ccff"),
  blue: generate("#6699ff"),
  purple: generate("#9966ff"),
  magenta: generate("#ff66ff"),
  pink: generate("#ff6699"),
};

/**
 * Saturate a color by a given ratio
 * @param color ColorHex
 * @param ratio number
 * @returns ColorHex
 */
export const saturate = (color: ColorHex, ratio: number): ColorHex => {
  const instance = Color(color);
  const h = instance.hue();
  const s = instance.saturationl() + instance.saturationl() * ratio;
  const l = instance.lightness();
  const rgb = convert.hsl.rgb([h, s, l]);
  return Color.rgb(rgb).hex();
};

/**
 * Desaturate a color by a given ratio
 * @param color ColorHex
 * @param ratio number
 * @returns ColorHex
 */
export const desaturate = (color: ColorHex, ratio: number): ColorHex => {
  const instance = Color(color);
  const h = instance.hue();
  const s = instance.saturationl() - instance.saturationl() * ratio;
  const l = instance.lightness();
  const rgb = convert.hsl.rgb([h, s, l]);
  return Color.rgb(rgb).hex();
};
