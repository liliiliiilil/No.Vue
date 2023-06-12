export default [
  {
    path: "/system",
    redirect: "/system/set",
    component: () => import("@/system/views/index.vue"),
    meta: {
      label: "系统管理",
      icon: "system",
      code: "system",
    },
    children: [
      {
        path: "/system",
        component: () => import("@/system/views/set.vue"),
        meta: {
          label: "系统设置",
          icon: "set",
          code: "set",
        },
      },
      {
        path: "/system/log",
        component: () => import("@/system/views/log.vue"),
        meta: {
          label: "系统日志",
          icon: "log",
          code: "log",
        },
      },
    ],
  },
];
