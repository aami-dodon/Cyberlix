module.exports = {
  root: true,
  extends: [require.resolve("@cynalitx/config/eslint.node.cjs")],
  parserOptions: {
    project: "./tsconfig.json"
  }
};
