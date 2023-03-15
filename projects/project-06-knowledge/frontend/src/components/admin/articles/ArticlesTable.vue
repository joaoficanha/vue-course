<template>
  <b-row class="my-4">
    <b-col>
      <b-table hover striped :items="articles" :fields="fields">
        <template slot="actions" slot-scope="data">
          <b-button variant="warning" class="mr-2">
            <i class="fa fa-pencil"></i>
          </b-button>
          <b-button variant="danger">
            <i class="fa fa-trash"></i>
          </b-button>
        </template>
      </b-table>
      <b-pagination
        size="md"
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
      />
    </b-col>
  </b-row>
</template>

<script>
export default {
  data() {
    return {
      articles: [],
      rows: 0,
      perPage: 0,
      currentPage: 1,
      fields: [
        { key: "id", label: "ID", sortable: true },
        { key: "name", label: "Name", sortable: true },
        { key: "description", label: "Description", sortable: true },
        { key: "actions", label: "Actions" },
      ],
    };
  },
  methods: {
    fetchArticles() {
      this.$http.get("/articles").then((response) => {
        const result = response.data;
        this.articles = result.data;
        this.rows = result.count;
        this.perPage = result.limit;
      });
    },
  },
  mounted() {
    this.fetchArticles();
  },
};
</script>
