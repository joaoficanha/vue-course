import Vue from "vue";
import Router from "vue-router";

import Home from "./components/home/Home.vue";
import Admin from "./components/admin/Admin.vue";
import Login from "./components/auth/Login.vue";
import ArticlesByCategory from "./components/articles/ArticlesByCategory.vue";
import ArticleById from "./components/articles/ArticleById.vue";
import { userKey } from "./global";

Vue.use(Router);

const routes = [
  {
    name: "home",
    path: "/",
    component: Home,
  },
  {
    name: "admin",
    path: "/admin",
    component: Admin,
    meta: { requiresAdmin: true },
  },
  {
    name: "login",
    path: "/login",
    component: Login,
  },
  {
    name: "articlesByCategory",
    path: "/categories/:id/articles",
    component: ArticlesByCategory,
  },
  {
    name: "articleById",
    path: "/articles/:id",
    component: ArticleById,
  },
];

const router = new Router({
  mode: "history",
  routes,
});

router.beforeEach((to, from, next) => {
  const user = localStorage.getItem(userKey);

  if (to.matched.some((record) => record.meta.requiresAdmin)) {
    const parsedUser = JSON.parse(user);
    if (parsedUser && parsedUser.admin) {
      next();
    } else {
      next({ path: "/" });
    }
  } else {
    next();
  }
});

export default router;
