<template>
  <div>
    <div>
      <span class="text-h3">
        <v-icon size="inherit" color="black">
          {{ icon }}
        </v-icon>
        {{ title }}
      </span>
    </div>
    <div class="mt-1">
      <span class="text-h5 subtitle">
        {{ subtitle }}
      </span>
    </div>
    <v-divider class="mt-5 mb-5"></v-divider>
  </div>
</template>

<script>
export default {
  name: "app-page-title",
  props: {
    icon: {
      type: String,
    },
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
    },
  },
};
</script>

<style>
.subtitle {
  color: #777;
}
</style>
