<template>
  <div>
    <h1>{{ title }}</h1>
    <button @click="updateText">Update Text</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Vue CLI",
    };
  },
  methods: {
    updateText() {
      this.title += "!";
    },
  },
};
</script>

<style>
#app {
  background-color: darkblue;
  color: #fff;
}
</style>
