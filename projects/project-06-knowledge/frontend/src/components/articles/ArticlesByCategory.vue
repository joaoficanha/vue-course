<template>
  <div class="articles-by-category">
    <app-page-title
      :title="category.name"
      subtitle="Category"
      icon="fa fa-folder-o"
    />
    <ul>
      <li v-for="article in articles" :key="article.id">
        <app-article-item :article="article" />
      </li>
    </ul>
    <div class="load-more">
      <button
        v-if="loadMore"
        class="btn btn-lg btn-outline-primary"
        @click="fetchArticles"
      >
        Load more articles
      </button>
    </div>
  </div>
</template>

<script>
import PageTitle from "../layout/PageTitle.vue";
import ArticleItem from "./ArticleItem.vue";

export default {
  name: "app-articles-by-category",
  components: {
    "app-page-title": PageTitle,
    "app-article-item": ArticleItem,
  },
  data() {
    return {
      category: {},
      articles: [],
      page: 1,
      loadMore: true,
    };
  },
  methods: {
    fetchCategory() {
      this.$http.get(`/categories/${this.category.id}`).then((response) => {
        this.category = response.data;
      });
    },
    fetchArticles() {
      this.$http
        .get(`/categories/${this.category.id}/articles?page=${this.page}`)
        .then((response) => {
          this.articles = this.articles.concat(response.data);
          this.page++;

          if (response.data.length === 0) {
            this.loadMore = false;
          }
        });
    },
  },
  watch: {
    $route(to) {
      this.category.id = to.params.id;
      this.articles = [];
      this.page = 1;
      this.loadMore = true;

      this.fetchCategory();
      this.fetchArticles();
    },
  },
  mounted() {
    this.category.id = this.$route.params.id;
    this.fetchCategory();
    this.fetchArticles();
  },
};
</script>

<style>
.articles-by-category ul {
  list-style-type: none;
  padding: 0px;
}

.articles-by-category .load-more {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 25px;
}
</style>
