<template>
  <b-container fluid>
    <app-articles-form />
    <app-articles-table />
  </b-container>
</template>

<script>
import ArticlesForm from "./ArticlesForm.vue";
import ArticlesTable from "./ArticlesTable.vue";

export default {
  name: "app-admin-articles",
  components: {
    "app-articles-form": ArticlesForm,
    "app-articles-table": ArticlesTable,
  },
};
</script>
