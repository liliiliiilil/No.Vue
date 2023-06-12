import { defineStore } from "pinia";
export const usePermissionsStore = defineStore("permissions", {
  state: () => {
    return {
      modules: [] as any[],
    };
  },
});
