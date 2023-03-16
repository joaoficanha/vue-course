import axios from "axios";

export default {
  state: {
    isMenuOpen: false,
    user: null,
  },
  getters: {
    isMenuOpen(state) {
      return state.isMenuOpen;
    },
    user(state) {
      return state.user;
    },
  },
  mutations: {
    toggleMenu(state, payload) {
      if (!state.user) {
        state.isMenuOpen = false;
        return;
      }

      state.isMenuOpen =
        typeof payload === "boolean" ? payload : !state.isMenuOpen;
    },
    setUser(state, payload) {
      state.user = payload;

      if (payload) {
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${payload.token}`;
        state.isMenuOpen = true;
      } else {
        delete axios.defaults.headers.common["Authorization"];
        state.isMenuOpen = false;
      }
    },
  },
  actions: {
    toggleMenu(context, payload) {
      context.commit("toggleMenu", payload);
    },
    setUser(context, payload) {
      context.commit("setUser", payload);
    },
  },
};
