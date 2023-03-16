<template>
  <b-container fluid>
    <app-articles-form :article="article" :mode="mode" :reset="reset" />
    <app-articles-table
      :articles="articles"
      :loadArticle="loadArticle"
      :page="page"
      :changePage="changePage"
    />
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
  data() {
    return {
      mode: "save",
      page: 1,
      article: {},
      articles: {},
    };
  },
  methods: {
    fetchArticles() {
      this.$http.get(`/articles?page=${this.page}`).then((response) => {
        this.articles = response.data;
      });
    },
    fetchArticle(articleId) {
      this.$http.get(`/articles/${articleId}`).then((response) => {
        this.article = response.data;
      });
    },
    loadArticle(article, mode = "save") {
      this.mode = mode;
      this.fetchArticle(article.id);
    },
    changePage(page) {
      this.page = page;
    },
    reset() {
      this.mode = "save";
      this.article = {};
      this.fetchArticles();
    },
  },
  mounted() {
    this.fetchArticles();
  },
  watch: {
    page() {
      this.fetchArticles();
    },
  },
};
</script>
