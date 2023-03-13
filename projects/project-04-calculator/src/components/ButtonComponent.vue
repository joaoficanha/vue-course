<template>
  <button
    class="button"
    :class="{ operation, double, triple }"
    @click="onButtonClick(label)"
  >
    {{ label }}
  </button>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    operation: {
      type: Boolean,
    },
    double: {
      type: Boolean,
    },
    triple: {
      type: Boolean,
    },
    onButtonClick: {
      type: Function,
      required: true,
    },
  },
};
</script>

<style>
:root {
  --bg-button: #f0f0f0;
  --border-button: solid 1px #888;
}

.button {
  outline: none;
  font-size: 1.4rem;
  background-color: var(--bg-button);
  border: none;
  border-right: var(--border-button);
  border-bottom: var(--border-button);
}

.button:active {
  background-color: #ccc;
}

.button.operation {
  background-color: #fa8231;
  color: #fff;
}

.button.operation:active {
  background-color: #fa8231cc;
}

.button.double {
  grid-column: span 2;
}

.button.triple {
  grid-column: span 3;
}
</style>
