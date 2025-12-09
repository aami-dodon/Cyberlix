module.exports = {
  extends: ["./eslint.base.cjs"],
  env: {
    node: true,
    es2022: true
  },
  rules: {
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: ["**/*.test.ts", "**/*.spec.ts", "**/test/**"]
      }
    ]
  }
};
