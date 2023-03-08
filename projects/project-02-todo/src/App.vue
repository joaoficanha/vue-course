<template>
	<div id="app">
		<h1>TODO</h1>
    <TaskProgress :progress="progress"/>
    <NewTask @taskAdded="addTask"/>
    <TaskGrid 
      :tasks="tasks" 
      @taskRemoved="removeTask" 
      @taskStateChanged="changeTaskState"
    />
	</div>
</template>

<script>
import TaskProgress from "./components/TaskProgress.vue";
import NewTask from "./components/NewTask.vue";
import TaskGrid from "./components/TaskGrid.vue";

export default {
  components: { TaskProgress, NewTask, TaskGrid },
  data() {
    return {
      tasks: [],
    };
  },
  computed: {
    progress() {
      const totalTasks = this.tasks.length;
      const doneTasks = this.tasks.filter((task) => task.done).length;

      return Math.round((doneTasks / totalTasks) * 100) || 0;
    },
  },
  methods: {
    addTask(task) {
      const isSameTask = (t) => t.text === task;
      const isNew = this.tasks.filter(isSameTask).length === 0;

      if (isNew) {
        const newTask = { text: task, done: false };
        this.tasks.push(newTask);
      }
    },
    removeTask(index) {
      this.tasks.splice(index, 1);
    },
    changeTaskState(index) {
      this.tasks[index].done = !this.tasks[index].done;
    },
  },
  watch: {
    tasks: {
      deep: true,
      handler() {
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
      },
    },
  },
  created() {
    const cachedTasks = localStorage.getItem("tasks");
    const parsedCachedTasks = JSON.parse(cachedTasks);
    this.tasks = Array.isArray(parsedCachedTasks) ? parsedCachedTasks : [];
  },
};
</script>

<style>
body {
  font-family: "Lato", sans-serif;
  background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
  color: #fff;
}

#app {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

#app h1 {
  font-weight: 300;
  font-size: 3rem;
}
</style>
