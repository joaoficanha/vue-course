import Vue from "vue";
import Router from "vue-router";
import Home from "./components/Home";
// import User from "./components/user/User";
// import UserList from "./components/user/UserList";
// import UserDetail from "./components/user/UserDetail";
// import UserEdit from "./components/user/UserEdit";
import Menu from "./components/template/Menu";
import MenuPT from "./components/template/MenuPT";

Vue.use(Router);

const User = () => import(/* webpackChunkName: "user" */'./components/user/User');
const UserList = () => import(/* webpackChunkName: "user" */'./components/user/UserList');
const UserDetail = () => import(/* webpackChunkName: "user" */'./components/user/UserDetail');
const UserEdit = () => import(/* webpackChunkName: "user" */'./components/user/UserEdit');

const router = new Router({
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;

    if (to.hash) return { selector: to.hash };

    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: "/",
      // component: Home,
      components: {
        default: Home,
        layout: Menu,
      },
      name: "home",
    },
    {
      path: "/user",
      // component: User,
      components: {
        default: User,
        layout: MenuPT,
      },
      props: true,
      children: [
        {
          path: "",
          component: UserList,
        },
        {
          path: ":id",
          component: UserDetail,
          beforeEnter: (to, from, next) => {
            console.log("beforeEnter - UserDetail");
            next();
          },
          props: true,
        },
        {
          path: ":id/edit",
          component: UserEdit,
          props: true,
          name: "userEdit",
        },
      ],
    },
    {
      path: "/redirect",
      redirect: "/user",
    },
    {
      path: "*",
      redirect: "/",
    },
  ],
});

router.beforeEach((to, from, next) => {
  console.log("beforeEach - Global");
  next();
});

export default router;
