export {};
declare global {
  interface ST {
    lost: () => {};
  }
  interface SV {
    lost: {
      submit: () => Promise<string>;
    };
  }
}
