import "font-awesome/css/font-awesome.css";

import Vue from "vue";
import App from "./App";

import store from "./store/store";
import router from "./router";

import "./plugins/axios";
import "./plugins/bootstrap";
import "./plugins/messages";
import "./plugins/mq";

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
