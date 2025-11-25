import { desaturate, saturate } from "./color";
import { isInteger } from "./utils";
import { ColorFunction, ColorHex, ColorLevel, ColorOptions } from "./types";
import {
  WaverColorArgumentError,
  WaverColorLevelError,
  WaverColorOptionError,
} from "./errors";

/**
 * Regular expression pattern to match valid argument strings
 */
const ARGUMENT_PATTERN = /^\d(\w)*$/;

/**
 * Mapping of option keys to color functions
 */
const COLOR_FUNCTIONS: { [key: string]: ColorFunction } = {
  d: (hex: ColorHex) => desaturate(hex, 0.2),
  s: (hex: ColorHex) => saturate(hex, 0.2),
};

/**
 * Get the color level from options
 * @param options string[]
 * @returns ColorLevel
 * @throws WaverColorOptionError if the color level is not an integer
 * @throws WaverColorLevelError if the color level is out of range
 */
const level = (options: string[]): ColorLevel => {
  if (!isInteger(options[0])) {
    throw new WaverColorOptionError(
      `the first option is color level, must be an integer: ${options[0]}`
    );
  }
  const level = parseInt(options[0], 10);
  if (level <= 0 || level > 10) {
    throw new WaverColorLevelError(
      `this color level is out of range: ${level}`
    );
  }
  return level as ColorLevel;
};

/**
 * Get the color functions from options
 * @param options string[]
 * @returns ColorFunction[]
 * @throws WaverColorOptionError if any option is invalid
 */
const functions = (options: string[]): ColorFunction[] => {
  const keys = options.slice(1);
  return keys.map((key) => {
    if (!Object.keys(COLOR_FUNCTIONS).includes(key)) {
      throw new WaverColorOptionError(`invalid color option: ${key}`);
    }
    return COLOR_FUNCTIONS[key];
  });
};

/**
 * Get color options from argument
 * @param argument string
 * @returns ColorOptions
 * @throws WaverColorArgumentError if the argument is invalid
 */
export const options = (argument: string): ColorOptions => {
  if (!ARGUMENT_PATTERN.test(argument)) {
    throw new WaverColorArgumentError(`invalid argument: ${argument}`);
  }
  const options = argument.split("");
  return {
    level: level(options),
    functions: functions(options),
  };
};
