export default [
  {
    path: "/role",
    component: () => import("@/role/views/index.vue"),
    meta: {
      label: "角色管理",
      icon: "role",
      code: "role",
    },
  },
];
