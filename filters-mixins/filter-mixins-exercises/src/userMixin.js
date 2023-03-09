export default {
  computed: {
    loggedUser() {
      return "John Doe";
    },
  },
  created() {
    console.log("UserMixin created.");
  },
};
