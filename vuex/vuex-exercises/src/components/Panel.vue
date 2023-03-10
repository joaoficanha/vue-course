<template>
    <div class="panel">
        <div class="header">
            <span class="title">{{ title }}</span>
            <span class="notification" v-if="notification">
                {{ notification }}
            </span>
        </div>
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
  props: ["title", "notification"],
};
</script>

<style scoped>
.panel {
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 5px;
}

.header {
  display: flex;
  justify-content: center;
}

.title {
  flex: 1;
  padding: 5px;
}

.content {
  padding: 25px;
}

.notification {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  font-weight: 600;
  color: #fff;
  background-color: #e53935;
  width: 60px;
}

.panel[red] .header {
  color: #fff;
  background-color: #c62828;
}
.panel[red] .content {
  background-color: #f44336;
}

.panel[green] .header {
  color: #fff;
  background-color: #2e7d32;
}
.panel[green] .content {
  background-color: #4caf50;
}

.panel[blue] .header {
  color: #fff;
  background-color: #1565c0;
}
.panel[blue] .content {
  background-color: #2196f3;
}

.panel[purple] .header {
  color: #fff;
  background-color: #6a1b9a;
}
.panel[purple] .content {
  background-color: #9c27b0;
}
</style>
