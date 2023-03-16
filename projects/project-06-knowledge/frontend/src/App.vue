<template>
  <div id="app" :class="{ 'hide-menu': !isMenuOpen || !user }">
    <app-bar title="Knowledge Base" />
    <app-nav-bar v-if="user" />
    <app-loading v-if="isValidatingToken" />
    <app-content v-else />
    <app-footer />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { userKey } from "./global";

import AppBar from "./components/layout/AppBar.vue";
import NavBar from "./components/layout/NavBar.vue";
import Footer from "./components/layout/Footer.vue";
import Content from "./components/layout/Content.vue";
import Loading from "./components/layout/Loading.vue";

export default {
  name: "App",
  components: {
    "app-bar": AppBar,
    "app-nav-bar": NavBar,
    "app-content": Content,
    "app-footer": Footer,
    "app-loading": Loading,
  },
  data() {
    return {
      isValidatingToken: true,
    };
  },
  computed: {
    ...mapGetters(["isMenuOpen", "user"]),
  },
  methods: {
    ...mapActions(["setUser", "toggleMenu"]),
    async validateToken() {
      this.isValidatingToken = true;
      const user = localStorage.getItem(userKey);
      const parsedUser = JSON.parse(user);
      this.setUser(null);

      if (!parsedUser) {
        this.isValidatingToken = false;
        return this.$router.push({ path: "/login" });
      }

      const response = await this.$http.post("/auth/validateToken", parsedUser);

      if (response.data) {
        this.setUser(parsedUser);

        if (this.$mq === "xs" || this.$mq === "sm") {
          this.toggleMenu(false);
        }
      } else {
        localStorage.removeItem(userKey);
        this.$router.push({ path: "/login" });
      }

      this.isValidatingToken = false;
    },
  },
  created() {
    this.validateToken();
  },
};
</script>

<style>
* {
  font-family: "Lato", sans-serif;
}

body {
  margin: 0;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  display: grid;
  grid-template-rows: 60px 1fr 40px;
  grid-template-columns: 300px 1fr;
  grid-template-areas:
    "header header"
    "menu content"
    "menu footer";
}

#app.hide-menu {
  grid-template-areas:
    "header header"
    "content content"
    "footer footer";
}
</style>
