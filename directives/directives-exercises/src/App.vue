<template>
	<div id="app">
		<h1>Directives</h1>
		<hr>
		<p v-text="'Using v-text directive'"></p>
		<p v-html="'Using <strong>v-html</strong> directive'"></p>
		<hr>
		<p v-highlight:background.delay="'lightblue'">Using global custom directive</p>
		<p v-highlight.delay="color">Using global custom directive</p>
		<hr>
		<p v-local-highlight:background.delay="{colors: ['green', 'blue'], delay: 2000, interval: 200}">Using local custom directive</p>
		<p v-local-highlight.delay.toggle="{colors: ['red', 'green'], delay: 5000}">Using local custom directive</p>
	</div>
</template>

<script>
export default {
  directives: {
    "local-highlight": {
      bind(el, binding) {
        const delay = binding.value.delay || 0;
        const interval = binding.value.interval || 0;
        const colors = binding.value.colors || [];
        let currentColor = colors[0];

        const applyColor = (color) => {
          if (binding.arg === "background") {
            el.style.backgroundColor = color;
          } else {
            el.style.color = color;
          }
        };

        setTimeout(() => {
          if (binding.modifiers["toggle"]) {
            setInterval(() => {
              currentColor = currentColor === colors[0] ? colors[1] : colors[0];
              applyColor(currentColor);
            }, interval);
          } else {
            applyColor(colors[0]);
          }
        }, delay);
      },
    },
  },
  data() {
    return {
      color: "yellow",
    };
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
</style>
