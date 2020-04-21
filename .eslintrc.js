module.exports = {
  extends: ["airbnb", "plugin:react/recommended", "prettier", "prettier/react"],
  env: {
    browser: true,
    jest: true,
  },
  rules: {
    "no-restricted-syntax": 0,
    "import/no-unresolved": "off",
    "react/prefer-stateless-function": "error",
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "react/forbid-prop-types": 0,
  },
  parser: "babel-eslint",
  plugins: ["prettier"],
};
