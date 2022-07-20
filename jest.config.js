module.exports = {
  testMatch: ["**/?(*.)+(spec).[jt]s?(x)"],
  preset: "@vue/cli-plugin-unit-jest",
  transform: {
    ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$":
      "jest-transform-stub",
  },
  collectCoverage: false,
  collectCoverageFrom: ["src/**/*.{js,vue}"],
  testEnvironment: "jsdom",
  testEnvironmentOptions: {
    customExportConditions: ["node", "node-addons"],
  },
  moduleFileExtensions: ["js", "json", "vue", "ts"],
};
