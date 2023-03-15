<template>
  <b-row class="my-4">
    <b-col>
      <b-table hover striped :items="categories" :fields="fields">
        <template slot="actions" slot-scope="data">
          <b-button
            variant="warning"
            class="mr-2"
            @click="loadCategory(data.item)"
          >
            <i class="fa fa-pencil"></i>
          </b-button>
          <b-button variant="danger" @click="loadCategory(data.item, 'delete')">
            <i class="fa fa-trash"></i>
          </b-button>
        </template>
      </b-table>
    </b-col>
  </b-row>
</template>

<script>
export default {
  props: {
    categories: {
      type: Array,
      required: true,
    },
    loadCategory: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      fields: [
        { key: "id", label: "ID", sortable: true },
        { key: "name", label: "Name", sortable: true },
        { key: "path", label: "Path", sortable: true },
        { key: "actions", label: "Actions" },
      ],
    };
  },
};
</script>
