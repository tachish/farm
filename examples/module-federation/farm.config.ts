import { defineConfig } from "@farmfe/core";
import federationPlugin from "@farmfe/plugin-module-federation";

export default defineConfig({
  compilation: {
    lazyCompilation: true,
  },
  plugins: [
    // federationPlugin({
    //   name: "federation-test",
    //   exposes: {
    //     "./Button": "./button.js"
    //   }
    // })
  ],
});
