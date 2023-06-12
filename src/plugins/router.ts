import {
  createRouter,
  createWebHashHistory,
  NavigationGuardNext,
  RouteLocationNormalized,
} from "vue-router";
import { InitializeRouting } from "@/global/service";

// 创建路由
const router = createRouter({
  history: createWebHashHistory(),
  routes: [],
});

/** @鉴权 路由鉴权 */
const inspection = (to: RouteLocationNormalized, next: NavigationGuardNext) => {
  switch (to.path) {
    case "/404":
      {
        next();
      }
      break;
    case "/login":
      {
        sessionStorage.clear();
        next();
      }
      break;
    default:
      {
        if (!sessionStorage.getItem("code")) {
          /**
           * @token
           * 开发环境视情况固定code  不需要可注释
           */
          if (import.meta.env.MODE === "development") {
            sessionStorage.setItem("code", "development");
            initcollector(to);
            return next();
          }
          clearcollector();
          return next("/login");
        }
        initcollector(to);
        next();
      }
      break;
  }
};

/** @收集节点 */
const initcollector = (route: any) => {
  const store = useGlobalStore();
  const code = route.meta.code;
  if (code) {
    store.bookmark.set("active", code);
    store.bookmark.set(code, route);
  }
};

/** @清空节点 */
const clearcollector = () => {
  const store = useGlobalStore();
  store.bookmark = new Map([["active", ""]]);
};

router.beforeEach((to, from, next) => {
  const store = useGlobalStore();
  if (!store.authority.size) {
    InitializeRouting(router).then(() => {
      router.replace(to.path);
    });
  } else {
    inspection(to, next);
  }
});

export default router;
