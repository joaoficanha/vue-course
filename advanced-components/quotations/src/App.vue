<template>
	<div id="app">
    <span>
      <button @click="changeComponent('Quotations')">Quotations</button>
      <button @click="changeComponent('About')">About</button>
    </span>
    <keep-alive>
      <component :is="component"/>
    </keep-alive>
	</div>
</template>

<script>
import Quotations from "./components/Quotations";
import About from "./components/About";

export default {
  components: { Quotations, About },
  data() {
    return {
      component: "Quotations",
    };
  },
  methods: {
    changeComponent(component) {
      this.component = component;
    },
  },
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 1.6rem;
}

button {
  outline: none;
  padding: 5px 15px 10px;
  margin: 10px 5px;
  border-radius: 3px;
  font-size: 2rem;
  font-weight: 300;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
