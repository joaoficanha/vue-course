<template>
    <div class="stat">
        <div class="stat-icon">
            <i :class="icon" :style="{color}"></i>
        </div>
        <div class="stat-info">
            <span class="stat-title">{{ capitalizedTitle }}</span>
            <span class="stat-quantity">{{ quantity }}</span>
        </div>
    </div>
</template>

<script>
export default {
  name: "Stat",
  props: {
    title: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
  },
  computed: {
    capitalizedTitle() {
      return this.title.charAt(0).toUpperCase() + this.title.slice(1);
    },
  },
};
</script>

<style>
.stat {
  flex: 1;
  display: flex;
  border-radius: 8px;
  margin-right: 20px;
  margin-bottom: 20px;
  background-color: #fff;
  padding: 20px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
}

.stat-icon {
  display: flex;
  align-items: center;
}

.stat-icon i {
  font-size: 5rem;
}

.stat-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.stat-title {
  font-size: 1.2rem;
}

.stat-quantity {
  font-size: 3rem;
}
</style>
