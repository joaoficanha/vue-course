<template>
  <b-form>
    <b-row>
      <b-col>
        <b-form-group label="Name:" label-for="article-name">
          <b-input
            id="article-name"
            type="text"
            v-model="article.name"
            required
            placeholder="Inform the article name...."
            :readonly="mode === 'delete'"
          />
        </b-form-group>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-form-group label="Description" label-for="article-description">
          <b-input
            id="article-description"
            type="text"
            v-model="article.description"
            required
            placeholder="Inform the article description...."
            :readonly="mode === 'delete'"
          />
        </b-form-group>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-form-group label="Image (URL)" label-for="article-imageUrl">
          <b-input
            id="article-imageUrl"
            type="text"
            v-model="article.imageUrl"
            required
            placeholder="Inform the article image url...."
            :readonly="mode === 'delete'"
          />
        </b-form-group>
      </b-col>
    </b-row>
    <b-row v-if="mode === 'save'">
      <b-col>
        <b-form-group label="Category:" label-for="article-categoryId">
          <b-form-select
            id="article-categoryId"
            v-model="article.categoryId"
            :options="categories"
          >
          </b-form-select>
        </b-form-group>
      </b-col>
    </b-row>
    <b-row v-if="mode === 'save'">
      <b-col>
        <b-form-group label="Author:" label-for="article-userId">
          <b-form-select
            id="article-userId"
            v-model="article.userId"
            :options="authors"
          >
          </b-form-select>
        </b-form-group>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-form-group label="Content:" label-for="article-content">
          <vue-editor
            v-model="article.content"
            placeholder="Inform the article content..."
            :disabled="mode === 'delete'"
          />
        </b-form-group>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-button variant="primary" v-if="mode === 'save'" @click="save">
          Save
        </b-button>
        <b-button variant="danger" v-if="mode === 'delete'" @click="remove">
          Delete
        </b-button>
        <b-button class="ml-2" @click="reset"> Cancel </b-button>
      </b-col>
    </b-row>
  </b-form>
</template>

<script>
import { showError } from "../../../global";

import { VueEditor } from "vue2-editor";

export default {
  name: "app-articles-form",
  components: { VueEditor },
  props: {
    mode: {
      type: String,
      required: true,
    },
    article: {
      type: Object,
      required: true,
    },
    reset: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      categories: [],
      authors: [],
    };
  },
  methods: {
    fetchUsers() {
      this.$http.get("/users").then((response) => {
        this.authors = response.data.map((item) => ({
          value: item.id,
          text: item.name,
        }));
      });
    },
    fetchCategories() {
      this.$http.get("/categories").then((response) => {
        this.categories = response.data.map((item) => ({
          value: item.id,
          text: item.path,
        }));
      });
    },
    save() {
      const method = this.article.id ? "put" : "post";
      const id = this.article.id ? `${this.article.id}` : "";

      this.$http[method](`/articles/${id}`, this.article)
        .then(() => {
          this.$toasted.global.defaultSuccess();
          this.reset();
        })
        .catch(showError);
    },
    remove() {
      this.$http
        .delete(`/articles/${this.article.id}`)
        .then(() => {
          this.$toasted.global.defaultSuccess();
          this.reset();
        })
        .catch(showError);
    },
  },
  mounted() {
    this.fetchUsers();
    this.fetchCategories();
  },
};
</script>
