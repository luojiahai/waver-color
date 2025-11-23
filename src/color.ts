import Color, { ColorInstance } from "color";
import { isInteger } from "./utils";

const colors = {
  gray: [
    new Color("#f6f7f8"),
    new Color("#f1f2f3"),
    new Color("#e3e5e7"),
    new Color("#c9ccd0"),
    new Color("#aeb3b9"),
    new Color("#98999a"), // s100 l70
    new Color("#797f87"),
    new Color("#61666d"),
    new Color("#484c53"),
    new Color("#2f3238"),
    new Color("#18191c"),
  ],
  red: [
    // h0
    new Color("#fef3f2"),
    new Color("#feecea"),
    new Color("#fdd7d4"),
    new Color("#fcafaa"),
    new Color("#fa857f"),
    new Color("#ff6666"), // s100 l70
    new Color("#e23d3d"),
    new Color("#c9272c"),
    new Color("#9f1922"),
    new Color("#710e18"),
    new Color("#3b060d"),
  ],
  orange: [
    // h20
    new Color("#fff6ee"),
    new Color("#fff0e3"),
    new Color("#ffe1c7"),
    new Color("#ffc18f"),
    new Color("#ffa058"),
    new Color("#ff9966"), // s100 l70
    new Color("#e95b03"),
    new Color("#bb4100"),
    new Color("#8d2d00"),
    new Color("#5e1b00"),
    new Color("#2f0c00"),
  ],
  yellow: [
    // h40
    new Color("#fffaef"),
    new Color("#fff6e4"),
    new Color("#ffeec9"),
    new Color("#ffdb93"),
    new Color("#ffc65d"),
    new Color("#ffcc66"), // s100 l70
    new Color("#fa9600"),
    new Color("#c26e00"),
    new Color("#8a4a00"),
    new Color("#5b2e00"),
    new Color("#2f1600"),
  ],
  lightyellow: [
    // h60
    new Color("#fffcec"),
    new Color("#fffadf"),
    new Color("#fff5bf"),
    new Color("#ffea80"),
    new Color("#ffdc40"),
    new Color("#ffff66"), // s100 l70
    new Color("#d5a300"),
    new Color("#aa7d00"),
    new Color("#805a00"),
    new Color("#553900"),
    new Color("#2b1b00"),
  ],
  lightgreen: [
    // h100
    new Color("#f7fbef"),
    new Color("#f2f9e4"),
    new Color("#e3f2c8"),
    new Color("#c7e691"),
    new Color("#a9d95b"),
    new Color("#99ff66"), // s100 l70
    new Color("#66b105"),
    new Color("#4e8e04"),
    new Color("#376a03"),
    new Color("#224702"),
    new Color("#102301"),
  ],
  green: [
    // h140
    new Color("#effbf3"),
    new Color("#e4f8ea"),
    new Color("#caf1d6"),
    new Color("#95e4af"),
    new Color("#5fd689"),
    new Color("#66ff99"), // s100 l70
    new Color("#0eb350"),
    new Color("#089043"),
    new Color("#046e35"),
    new Color("#034926"),
    new Color("#012414"),
  ],
  cyan: [
    // h180
    new Color("#edfbfb"),
    new Color("#e2f8f8"),
    new Color("#c4eff0"),
    new Color("#89e1e1"),
    new Color("#4fd3d1"),
    new Color("#66ffff"), // s100 l70
    new Color("#02aaaa"),
    new Color("#018488"),
    new Color("#015f66"),
    new Color("#013d44"),
    new Color("#001d22"),
  ],
  lightblue: [
    // h200
    new Color("#ecfafe"),
    new Color("#dff6fd"),
    new Color("#bfedfa"),
    new Color("#80daf6"),
    new Color("#40c5f1"),
    new Color("#66ccff"), // s100 l70
    new Color("#008ac5"),
    new Color("#00699d"),
    new Color("#004b76"),
    new Color("#002f4f"),
    new Color("#001627"),
  ],
  blue: [
    // h220
    new Color("#f3f5ff"),
    new Color("#ebefff"),
    new Color("#d7dfff"),
    new Color("#b0c1ff"),
    new Color("#88a4ff"),
    new Color("#6699ff"), // s100 l70
    new Color("#4c6de4"),
    new Color("#3752c8"),
    new Color("#2136ac"),
    new Color("#121f7f"),
    new Color("#080d41"),
  ],
  purple: [
    // h260
    new Color("#eee5ff"), // s100 l95
    new Color("#ddccff"), // s100 l90
    new Color("#ccb3ff"), // s100 l85
    new Color("#bb99ff"), // s100 l80
    new Color("#aa80ff"), // s100 l75
    new Color("#9966ff"), // s100 l70
    new Color("#804ce6"), // s75 l60
    new Color("#6633cc"), // s60 l50
    new Color("#5024a8"), // s65 l40
    new Color("#3b1782"), // s70 l30
    new Color("#260d59"), // s75 l20
  ],
  magenta: [
    // h300
    new Color("#ffe5ff"), // s100 l95
    new Color("#ffccff"), // s100 l90
    new Color("#ffb3ff"), // s100 l85
    new Color("#ff99ff"), // s100 l80
    new Color("#ff80ff"), // s100 l75
    new Color("#ff66ff"), // s100 l70
    new Color("#e64ce6"), // s75 l60
    new Color("#cc33cc"), // s60 l50
    new Color("#a824a8"), // s65 l40
    new Color("#821782"), // s70 l30
    new Color("#590d59"), // s75 l20
  ],
  pink: [
    // h340
    new Color("#ffe5ee"), // s100 l95
    new Color("#ffccdd"), // s100 l90
    new Color("#ffb3cc"), // s100 l85
    new Color("#ff99bb"), // s100 l80
    new Color("#ff80aa"), // s100 l75
    new Color("#ff6699"), // s100 l70
    new Color("#e64c7f"), // s75 l60
    new Color("#cc3366"), // s60 l50
    new Color("#a82450"), // s65 l40
    new Color("#82173b"), // s70 l30
    new Color("#590d26"), // s75 l20
  ],
};

