<template>
    <div class="task-grid">
      <template v-if="tasks.length">
        <Task 
          v-for="(task, index) in tasks" 
          :key="task.name" 
          :task="task" 
          @taskRemoved="removeTask(index)"
          @taskStateChanged="changeTaskState(index)"
        />
      </template>
      <p v-else class="no-task">All Quiet Here.</p>
    </div>
</template>

<script>
import Task from "./Task.vue";

export default {
  components: { Task },
  props: {
    tasks: {
      type: Array,
      required: true,
    },
  },
  methods: {
    removeTask(index) {
      this.$emit("taskRemoved", index);
    },
    changeTaskState(index) {
      this.$emit("taskStateChanged", index);
    },
  },
};
</script>

<style>
.task-grid {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.task-grid .task {
  margin: 10px;
}

.no-task {
  color: #aaa;
  font-size: 1.7rem;
}
</style>
