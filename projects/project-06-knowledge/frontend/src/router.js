import Vue from "vue";
import Router from "vue-router";

import Home from "./components/home/Home.vue";
import Admin from "./components/admin/Admin.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    { path: "/", component: Home },
    { path: "/admin", component: Admin },
  ],
});
