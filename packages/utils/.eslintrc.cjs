module.exports = {
  root: true,
  extends: [require.resolve("@cynalitx/config/eslint.base.cjs")],
  parserOptions: {
    project: "./tsconfig.json"
  }
};
