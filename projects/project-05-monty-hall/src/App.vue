<template>
  <div id="app">
    <h1>Mounty Hall Problem</h1>
    <Door />
  </div>
</template>

<script>
import Door from "./components/DoorComponent.vue";

export default {
  name: "App",
  components: { Door },
};
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
