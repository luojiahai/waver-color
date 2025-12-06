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
  red: generate("#cf5f5f"),
  orange: generate("#d17a32"),
  amber: generate("#d19e1d"),
  yellow: generate("#d1ab11"),
  lime: generate("#85bd2b"),
  green: generate("#3cb568"),
  emerald: generate("#2bab7c"),
  teal: generate("#24ab99"),
  cyan: generate("#1baec4"),
  sky: generate("#309fcf"),
  blue: generate("#4f8ad1"),
  indigo: generate("#6b75cf"),
  violet: generate("#8c75d1"),
  purple: generate("#a16ed4"),
  fuchsia: generate("#c366d1"),
  pink: generate("#cc6098"),
  rose: generate("#d15e6f"),
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
