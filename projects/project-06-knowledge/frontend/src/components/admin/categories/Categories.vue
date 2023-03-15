<template>
  <b-container fluid>
    <app-categories-form
      :categories="categories"
      :category="category"
      :reset="reset"
      :mode="mode"
    />
    <app-categories-table
      :categories="categories"
      :changeMode="changeMode"
      :loadCategory="loadCategory"
    />
  </b-container>
</template>

<script>
import CategoriesForm from "./CategoriesForm.vue";
import CategoriesTable from "./CategoriesTable.vue";

export default {
  name: "app-admin-categories",
  components: {
    "app-categories-form": CategoriesForm,
    "app-categories-table": CategoriesTable,
  },
  data() {
    return {
      mode: "save",
      category: {},
      categories: [],
    };
  },
  methods: {
    fetchCategories() {
      this.$http.get("/categories").then((response) => {
        this.categories = response.data.map((item) => ({
          ...item,
          value: item.id,
          text: item.path,
        }));
      });
    },
    reset() {
      this.mode = "save";
      this.category = {};
      this.fetchCategories();
    },
    changeMode(mode) {
      this.mode = mode;
    },
    loadCategory(category, mode = "save") {
      this.mode = mode;
      this.category = { ...category };
    },
  },
  mounted() {
    this.fetchCategories();
  },
};
</script>
