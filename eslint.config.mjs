import typescript from "typescript-eslint";

export default [
  ...typescript.configs.recommended.map((config) => ({
    ...config,
    files: ["**/*.ts"],
  })),
];
