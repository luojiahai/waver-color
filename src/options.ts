import { ColorInstance } from "color";
import { desaturate, saturate } from "./color";
import { isInteger } from "./utils";
import { ColorFunction, ColorLevel, ColorOptions } from "./types";

const ARGUMENT_PATTERN = /^\d(\w)*$/;
const COLOR_FUNCTIONS: { [key: string]: ColorFunction } = {
  d: (instance: ColorInstance) => desaturate(instance, 0.3),
  s: (instance: ColorInstance) => saturate(instance, 0.3),
};

const level = (options: string[]): ColorLevel => {
  if (!isInteger(options[0])) {
    throw new Error(
      `the first option is color level, must be an integer: ${options[0]}`
    );
  }
  const level = parseInt(options[0], 10);
  if (level <= 0 || level > 10) {
    throw new Error(`this color level is out of range: ${level}`);
  }
  return level as ColorLevel;
};

const functions = (options: string[]): ColorFunction[] => {
  const keys = options.slice(1);
  return keys.map((key) => {
    if (!Object.keys(COLOR_FUNCTIONS).includes(key)) {
      throw new Error(`invalid color option: ${key}`);
    }
    return COLOR_FUNCTIONS[key];
  });
};

export const options = (argument: string): ColorOptions => {
  if (!ARGUMENT_PATTERN.test(argument)) {
    throw new Error(`invalid argument: ${argument}`);
  }
  const options = argument.split("");
  return {
    level: level(options),
    functions: functions(options),
  };
};
