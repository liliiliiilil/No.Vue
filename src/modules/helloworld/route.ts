export default [
  {
    path: "/helloworld",
    label: "你好",
    component: () => import("@/helloworld/views/index.vue"),
  },
];
