import path from "path";
import vue from "@vitejs/plugin-vue";
import vueI18n from "@intlify/vite-plugin-vue-i18n";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import postcsspxtoviewport8plugin from "postcss-px-to-viewport-8-plugin";
// import {
//   ElementPlusResolver,
//   VantResolver,
// } from "unplugin-vue-components/resolvers";

export default (env) => {
  return {
    server: {
      host: true,
      open: true,
      base: "/",
      proxy: {
        "^/api": {
          target: "http://www.google.com",
          changeOrigin: true,
          // rewrite: (path) => path.replace(/^\/posts/, ''),
        },
      },
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "../src/modules"),
        "#": path.resolve(__dirname, "../src/components"),
        assets: path.resolve(__dirname, "../src/assets"),
        utils: path.resolve(__dirname, "../src/utils"),
      },
      extensions: [".vue", ".ts", ".js", ".json"],
    },
    Csspxtoviewport: postcsspxtoviewport8plugin({
      unitToConvert: "px",
      viewportWidth: 750,
      selectorBlackList: ["ignore-"],
      exclude: [/node_modules/],
    }),
    VUE: vue(),
    VueI18n: vueI18n({
      runtimeOnly: false,
      include: path.resolve(__dirname, "../src/**/**/locales/**"),
    }),
    AutoImport: AutoImport({
      include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/, /\.md$/],
      imports: ["vue", "vue-router"],
      dirs: ["./src/plugins", "./src/modules/*/store.ts"],
      dts: "./.plugins.d.ts",
      resolvers: [
        // ElementPlusResolver(), VantResolver()
      ],
      eslintrc: {
        enabled: true,
        filepath: "./.plugins.json",
        globalsPropValue: true,
      },
    }),
    Components: Components({
      dts: "./.components.d.ts",
      dirs: ["src/components"],
      resolvers: [
        // ElementPlusResolver(), VantResolver()
      ],
    }),
  };
};
