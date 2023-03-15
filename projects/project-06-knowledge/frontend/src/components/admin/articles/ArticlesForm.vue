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
          />
        </b-form-group>
      </b-col>
    </b-row>
    <b-row>
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
    <b-row>
      <b-col>
        <b-form-group label="Author:" label-for="article-userId">
          <b-form-select
            id="article-userId"
            v-model="article.userId"
            :options="categories"
          >
          </b-form-select>
        </b-form-group>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-form-group label="Content:" label-for="article-content">
          <!-- <VueEditor
            v-model="article.content"
            placeholder="Inform the article content..."
          /> -->
        </b-form-group>
      </b-col>
    </b-row>
  </b-form>
</template>

<script>
import VueEditor from "vue2-editor";

export default {
  name: "app-articles-form",
  components: { VueEditor },
  data() {
    return {
      article: {},
    };
  },
};
</script>
