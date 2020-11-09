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
  extends: ["plugin:@typescript-eslint/eslint-recommended", "airbnb-typescript", "prettier/@typescript-eslint", "plugin:prettier/recommended"],
  plugins: ["@typescript-eslint", "react-hooks", "prettier", "react"],
  parser: "@typescript-eslint/parser",
  rules: {
    "react-hooks/rules-of-hooks": 2,
    "react-hooks/exhaustive-deps": 2,
    "import/named": 2,
    "import/prefer-default-export": 0,
    "import/extensions": ["error", {
      "ts": "never",
      "tsx": "never"
    }],
    "react/prop-types": 0,
    "react/jsx-boolean-value": 0,
    "no-param-reassign": 1,
    "quotes": ["error", "single"],
    "jsx-quotes": ["error", "prefer-double"],
    "sort-keys": 0,
    "max-classes-per-file": 0,
    "class-methods-use-this": 0,
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
