export default [
  {
    path: "/permissions",
    component: () => import("@/permissions/views/index.vue"),
    redirect: "/permissions/menu",
    meta: {
      label: "权限管理",
      icon: "permissions",
      code: "permissions",
    },
    children: [
      {
        path: "/permissions/menu",
        component: () => import("@/permissions/views/menu.vue"),
        meta: {
          label: "菜单管理",
          icon: "menu",
          code: "menu",
        },
      },
      {
        path: "/permissions/module",
        component: () => import("@/permissions/views/module.vue"),
        meta: {
          label: "模块管理",
          icon: "module",
          code: "module",
        },
      },
    ],
  },
];
