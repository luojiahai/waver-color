/**
 * Regular expression pattern to match integer strings
 */
const INTEGER_PATTERN = /^-?\d+$/;

/**
 * Check if a string represents an integer
 * @param value string
 * @returns boolean
 */
export const isInteger = (value: string): boolean => {
  return INTEGER_PATTERN.test(value);
};
