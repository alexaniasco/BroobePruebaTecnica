module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      ["nativewind/babel", { jsxImportSource: "nativewind" }],
    ],
    plugins: ["react-native-reanimated/plugin"],
    env: {
      production: {
        plugins: ["react-native-paper/babel"],
      },
    },
  };
};
