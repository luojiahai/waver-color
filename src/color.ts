import Color, { ColorInstance } from "color";

const colors = {
  gray: [
    new Color("#f6f7f8"),
    new Color("#f1f2f3"),
    new Color("#e3e5e7"),
    new Color("#c9ccd0"),
    new Color("#aeb3b9"),
    new Color("#9499a0"),
    new Color("#797f87"),
    new Color("#61666d"),
    new Color("#484c53"),
    new Color("#2f3238"),
    new Color("#18191c"),
  ],
  pink: [
    new Color("#fff3f6"),
    new Color("#ffecf1"),
    new Color("#ffd9e4"),
    new Color("#ffb3ca"),
    new Color("#ff8cb0"),
    new Color("#ff6699"),
    new Color("#e84b85"),
    new Color("#d03171"),
    new Color("#ad1c5b"),
    new Color("#771141"),
    new Color("#3f0723"),
  ],
  magenta: [
    new Color("#fef3fc"),
    new Color("#fdebfa"),
    new Color("#fbd7f4"),
    new Color("#f7aeeb"),
    new Color("#f286e2"),
    new Color("#ee5ddb"),
    new Color("#da41cb"),
    new Color("#c525ba"),
    new Color("#9b1797"),
    new Color("#670f67"),
    new Color("#330834"),
  ],
  red: [
    new Color("#fef3f2"),
    new Color("#feecea"),
    new Color("#fdd7d4"),
    new Color("#fcafaa"),
    new Color("#fa857f"),
    new Color("#f85a54"),
    new Color("#e23d3d"),
    new Color("#c9272c"),
    new Color("#9f1922"),
    new Color("#710e18"),
    new Color("#3b060d"),
  ],
  orange: [
    new Color("#fff6ee"),
    new Color("#fff0e3"),
    new Color("#ffe1c7"),
    new Color("#ffc18f"),
    new Color("#ffa058"),
    new Color("#ff7f24"),
    new Color("#e95b03"),
    new Color("#bb4100"),
    new Color("#8d2d00"),
    new Color("#5e1b00"),
    new Color("#2f0c00"),
  ],
  yellow: [
    new Color("#fffaef"),
    new Color("#fff6e4"),
    new Color("#ffeec9"),
    new Color("#ffdb93"),
    new Color("#ffc65d"),
    new Color("#ffb027"),
    new Color("#fa9600"),
    new Color("#c26e00"),
    new Color("#8a4a00"),
    new Color("#5b2e00"),
    new Color("#2f1600"),
  ],
  lightyellow: [
    new Color("#fffcec"),
    new Color("#fffadf"),
    new Color("#fff5bf"),
    new Color("#ffea80"),
    new Color("#ffdc40"),
    new Color("#ffcc00"),
    new Color("#d5a300"),
    new Color("#aa7d00"),
    new Color("#805a00"),
    new Color("#553900"),
    new Color("#2b1b00"),
  ],
  lightgreen: [
    new Color("#f7fbef"),
    new Color("#f2f9e4"),
    new Color("#e3f2c8"),
    new Color("#c7e691"),
    new Color("#a9d95b"),
    new Color("#88cc24"),
    new Color("#66b105"),
    new Color("#4e8e04"),
    new Color("#376a03"),
    new Color("#224702"),
    new Color("#102301"),
  ],
  green: [
    new Color("#effbf3"),
    new Color("#e4f8ea"),
    new Color("#caf1d6"),
    new Color("#95e4af"),
    new Color("#5fd689"),
    new Color("#2ac864"),
    new Color("#0eb350"),
    new Color("#089043"),
    new Color("#046e35"),
    new Color("#034926"),
    new Color("#012414"),
  ],
  cyan: [
    new Color("#edfbfb"),
    new Color("#e2f8f8"),
    new Color("#c4eff0"),
    new Color("#89e1e1"),
    new Color("#4fd3d1"),
    new Color("#14c4bf"),
    new Color("#02aaaa"),
    new Color("#018488"),
    new Color("#015f66"),
    new Color("#013d44"),
    new Color("#001d22"),
  ],
  lightblue: [
    new Color("#ecfafe"),
    new Color("#dff6fd"),
    new Color("#bfedfa"),
    new Color("#80daf6"),
    new Color("#40c5f1"),
    new Color("#00aeec"),
    new Color("#008ac5"),
    new Color("#00699d"),
    new Color("#004b76"),
    new Color("#002f4f"),
    new Color("#001627"),
  ],
  blue: [
    new Color("#f3f5ff"),
    new Color("#ebefff"),
    new Color("#d7dfff"),
    new Color("#b0c1ff"),
    new Color("#88a4ff"),
    new Color("#6188ff"),
    new Color("#4c6de4"),
    new Color("#3752c8"),
    new Color("#2136ac"),
    new Color("#121f7f"),
    new Color("#080d41"),
  ],
  purple: [
    new Color("#f9f4ff"),
    new Color("#f6edff"),
    new Color("#eddbff"),
    new Color("#d8b6ff"),
    new Color("#c392ff"),
    new Color("#ac6dff"),
    new Color("#8f56e4"),
    new Color("#723ecc"),
    new Color("#5627b3"),
    new Color("#371683"),
    new Color("#190a44"),
  ],
  brown: [
    new Color("#faf8f6"),
    new Color("#f7f3f0"),
    new Color("#efe7e0"),
    new Color("#e0cfc1"),
    new Color("#d0b7a3"),
    new Color("#c19d84"),
    new Color("#a5816a"),
    new Color("#856553"),
    new Color("#634a3e"),
    new Color("#423029"),
    new Color("#211815"),
  ],
  silver: [
    new Color("#f9fbfc"),
    new Color("#f5f7fa"),
    new Color("#ebeff4"),
    new Color("#d7e0ea"),
    new Color("#c3d0df"),
    new Color("#afc0d5"),
    new Color("#8d9fb9"),
    new Color("#6d7f9c"),
    new Color("#4d5d7c"),
    new Color("#323d54"),
    new Color("#191e2b"),
  ],
};

