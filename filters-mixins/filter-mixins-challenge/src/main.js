import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.filter("countCharacters", function(value) {
  const strArr = value.split(" ");
  const newArr = strArr.map((item) => {
    return `${item} (${item.length})`;
  });

  return newArr.join(" ");
});

new Vue({
  render: (h) => h(App),
}).$mount("#app");
