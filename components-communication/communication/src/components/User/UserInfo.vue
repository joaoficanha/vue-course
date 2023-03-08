<template>
    <div class="componente">
        <h2>User Info</h2>
        <p>A lot of details...</p>
        <p>User Name: <strong>{{ invertName() }}</strong></p>
        <p>User age: <strong>{{ userAge }}</strong></p>
        <button @click="resetName">Reset Name</button>
        <button @click="resetNameFn">Reset Name (callback)</button>
    </div>
</template>

<script>
import bus from "../../bus";

export default {
  props: {
    userName: {
      type: String,
      default: "Incognito",
      required: true,
      //   default() {
      //     return 'Incognito'
      //   }
    },
    resetNameFn: {
      type: Function,
    },
    userAge: {
      type: Number,
    },
  },
  methods: {
    invertName() {
      let internal = this.userName;

      return internal
        .split("")
        .reverse()
        .join("");
    },
    resetName() {
      let internal = this.userName;

      internal = "John Doe";

      this.$emit("userNameUpdated", internal);
    },
  },
  created() {
    bus.onAgeChange((age) => {
      this.userAge = age;
    });
  },
};
</script>

<style scoped>
.componente {
  flex: 1;
  background-color: #ec485f;
  color: #fff;
}
</style>
