module.exports = {
  root: true,
  extends: [
    "plugin:@typescript-eslint/recommended",
    "next/core-web-vitals",
    "next",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
  rules: {
    "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "@typescript-eslint/no-explicit-any": "off",
    "react/prop-types": "off",
  },
};
