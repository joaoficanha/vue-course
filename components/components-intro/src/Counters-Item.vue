<template>
  <div class="counters">
    <h1>Counters</h1>
    <counter-item v-for="n in 5" :key="n" />
  </div>
</template>

<script>
import CounterItem from "./Counter-Item.vue";

export default {
  components: {
    "counter-item": CounterItem,
  },
};
</script>
