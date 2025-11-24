import { ColorInstance } from "color";
import { COLORS } from "./color";
import { options } from "./options";
import { ColorLevel } from "./types";

const DEFAULT_COLOR_LEVEL = 5;

class WaverColor {
  private instances: ColorInstance[];

  constructor(instances: ColorInstance[]) {
    this.instances = instances;
  }

  public color = (level?: ColorLevel): ColorInstance => {
    return this.instances[(level ?? DEFAULT_COLOR_LEVEL) - 1];
  };

  public colors = (): ColorInstance[] => {
    return this.instances;
  };

  public get = (argument?: string): ColorInstance => {
    let instance = this.color();
    if (argument) {
      const { level, functions } = options(argument);
      instance = this.color(level);
      functions.forEach((fn) => {
        instance = fn(instance);
      });
    }
    return instance;
  };
}

export const gray = new WaverColor(COLORS.gray);
export const red = new WaverColor(COLORS.red);
export const orange = new WaverColor(COLORS.orange);
export const yellow = new WaverColor(COLORS.yellow);
export const lightyellow = new WaverColor(COLORS.lightyellow);
export const lightgreen = new WaverColor(COLORS.lightgreen);
export const green = new WaverColor(COLORS.green);
export const cyan = new WaverColor(COLORS.cyan);
export const lightblue = new WaverColor(COLORS.lightblue);
export const blue = new WaverColor(COLORS.blue);
export const purple = new WaverColor(COLORS.purple);
export const magenta = new WaverColor(COLORS.magenta);
export const pink = new WaverColor(COLORS.pink);
