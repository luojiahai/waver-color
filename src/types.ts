import { ColorInstance } from "color";

export type ColorLevel = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
export type ColorFunction = (instance: ColorInstance) => ColorInstance;
export type ColorOptions = {
  level: ColorLevel;
  functions: ColorFunction[];
};
