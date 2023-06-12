export default [
  {
    path: "/user",
    component: () => import("@/user/views/index.vue"),
    meta: {
      label: "用户管理",
      icon: "user",
      code: "user",
    },
  },
];
