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
  extends: ["airbnb-typescript", "plugin:@typescript-eslint/eslint-recommended", "prettier", "prettier/@typescript-eslint", "prettier/react"],
  plugins: ["@typescript-eslint", "prettier"],
  parser: "@typescript-eslint/parser",
  rules: {
    "@typescript-eslint/dot-notation": 0,
    "@typescript-eslint/no-implied-eval": 0,
    "@typescript-eslint/no-throw-literal": 0,
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        "vars": "all",
        "varsIgnorePattern": "^(query|mutation|fragment|_)$"
      }
    ],
    "@typescript-eslint/no-use-before-define": 0,
    "class-methods-use-this": 0,
    "react-hooks/rules-of-hooks": 2,
    "react-hooks/exhaustive-deps": ["error", { "enableDangerousAutofixThisMayCauseInfiniteLoops": true }],
    "import/named": 2,
    "import/no-named-as-default": 0,
    "import/prefer-default-export": 0,
    "import/extensions": 0,
    "react/prop-types": 0,
    "react/jsx-boolean-value": 0,
    "react/jsx-wrap-multilines": 0,
    "react/no-array-index-key": 1,
    "react/no-unused-prop-types": 0,
    "react/jsx-props-no-spreading": 0,
    "react/require-default-props": 0,
    "react/sort-comp": 0,
    "react/state-in-constructor": 0,
    "no-param-reassign": 1,
    "quotes": ["error", "single"],
    "jsx-quotes": ["error", "prefer-double"],
    "sort-keys": 0,
    "max-classes-per-file": 0,
    "no-underscore-dangle": 0,
    "lines-between-class-members": ["error", "always", { "exceptAfterSingleLine": true }],
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
