<template>
  <b-form>
    <b-row>
      <b-col md="6" sm="12">
        <input id="user-id" type="hidden" v-model="user.id" />
        <b-form-group label="Name:" label-for="user-name">
          <b-form-input
            id="user-name"
            type="text"
            v-model="user.name"
            required
            placeholder="Inform the user name..."
            :readonly="mode === 'delete'"
          />
        </b-form-group>
      </b-col>
      <b-col md="6" sm="12">
        <b-form-group label="Email:" label-for="user-email">
          <b-form-input
            id="user-email"
            type="text"
            v-model="user.email"
            required
            placeholder="Inform the user email..."
            :readonly="mode === 'delete'"
          />
        </b-form-group>
      </b-col>
    </b-row>
    <b-row class="my-4" v-show="mode === 'save'">
      <b-col>
        <b-form-checkbox
          id="user-admin"
          v-model="user.admin"
          :disabled="mode === 'delete'"
        >
          Administrator?
        </b-form-checkbox>
      </b-col>
    </b-row>
    <b-row v-if="mode === 'save'">
      <b-col md="6" sm="12">
        <b-form-group label="Password:" label-for="user-password">
          <b-form-input
            id="user-password"
            type="password"
            v-model="user.password"
            required
            placeholder="Inform the user password..."
            :readonly="mode === 'delete'"
          />
        </b-form-group>
      </b-col>
      <b-col md="6" sm="12">
        <b-form-group
          label="Confirm Password:"
          label-for="user-confirmPassword"
        >
          <b-form-input
            id="user-confirmPassword"
            type="password"
            v-model="user.confirmPassword"
            required
            placeholder="Confirm the user password..."
            :readonly="mode === 'delete'"
          />
        </b-form-group>
      </b-col>
    </b-row>
    <b-row>
      <b-col xs="12">
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
  name: "app-users-form",
  props: {
    user: {
      type: Object,
      required: true,
    },
    mode: {
      type: String,
      required: true,
    },
    reset: {
      type: Function,
      required: true,
    },
  },
  methods: {
    save() {
      const method = this.user.id ? "put" : "post";
      const id = this.user.id ? `${this.user.id}` : "";

      this.$http[method](`/users/${id}`, this.user)
        .then(() => {
          this.$toasted.global.defaultSuccess();
          this.reset();
        })
        .catch(showError);
    },
    remove() {
      this.$http
        .delete(`/users/${this.user.id}`)
        .then(() => {
          this.$toasted.global.defaultSuccess();
          this.reset();
        })
        .catch(showError);
    },
  },
};
</script>
