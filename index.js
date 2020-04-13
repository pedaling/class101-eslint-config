module.exports = {
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
  rules: {
    "react-hooks/rules-of-hooks": 2,
    "react-hooks/exhaustive-deps": 2
  }
};
