<template>
  <v-card class="d-flex flex-row justify-space-between pa-5" rounded="lg">
    <v-icon :color="color" size="5rem">{{ icon }}</v-icon>
    <div class="d-flex flex-column align-end justify-space-between">
      <span class="text-h6 font-weight-regular">{{ capitalizedTitle }}</span>
      <span class="text-h3 font-weight-regular">{{ quantity }}</span>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "app-stat",
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
      return (
        this.title.charAt(0).toUpperCase() +
        this.title.slice(1, this.title.length)
      );
    },
  },
};
</script>
