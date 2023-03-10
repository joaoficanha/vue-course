import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";

import "./plugins/vuetify";

Vue.config.productionTip = false;

Vue.filter("currency", function(value) {
  return `$${value.toLocaleString()}`;
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
