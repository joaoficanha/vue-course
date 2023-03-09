<template>
	<div id="app">
		<h1>Directives (Challenge)</h1>
		<hr>
		<!-- Exercício -->
		<!-- Escreva uma diretiva que funcione com o v-on (escute eventos) -->
		<button 
			v-local-on:click="showWarning"	
			v-local-on:mouseenter="changeButtonColor"
			v-local-on:mouseleave="changeButtonColor"
		>
		Test custom v-on directive
	</button>
	</div>
</template>

<script>
export default {
  directives: {
    "local-on": {
      bind(el, binding) {
        el.addEventListener(binding.arg, binding.value);
      },
      unbind(el, binding) {
        el.removeEventListener(binding.arg, binding.value);
      },
    },
  },
  methods: {
    showWarning() {
      alert("It's working!!!");
    },
    changeButtonColor(event) {
      const colors = { mouseenter: "red", mouseleave: "#2196f3" };

      document.querySelector("button").style.backgroundColor =
        colors[event.type];
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 2.5rem;
}

button {
  margin: 10px 0px;
  padding: 10px 20px;
  font-size: 1.4rem;
  border-radius: 5px;
  color: #fff;
  background-color: #2196f3;
}
</style>
