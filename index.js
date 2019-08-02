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
    "interface-name": [true, "never-prefix"],
    "variable-name": [
      true,
      "ban-keywords",
      "check-format",
      "allow-pascal-case"
    ],
    "no-namespace": false,
    "object-literal-sort-keys": false,
    "ordered-imports": true,
    "no-unused-variable": true,
    "no-unused-expression": true,
    quotemark: [true, "single", "jsx-double"],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    "prettier/prettier": "error"
  }
};
