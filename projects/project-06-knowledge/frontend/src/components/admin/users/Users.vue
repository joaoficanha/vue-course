<template>
  <b-container fluid>
    <app-users-form :user="user" :mode="mode" :reset="reset" />
    <app-users-table
      :users="users"
      :changeMode="changeMode"
      :loadUser="loadUser"
    />
  </b-container>
</template>

<script>
import UsersForm from "./UsersForm.vue";
import UsersTable from "./UsersTable.vue";

export default {
  name: "app-admin-users",
  components: { "app-users-form": UsersForm, "app-users-table": UsersTable },
  data() {
    return {
      user: {},
      users: [],
      mode: "save",
    };
  },
  methods: {
    fetchUsers() {
      this.$http.get("/users").then((response) => {
        this.users = response.data;
      });
    },
    changeMode(mode) {
      this.mode = mode;
    },
    loadUser(user, mode = "save") {
      this.mode = mode;
      this.user = { ...user };
    },
    reset() {
      this.mode = "save";
      this.user = {};
      this.fetchUsers();
    },
  },
  mounted() {
    this.fetchUsers();
  },
};
</script>
