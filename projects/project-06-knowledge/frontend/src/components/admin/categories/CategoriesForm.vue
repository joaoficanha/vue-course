<template>
  <b-form>
    <b-row>
      <b-col>
        <input id="category-id" type="hidden" v-model="category.id" />
        <b-form-group label="Name:" label-for="category-name">
          <b-input
            id="category-name"
            type="text"
            v-model="category.name"
            required
            placeholder="Inform the category name..."
            :readonly="mode === 'delete'"
          />
        </b-form-group>
      </b-col>
    </b-row>
    <b-row v-if="mode === 'save'">
      <b-col>
        <b-form-group label="Parent category:" label-for="category-parentId">
          <b-form-select
            id="category-parentId"
            v-model="category.parentId"
            :options="categories"
            :readonly="mode === 'delete'"
          >
          </b-form-select>
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

export default {
  name: "app-categories-form",
  props: {
    categories: {
      type: Array,
      required: true,
    },
    category: {
      type: Object,
      required: true,
    },
    reset: {
      type: Function,
      required: true,
    },
    mode: {
      type: String,
      required: true,
    },
  },
  methods: {
    save() {
      const method = this.category.id ? "put" : "post";
      const id = this.category.id ? `${this.category.id}` : "";
      const category = {
        id: this.category.id,
        name: this.category.name,
        parentId: this.category.parentId,
      };

      this.$http[method](`/categories/${id}`, category)
        .then(() => {
          this.$toasted.global.defaultSuccess();
          this.reset();
        })
        .catch(showError);
    },
    remove() {
      this.$http
        .delete(`/categories/${this.category.id}`)
        .then(() => {
          this.$toasted.global.defaultSuccess();
          this.reset();
        })
        .catch(showError);
    },
  },
};
</script>
