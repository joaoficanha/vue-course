<template>
	<div id="app" class="container">
		<h1>HTTP with Axios</h1>
		<b-alert 
			v-for="message in messages" 
			:key="message.text" 
			:variant="message.type" 
			show 
			dismissible
		>
			{{ message.text }}
		</b-alert>
		<b-card>
			<b-form-group label="Name">
				<b-form-input type="text" size="large" v-model="user.name" placeholder="Enter your name"/>
			</b-form-group>
			<b-form-group label="Email">
				<b-form-input type="text" size="large" v-model="user.email" placeholder="Enter your email"/>
			</b-form-group>
			<hr>
			<b-button variant="primary" size="lg" @click="saveUser">
				Submit
			</b-button>
			<b-button class="ml-2" variant="success" size="lg" @click="getUsers">
				Get Users
			</b-button>
		</b-card>
		<hr>
		<b-list-group>
			<b-list-group-item v-for="(user, id) in users"	:key="id">
				<strong>Name: </strong>{{ user.name }} <br>
				<strong>Email: </strong>{{ user.email }} <br>
				<strong>ID: </strong>{{ id }} <br>
				<b-button 
					variant="warning" 
					size="lg" 
					@click="loadUser(id)"
				>
					Load user
				</b-button>
				<b-button 
					variant="danger"
					size="lg" 
					@click="deleteUser(id)"
					class="ml-2"
				>
					Delete user
				</b-button>
			</b-list-group-item>
		</b-list-group>
	</div>
</template>

<script>
export default {
  data() {
    return {
      users: [],
      user: {},
      id: null,
      messages: [],
    };
  },
  methods: {
    clear() {
      this.user = {};
      this.id = null;
      this.messages = [];
    },
    getUsers() {
      this.$http.get("users.json").then((response) => {
        this.users = response.data;
      });

      //   this.$http.defaults.headers.common["Authorization"] = "auth123";
    },
    saveUser() {
      const method = this.id !== null ? "patch" : "post";
      const urlEnd = this.id !== null ? `/${this.id}.json` : ".json";

      this.$http[method](`users${urlEnd}`, this.user).then(() => {
        this.clear();
        this.messages.push({
          text: "User saved with success!",
          type: "success",
        });
        this.getUsers();
      });
    },
    loadUser(id) {
      this.id = id;
      this.user = { ...this.users[id] };
    },
    deleteUser(id) {
      this.$http
        .delete(`users/${id}.json`)
        .then(() => {
          this.clear();
          delete this.users[id];
        })
        .catch(() => {
          this.messages.push({
            text: "Cannot delete user.",
            type: "danger",
          });
        });
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 1.5rem;
}

#app h1 {
  text-align: center;
  margin: 50px;
}
</style>
