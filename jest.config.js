module.exports = {
  roots: ["<rootDir>/src"],
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest",
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  setupFiles: ["<rootDir>/src/setupTests.ts"],
};
