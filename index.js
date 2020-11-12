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
  extends: ["airbnb-typescript", "plugin:@typescript-eslint/eslint-recommended", "prettier", "prettier/@typescript-eslint", "prettier/react",],
  plugins: ["@typescript-eslint", "react-hooks", "react", "prettier"],
  parser: "@typescript-eslint/parser",
  rules: {
    "@typescript-eslint/dot-notation": 0,
    "@typescript-eslint/no-implied-eval": 0,
    "@typescript-eslint/no-throw-literal": 0,
    "class-methods-use-this": 0,
    "react-hooks/rules-of-hooks": 2,
    "react-hooks/exhaustive-deps": ["error", { "enableDangerousAutofixThisMayCauseInfiniteLoops": true }],
    "import/named": 2,
    "import/prefer-default-export": 0,
    "import/extensions": 0,
    "react/prop-types": 0,
    "react/jsx-boolean-value": 0,
    "react/jsx-wrap-multilines": 0,
    "react/no-array-index-key": 1,
    "react/no-unused-prop-types": 0,
    "no-param-reassign": 1,
    "quotes": ["error", "single"],
    "jsx-quotes": ["error", "prefer-double"],
    "sort-keys": 0,
    "max-classes-per-file": 0,
    "no-underscore-dangle": 0,
    "lines-between-class-members": ["error", "always", { "exceptAfterSingleLine": true }],
    "@typescript-eslint/no-unused-vars": 1,
    "@typescript-eslint/array-type": ["error", { default: "array" }],
    "@typescript-eslint/no-namespace": 0,
    "@typescript-eslint/no-unused-expressions": 2,
    "@typescript-eslint/naming-convention": [
      "error",
      {
        "selector": "interface",
        "format": ["PascalCase"],
        "custom": {
          "regex": "^I[A-Z]",
          "match": false
        }
      }
    ],
    "prettier/prettier": ["error", {
      "arrowParens": "avoid"
    }]
  }
};
