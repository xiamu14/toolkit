module.exports = {
  extends: "@redchili/eslint-config-airbnb-typescript-prettier",
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  rules: {
    "no-console": 0,
    camelcase: 2,
    "react/destructuring-assignment": 1,
    "react/jsx-props-no-spreading": 0,
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/ban-ts-ignore": "off",
    "import/prefer-default-export": "off",
    "jsx-a11y/label-has-associated-control": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-static-element-interactions": "off",
  },
};
