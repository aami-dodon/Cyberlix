module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/?(*.)+(spec|test).ts"],
  moduleNameMapper: {
    "^@cynalitx/types$": "<rootDir>/../../packages/types/src",
    "^@cynalitx/utils$": "<rootDir>/../../packages/utils/src"
  }
};
