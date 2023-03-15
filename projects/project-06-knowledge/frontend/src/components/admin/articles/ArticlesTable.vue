<template>
  <b-row class="my-4">
    <b-col>
      <b-table hover striped :items="articles.data" :fields="fields">
        <template slot="actions" slot-scope="data">
          <b-button variant="warning" class="mr-2" @click="onEdit(data.item)">
            <i class="fa fa-pencil"></i>
          </b-button>
          <b-button variant="danger" @click="onDelete(data.item)">
            <i class="fa fa-trash"></i>
          </b-button>
        </template>
      </b-table>
      <b-pagination
        size="md"
        :page="page"
        :total-rows="articles.count"
        :per-page="articles.limit"
        @input="changePage"
      />
    </b-col>
  </b-row>
</template>

<script>
export default {
  props: {
    articles: {
      type: Object,
      required: true,
    },
    loadArticle: {
      type: Function,
      required: true,
    },
    page: {
      type: Number,
      required: true,
    },
    changePage: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      fields: [
        { key: "id", label: "ID", sortable: true },
        { key: "name", label: "Name", sortable: true },
        { key: "description", label: "Description", sortable: true },
        { key: "actions", label: "Actions" },
      ],
    };
  },
  methods: {
    onEdit(article) {
      this.loadArticle(article);
    },
    onDelete(article) {
      this.loadArticle(article, "delete");
    },
  },
};
</script>
