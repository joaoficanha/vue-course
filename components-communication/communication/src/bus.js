import Vue from "vue";

export default new Vue({
  methods: {
    changeAge(age) {
      this.$emit("ageChanged", age);
    },
    onAgeChange(callback) {
      this.$on("ageChanged", callback);
    },
  },
});
