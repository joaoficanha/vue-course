import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.filter("revert", function(value) {
  return value
    .split("")
    .reverse()
    .join("");
});

Vue.mixin({
  data() {
    return {
      global: "Global Mixin",
    };
  },
  created() {
    console.log("Global mixin created.");
  },
});

new Vue({
  render: (h) => h(App),
  created() {
    console.log("Vue instance created.");
  },
}).$mount("#app");
