<!-- Exercício 1 -->
<!-- Construir um filtro local que troca espaços por vírgula -->

<!-- Exercício 2 -->
<!-- Filtro global que conta o tamanho de cada palavra e adiciona o 
	valor na string final -->
<!-- "Pedro é legal" => "Pedro (5) é (1) legal (5)" -->

<!-- Exercício 3 -->
<!-- Implementar os exercicios 1 e 2 com propriedade computada -->

<!-- Exercício 4 -->
<!-- Compartilhe a propriedade computada via mixin -->

<template>
	<div id="app">
		<div>
			<h1>Filters & Mixins (Challenge)</h1>
			<hr>
			<h3>Filters:</h3>
			<p>Local filter: {{ inputValue | whiteSpaceToComma }}</p>
			<p>Global filter: {{ inputValue| countCharacters }}</p>
		</div>
		<hr>
		<!-- <div>
			<h3>Computed property:</h3>
			<p>{{ textWithCommas }}</p>
			<p>{{ textWithLength }}</p>
		</div>
		<hr> -->
		<div>
			<h3>Mixin Computed property:</h3>
			<p>{{ textWithCommas }}</p>
			<p>{{ textWithLength }}</p>
		</div>
	</div>
</template>

<script>
import mixin from "./mixin";

export default {
  mixins: [mixin],
  data() {
    return {
      inputValue: "This is a really cool text.",
    };
  },
  // computed: {
  //   textWithCommas() {
  //     return this.inputValue.trim().replaceAll(" ", ",");
  //   },
  //   textWithLength() {
  //     const strArr = this.inputValue.split(" ");
  //     const newArr = strArr.map((item) => {
  //       return `${item} (${item.length})`;
  //     });

  //     return newArr.join(" ");
  //   },
  // },
  filters: {
    whiteSpaceToComma(str) {
      return str.replaceAll(" ", ",");
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
</style>
