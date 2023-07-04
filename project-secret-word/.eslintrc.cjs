module.exports = {
  "env": {
    "es2021": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "next/core-web-vitals"
  ],
  "parserOptions": {
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "rules": {
    "semi": [
      "error",
      "always"
    ],
    "quotes": [
      "error",
      "double"
    ],
    "no-undef": "off",
    "no-unused-vars": "off"
  }
};