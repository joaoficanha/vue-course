<template>
  <b-row class="my-4">
    <b-col>
      <b-table hover striped :items="users" :fields="fields">
        <template slot="actions" slot-scope="data">
          <b-button variant="warning" class="mr-2" @click="onEdit(data.item)">
            <i class="fa fa-pencil"></i>
          </b-button>
          <b-button variant="danger" @click="onDelete(data.item)">
            <i class="fa fa-trash"></i>
          </b-button>
        </template>
      </b-table>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "app-users-table",
  props: {
    users: {
      type: Array,
      required: true,
    },
    changeMode: {
      type: Function,
      required: true,
    },
    loadUser: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      fields: [
        { key: "id", label: "ID", sortable: true },
        { key: "name", label: "Name", sortable: true },
        { key: "email", label: "Email", sortable: true },
        {
          key: "admin",
          label: "Administrator",
          sortable: true,
          formatter: (value) => (value ? "Yes" : "No"),
        },
        { key: "actions", label: "Actions" },
      ],
    };
  },
  methods: {
    onEdit(user) {
      this.loadUser(user);
    },
    onDelete(user) {
      this.loadUser(user, "delete");
    },
  },
};
</script>
