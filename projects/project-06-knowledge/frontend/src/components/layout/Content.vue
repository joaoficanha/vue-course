<template>
  <v-main class="content">
    <router-view></router-view>
  </v-main>
</template>

<script>
export default {
  name: "app-content",
};
</script>

<style>
.content {
  background-color: #efefef;
}

.content > div {
  padding: 8px;
}
</style>
