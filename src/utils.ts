const INTEGER_PATTERN = /^-?\d+$/;

export const isInteger = (value: string): boolean => {
  return INTEGER_PATTERN.test(value);
};
