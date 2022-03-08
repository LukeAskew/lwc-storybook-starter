export default {
  preset: "@lwc/jest-preset",
  moduleNameMapper: {
    // Resolve lwc modules
    "^(my)/(.+)$": "<rootDir>/src/modules/$1/$2/$2",

    // Resolve helper fns
    "~/.jest/helpers": "<rootDir>/.jest/helpers.ts",
  },
  transformIgnorePatterns: [
    // Transform esm modules that Jest can't parse
    "node_modules/(?!lit-html)",
  ],
};
