module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true
  },
  extends: ["airbnb-base", "plugin:prettier/recommended"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["@typescript-eslint"],
  rules: {
    "prettier/prettier": "error",
    "import/extensions": ["error", "ignorePackages", { ts: "never" }],
    "import/prefer-default-export": "off"
  },
  settings: {
    "import/resolver": {
      alias: {
        map: [["@src", "./src"]],
        extensions: [".ts"]
      }
    },
    "import/parsers": {
      "@typescript-eslint/parser": [".ts"]
    }
  }
};
