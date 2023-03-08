<template>
    <div class="new-task">
        <input 
            v-model="task" 
            type="text" 
            class="form-element" 
            placeholder="New Task" 
            @keydown.enter="addTask"
        />
        <button class="form-element" @click="addTask">+</button>
    </div>
</template>

<script>
export default {
  data() {
    return {
      task: "",
    };
  },
  methods: {
    addTask() {
      if (this.task.trim().length) {
        this.$emit("taskAdded", this.task);
        this.task = "";
      }
    },
  },
};
</script>

<style>
.new-task {
  margin: 35px;
}

.form-element {
  outline: none;
  font-size: 2rem;
  border: 1px solid #fff;
  padding: 5px 10px 8px;
  color: #fff;
}

input.form-element {
  width: 500px;
  background: #fff2;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
}

button.form-element {
  border-left: none;
  background-color: #2196f3;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
}
</style>
