import Vue from "vue";
import Toasted from "vue-toasted";

Vue.use(Toasted, {
  iconPack: "fontawesome",
  duration: 3000,
});

Vue.toasted.register(
  "defaultSuccess",
  (payload) =>
    !payload.message ? "Action Performed Successfully." : payload.message,
  { type: "success", icon: "check" }
);

Vue.toasted.register(
  "defaultError",
  (payload) =>
    !payload.message ? "Oops.. Unexpected Error." : payload.message,
  { type: "error", icon: "times" }
);
