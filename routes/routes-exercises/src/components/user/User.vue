<template>
    <div class="user">
        <h1>User</h1>
        <hr>
        <router-view></router-view>
        <button success @click="goToHome">Go back to Home</button>
    </div>
</template>

<script>
export default {
  methods: {
    goToHome() {
      // this.$router.push('/')
      // this.$router.push({
      //   path: "/",
      // });
      this.$router.push({
        name: "home",
      });
    },
  },
};
</script>
