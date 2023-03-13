<template>
  <div id="app">
    <h1>Mounty Hall Problem</h1>
    <!-- <Door number="1" :hasGift="false" /> -->
    <div class="form">
      <div v-if="!started">
        <label for="doorsAmount">Doors Amount?</label>
        <input
          type="text"
          id="doorsAmount"
          v-model.number="doorsAmount"
          size="3"
        />
      </div>

      <div v-if="!started">
        <label for="prizeDoor">Wich door has the prize?</label>
        <input type="text" id="prizeDoor" v-model.number="prizeDoor" size="3" />
      </div>

      <button @click="started = !started" :disabled="!prizeDoor">
        {{ started ? "Reset" : "Start" }} Game
      </button>
    </div>
    <div class="doors" v-if="started">
      <div v-for="door in doorsAmount" :key="door">
        <Door :number="door" :hasGift="door === prizeDoor" />
      </div>
    </div>
  </div>
</template>

<script>
import Door from "./components/DoorComponent.vue";

export default {
  name: "App",
  components: { Door },
  data() {
    return {
      started: false,
      doorsAmount: 3,
      prizeDoor: null,
    };
  },
};
</script>

<style>
* {
  font-family: "Montserrat", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
}

body {
  margin: 0;
  color: #fff;
  background: linear-gradient(to right, rgb(21, 153, 87), rgb(21, 87, 153));
}

#app {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#app h1 {
  border: 1px solid #000;
  background-color: #0004;
  padding: 20px;
  margin-bottom: 60px;
}

.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
}

.form,
.form input,
.form button {
  margin-bottom: 10px;
  font-size: 2rem;
}

.form,
.form label {
  margin-right: 10px;
}

.doors {
  align-self: stretch;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>
