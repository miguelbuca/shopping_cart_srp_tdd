module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    "@babel/preset-typescript",
  ],
  plugins: [
      [
        "module-resolver",
        {
          alias: {
            "@assets": "./src/assets",
            "@components": "./src/components",
            "@hooks": "./src/hooks",
            "@utils": "./src/utils",
            "@interfaces": "./src/interfaces",
            "@types": "./src/types",
          },
        },
      ],
    ],
};
