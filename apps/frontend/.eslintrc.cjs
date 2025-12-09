module.exports = {
  root: true,
  extends: [require.resolve("@cynalitx/config/eslint.next.cjs")],
  parserOptions: {
    project: "./tsconfig.json"
  }
};
