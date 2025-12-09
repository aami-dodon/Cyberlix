module.exports = {
  parser: "@typescript-eslint/parser",
  extends: ["next/core-web-vitals", "plugin:@typescript-eslint/recommended", "prettier"],
  env: {
    browser: true,
    es2022: true
  },
  settings: {
    "import/resolver": {
      node: true,
      typescript: {
        project: "./tsconfig.json"
      }
    },
    react: {
      version: "detect"
    }
  },
  rules: {
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }],
    "import/order": "off",
    "react/react-in-jsx-scope": "off"
  }
};
