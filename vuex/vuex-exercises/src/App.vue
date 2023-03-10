<template>
  <div id="app">
    <h1>Vuex Exercises</h1>
    <div class="row">
      <Parameters />
      <Store />
    </div>
    <div class="row">
      <Cart />
      <Summary />
    </div>
  </div>
</template>

<script>
import Parameters from "./components/Parameters";
import Store from "./components/Store";
import Cart from "./components/Cart";
import Summary from "./components/Summary";

export default {
  name: "app",
  components: { Parameters, Store, Cart, Summary },
};
</script>

<style>
* {
  font-family: "Oswald", sans-serif;
}

body {
  font-size: 2rem;
  background: linear-gradient(to right, rgb(0, 0, 0), rgb(67, 67, 67));
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
}

h1 {
  font-weight: 200;
}

.row {
  display: flex;
}

button {
  font-size: 1.8rem;
  padding: 5px 15px;
  border-radius: 5px;
  color: #222;
  background-color: #fafafa;
  outline: none;
  border: none;
}
</style>
