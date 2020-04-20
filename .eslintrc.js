module.exports = {
  extends: ["airbnb", "plugin:react/recommended", "prettier", "prettier/react"],
  env: {
    browser: true,
    jest: true
  },
  rules: {
    "no-console": 0,
    "no-restricted-syntax": 0,
    "import/no-unresolved": "off",
    "react/prefer-stateless-function": "off",
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "comma-dangle": ["error", "never"],
    "react/jsx-one-expression-per-line": 0,
    "react/forbid-prop-types": 0
  },
  parser: "babel-eslint",
  plugins: ["prettier"]
};
