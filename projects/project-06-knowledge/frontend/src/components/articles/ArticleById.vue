<template>
  <div class="article-by-id">
    <app-page-title
      icon="fa fa-file-o"
      :title="article.name"
      :description="article.description"
    />
    <div class="article-content" v-html="article.content"></div>
  </div>
</template>

<script>
import "highlightjs/styles/dracula.css";
import hljs from "highlightjs/highlight.pack.js";
import PageTitle from "../layout/PageTitle.vue";

export default {
  name: "app-article-by-id",
  components: { "app-page-title": PageTitle },
  data() {
    return {
      article: {},
    };
  },
  mounted() {
    this.$http.get(`/articles/${this.$route.params.id}`).then((response) => {
      this.article = response.data;
    });
  },
  updated() {
    document.querySelectorAll(".article-content pre.ql-syntax").forEach((e) => {
      hljs.highlightBlock(e);
    });
  },
};
</script>

<style>
.article-content {
  background-color: #fff;
  border-radius: 8px;
  padding: 25px;
}

.article-content pre {
  padding: 20px;
  border-radius: 8px;
  font-size: 1.2rem;
  background-color: #1e1e1e;
  color: #fff;
}

.article-content img {
  max-width: 100%;
}

.article-content :last-child {
  margin-bottom: 0px;
}
</style>