type Theme = "dark" | "light";

class WaverColor {
  private color: keyof typeof colors;
  private colorInstance: ColorInstance;

  constructor(color: keyof typeof colors, level?: number) {
    this.color = color;
    this.colorInstance = colors[color][level ?? 5];
  }

  colors(): string[] {
    return colors[this.color].map((c) => c.hex());
  }

  saturated = (theme?: Theme): string => {
    const sOffset = theme === "dark" ? 32 : 16;
    const vOffset = theme === "dark" ? 16 : 32;
    const h = this.colorInstance.hue();
    const s = this.colorInstance.saturationv() - sOffset;
    const v = this.colorInstance.value() - vOffset;
    return Color.hsv(h, s, v).hex();
  };
}

export const gray = (level?: number) => new WaverColor("gray", level);
export const pink = (level?: number) => new WaverColor("pink", level);
export const magenta = (level?: number) => new WaverColor("magenta", level);
export const red = (level?: number) => new WaverColor("red", level);
export const orange = (level?: number) => new WaverColor("orange", level);
export const yellow = (level?: number) => new WaverColor("yellow", level);
export const lightyellow = (level?: number) =>
  new WaverColor("lightyellow", level);
export const lightgreen = (level?: number) =>
  new WaverColor("lightgreen", level);
export const green = (level?: number) => new WaverColor("green", level);
export const cyan = (level?: number) => new WaverColor("cyan", level);
export const lightblue = (level?: number) => new WaverColor("lightblue", level);
export const blue = (level?: number) => new WaverColor("blue", level);
export const purple = (level?: number) => new WaverColor("purple", level);
export const brown = (level?: number) => new WaverColor("brown", level);
export const silver = (level?: number) => new WaverColor("silver", level);
