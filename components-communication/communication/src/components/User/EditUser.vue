<template>
    <div class="componente">
        <h2>Edit User Data</h2>
        <p>Edit user information</p>
        <p>User age: <strong>{{ userAge }}</strong></p>
        <button @click="changeAge">Change age</button>
        <button @click="changeAgeFn">Change age (callback)</button>
    </div>
</template>

<script>
import bus from "../../bus";

export default {
  props: {
    userAge: {
      type: Number,
    },
    changeAgeFn: {
      type: Function,
    },
  },
  methods: {
    changeAge() {
      this.userAge = 33;
      bus.changeAge(this.userAge);
    },
  },
};
</script>

<style scoped>
.componente {
  flex: 1;
  background-color: #98b99a;
  color: #fff;
}
</style>
