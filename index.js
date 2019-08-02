module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "airbnb",
    "plugin:prettier/recommended",
    "prettier",
    "prettier/@typescript-eslint",
    "prettier/react"
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["@typescript-eslint", "react-hooks", "prettier", "react"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    "array-type": [1, "array"],
    "interface-name": [2, "never-prefix"],
    "variable-name": [2, "ban-keywords", "check-format", "allow-pascal-case"],
    "no-namespace": 0,
    "object-literal-sort-keys": 0,
    "ordered-imports": 1,
    "no-unused-variable": 1,
    "no-unused-expression": 1,
    quotemark: [1, "single", "jsx-double"],
    "react-hooks/rules-of-hooks": 2,
    "react-hooks/exhaustive-deps": 2,
    "prettier/prettier": 2
  }
};
