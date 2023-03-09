<template>
    <div 
      class="choice" 
      @click="toggle" 
      :class="{isActive: value, isDeactive: !value}"
    >
        <div v-if="value" class="button"></div>
        <div v-else class="button"></div>
    </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    toggle() {
      this.$emit("input", !this.value);
    },
  },
};
</script>

<style scoped>
.choice {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 15px;
  width: 40px;
  border-radius: 20px;
  border: 1px solid #aaa;
}

.button {
  position: absolute;
  margin: 0px;
  height: 25px;
  width: 25px;
  border-radius: 14px;
  background: #fff;
  box-shadow: 0px 0px 5px #000b;
}

.isDeactive {
  background-color: #aaa;
}

.isActive {
  background-color: #7495c2;
}

.isDeactive .button {
  left: -10px;
}

.isActive .button {
  left: 20px;
  background-color: #255ca9;
  align-self: flex-end;
}
</style>
