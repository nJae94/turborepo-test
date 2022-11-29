module.exports = {
  useTabs: false,
  tabWidth: 2,
  printWidth: 80,
  trailingComma: "all",
  arrowParens: "always",
  endOfLine: "lf",
  quoteProps: "as-needed",
  htmlWhitespaceSensitivity: "css",
  proseWrap: "preserve",
  semi: true,
  singleQuote: true,
  jsxSingleQuote: false,
  bracketSpacing: true,
  bracketSameLine: false,
  requirePragma: false,
  insertPragma: false,
  importOrder: [
    "<THIRD_PARTY_MODULES>",
    "^@/(.*)$",
    "^[./]", // Other imports
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  overrides: [
    {
      files: ["*.ts"],
      options: { parser: "typescript" },
    },
  ],
};
