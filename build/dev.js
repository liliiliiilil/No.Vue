import merge from "./config";

export default ({ env }) => {
  const {
    server,
    resolve,
    Csspxtoviewport,
    VUE,
    VueI18n,
    AutoImport,
    Components,
  } = merge({ env });
  return {
    server,
    resolve,
    plugins: [VUE, VueI18n, AutoImport, Components],
    css: {
      postcss: {
        plugins: [Csspxtoviewport],
      },
    },
  };
};