type ColorLevel = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
type ColorFunction = (instance: ColorInstance) => ColorInstance;
type ColorOptions = {
  level: ColorLevel;
  functions: ColorFunction[];
};

const saturate = (instance: ColorInstance): ColorInstance => {
  return Color.hsv(
    instance.hue(),
    instance.saturationv(),
    instance.value() - 32
  );
};

const ARGUMENT_PATTERN = /^\d(\_\w)*$/;
const DEFAULT_COLOR_LEVEL = 5;
const COLOR_FUNCTIONS: { [key: string]: ColorFunction } = {
  s: saturate,
};

const getOptions = (argument: string): ColorOptions => {
  if (!ARGUMENT_PATTERN.test(argument)) {
    throw new Error(`invalid argument: ${argument}`);
  }
  const options = argument.split("_");
  return {
    level: getLevel(options),
    functions: getFunctions(options),
  };
};

const getLevel = (options: string[]): ColorLevel => {
  if (!isInteger(options[0])) {
    throw new Error(
      `the first option is color level, must be an integer: ${options[0]}`
    );
  }
  const level = parseInt(options[0], 10);
  if (level < 0 || level >= 11) {
    throw new Error(`this color level is out of range: ${level}`);
  }
  return level as ColorLevel;
};

const getFunctions = (options: string[]): ColorFunction[] => {
  const keys = options.slice(1);
  return keys.map((key) => {
    if (!Object.keys(COLOR_FUNCTIONS).includes(key)) {
      throw new Error(`invalid color option: ${key}`);
    }
    return COLOR_FUNCTIONS[key];
  });
};

class WaverColor {
  private instances: ColorInstance[];
  private instance: ColorInstance;

  constructor(instances: ColorInstance[]) {
    this.instances = instances;
    this.instance = instances[DEFAULT_COLOR_LEVEL];
  }

  public colors = (): ColorInstance[] => {
    return this.instances;
  };

  public get = (argument?: string): ColorInstance => {
    if (argument) {
      const { level, functions } = getOptions(argument);
      this.instance = this.instances[level];
      functions.forEach((fn) => {
        this.instance = fn(this.instance);
      });
    }
    return this.instance;
  };
}

export const gray = new WaverColor(colors.gray);
export const red = new WaverColor(colors.red);
export const orange = new WaverColor(colors.orange);
export const yellow = new WaverColor(colors.yellow);
export const lightyellow = new WaverColor(colors.lightyellow);
export const lightgreen = new WaverColor(colors.lightgreen);
export const green = new WaverColor(colors.green);
export const cyan = new WaverColor(colors.cyan);
export const lightblue = new WaverColor(colors.lightblue);
export const blue = new WaverColor(colors.blue);
export const purple = new WaverColor(colors.purple);
export const magenta = new WaverColor(colors.magenta);
export const pink = new WaverColor(colors.pink);
