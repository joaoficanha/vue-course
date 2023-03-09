<template>
    <div>
        <h1>{{ global }}</h1>
        <ul>
            <li v-for="fruit in fruits" :key="fruit">
                {{ fruit }}
            </li>
        </ul>
        <input type="text" v-model=fruit @keydown.enter="add"/>
    </div>
</template>

<script>
import userMixin from "./userMixin";
import fruitsMixin from "./fruitsMixin";

export default {
  mixins: [fruitsMixin, userMixin],
  data() {
    return {
      fruits: ["avocado"],
    };
  },
  created() {
    console.log("Fruits created.");
  },
};
</script>
