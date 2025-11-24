import Color, { ColorInstance } from "color";
import convert from "color-convert";

const generate = (base: ColorInstance): ColorInstance[] =>
  [
    (color: ColorInstance) => color.white(80),
    (color: ColorInstance) => color.white(70),
    (color: ColorInstance) => color.white(60),
    (color: ColorInstance) => color.white(50),
    (color: ColorInstance) => color,
    (color: ColorInstance) => color.black(15),
    (color: ColorInstance) => color.black(30),
    (color: ColorInstance) => color.black(45),
    (color: ColorInstance) => color.black(60),
    (color: ColorInstance) => color.black(75),
  ].map((fn) => fn(base));

export const COLORS = {
  gray: [
    Color("#dae2e6"),
    Color("#c0c8cc"),
    Color("#aab0b3"),
    Color("#939799"),
    Color("#7d7f80"),
    Color("#686a6b"),
    Color("#545657"),
    Color("#3f4142"),
    Color("#2b2d2e"),
    Color("#17191a"),
  ],
  red: generate(Color("#ff6666")),
  orange: generate(Color("#ff9966")),
  yellow: generate(Color("#ffcc66")),
  lightyellow: generate(Color("#ffff66")),
  lightgreen: generate(Color("#99ff66")),
  green: generate(Color("#66ff99")),
  cyan: generate(Color("#66ffff")),
  lightblue: generate(Color("#66ccff")),
  blue: generate(Color("#6699ff")),
  purple: generate(Color("#9966ff")),
  magenta: generate(Color("#ff66ff")),
  pink: generate(Color("#ff6699")),
};

export const saturate = (
  instance: ColorInstance,
  ratio: number
): ColorInstance => {
  const h = instance.hue();
  const s = instance.saturationl() + instance.saturationl() * ratio;
  const l = instance.lightness();
  const hsl = convert.hsl.rgb([h, s, l]);
  return Color.rgb(hsl);
};

export const desaturate = (
  instance: ColorInstance,
  ratio: number
): ColorInstance => {
  const h = instance.hue();
  const s = instance.saturationl() - instance.saturationl() * ratio;
  const l = instance.lightness();
  const hsl = convert.hsl.rgb([h, s, l]);
  return Color.rgb(hsl);
};
