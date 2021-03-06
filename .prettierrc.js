module.exports = {
  printWidth: 80,
  trailingComma: "es5",
  tabWidth: 2,
  semi: true,
  singleQuote: false,
  jsxSingleQuote: false,
  endOfLine: "lf",
  bracketSpacing: true,
  bracketSameLine: true,

  overrides: [
    {
      files: ["*.html"],
      options: {
        tabWidth: 2,
      },
    },
  ],
};
