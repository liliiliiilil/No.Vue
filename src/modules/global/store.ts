import { defineStore } from "pinia";
export const useGlobalStore = defineStore("global", {
  state: () => {
    return {
      authority: new Map() as Map<string, Set<string>>,
    };
  },
  getters: {},
  actions: {
    setAuthority(authority: Map<string, Set<string>>) {
      this.authority = authority;
    },
  },
});
