export default {
  state: {
    isMenuOpen: true,
    user: {
      name: "John Doe",
      email: "john.doe@temp.mail",
      admin: true,
    },
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
      state.isMenuOpen =
        typeof payload === "boolean" ? payload : !state.isMenuOpen;
    },
  },
  actions: {
    toggleMenu(context, payload) {
      context.commit("toggleMenu", payload);
    },
  },
};
