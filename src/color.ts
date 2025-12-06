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
    (hex: ColorHex) => Color(hex).white(80).hex(),
    (hex: ColorHex) => Color(hex).white(70).hex(),
    (hex: ColorHex) => Color(hex).white(60).hex(),
    (hex: ColorHex) => Color(hex).white(50).hex(),
    (hex: ColorHex) => hex,
    (hex: ColorHex) => Color(hex).black(15).hex(),
    (hex: ColorHex) => Color(hex).black(30).hex(),
    (hex: ColorHex) => Color(hex).black(45).hex(),
    (hex: ColorHex) => Color(hex).black(60).hex(),
    (hex: ColorHex) => Color(hex).black(75).hex(),
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
  red: generate("#fb2c36"),
  orange: generate("#ff6900"),
  amber: generate("#fd9a00"),
  yellow: generate("#efb100"),
  lime: generate("#7ccf00"),
  green: generate("#00c951"),
  emerald: generate("#00bc7d"),
  teal: generate("#00bba7"),
  cyan: generate("#00b8db"),
  sky: generate("#00a6f4"),
  blue: generate("#2b7fff"),
  indigo: generate("#615fff"),
  violet: generate("#8e51ff"),
  purple: generate("#ad46ff"),
  fuchsia: generate("#e12afb"),
  pink: generate("#f6339a"),
  rose: generate("#ff2056"),
};

/**
 * Saturate a color by a given ratio
 * @param hex ColorHex
 * @param ratio number
 * @returns ColorHex
 */
export const saturate = (hex: ColorHex, ratio: number): ColorHex => {
  const instance = Color(hex);
  const h = instance.hue();
  const s = instance.saturationl() + instance.saturationl() * ratio;
  const l = instance.lightness();
  const rgb = convert.hsl.rgb([h, s, l]);
  return Color.rgb(rgb).hex();
};

/**
 * Desaturate a color by a given ratio
 * @param hex ColorHex
 * @param ratio number
 * @returns ColorHex
 */
export const desaturate = (hex: ColorHex, ratio: number): ColorHex => {
  const instance = Color(hex);
  const h = instance.hue();
  const s = instance.saturationl() - instance.saturationl() * ratio;
  const l = instance.lightness();
  const rgb = convert.hsl.rgb([h, s, l]);
  return Color.rgb(rgb).hex();
};
