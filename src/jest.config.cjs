const {defaults} = require('jest-config')
module.exports = {
  // tells where to look for test files
  roots: [
    "../src/__tests__",
    "../src"
  ],
  modulePaths: [
    "./",
    "../sd-project",
    "../src/components",
    "../backend/models",
    "../backend/routes",
  ],
  setupFilesAfterEnv: [
    "./setupTests"
  ], 
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|js?|tsx?|ts?|mjs?)$",
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.mjs$": "babel-jest",
  },
  testPathIgnorePatterns: ["/build/", "/node_modules/"],
  moduleFileExtensions: [...defaults.moduleFileExtensions, "js", "jsx", "mjs"],
  collectCoverage: true,
  coverageDirectory: "../coverage",
}
  