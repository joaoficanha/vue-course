<template>
	<div id="app">
		<h1>Register Complaint</h1>
		<div class="content">
			<form class="panel" v-if="!submitted">
				<div class="header">Form</div>
				<Label name="E-mail">
					<input type="text" v-model.lazy.trim='user.email'>
				</Label>
				<Label name="Password">
					<input type="password" v-model="user.password">
				</Label>
				<Label name="Age">
					<input type="number" v-model="user.age">
				</Label>
				<Label name="Message">
					<textarea name="" cols="30" rows="5" v-model="message"></textarea>
				</Label>
				<Label name="Problem Characteristics">
					<span class="mr-4">
						<input type="checkbox" value="reproducible" v-model="characteristics"> Reproducible
					</span>
					<span>
						<input type="checkbox" value="intermittent" v-model="characteristics"> Intermittent
					</span>
				</Label>
				<Label name="Wich product?">
					<span class="mr-4">
						<input type="radio" value="web" v-model="product"> Web
					</span>
					<span class="mr-4">
						<input type="radio" value="mobile" v-model="product"> Mobile
					</span>
					<span>
						<input type="radio" value="outro" v-model="product"> Outro
					</span>
				</Label>
				<Label name="Priority">
					<select v-model="priority">
						<option 
							v-for="priority in priorities" 
							:key="priority.id"
							:value="priority.id"
						>
							{{ priority.name }}
						</option>
					</select>
				</Label>
				<Label name="First Complaint?">
					<Choice v-model="choice" />
				</Label>
				<hr>
				<button @click.prevent="submit">Submit</button>
			</form>
			<div class="panel" v-else>
				<div class="header">Result</div>
				<Label name="E-mail">
					<span>{{ user.email ? user.email : '-' }}</span>
				</Label>
				<Label name="Password">
					<span>{{ user.password ? user.password : '-' }}</span>
				</Label>
				<Label name="Age">
					<span>{{ user.age ? user.age : '-' }}</span>
				</Label>
				<Label name="Message">
					<span style="white-space: pre;">{{ message ? message : '-' }}</span>
				</Label>
				<Label name="Check the options">
					<span>
						<ul>
							<li style="text-align: start;" v-for="characteristic in characteristics" :key="characteristic">
								{{ capitalize(characteristic) }}
							</li>
						</ul>
					</span>
				</Label>
				<Label name="Wich product?">
					<span>{{ capitalize(product) }}</span>
				</Label>
				<Label name="Priority">
					<span>{{ normalizePriority }}</span>
				</Label>
				<Label name="First Complaint">
					<span>{{ normalizeChoice }}</span>
				</Label>
			</div>
		</div>
	</div>
</template>

<script>
import Label from "./components/Label.vue";
import Choice from "./components/Choice.vue";

export default {
  name: "app",
  components: { Label, Choice },
  data() {
    return {
      priorities: [
        { id: 1, name: "Low" },
        { id: 2, name: "Medium" },
        { id: 3, name: "High" },
      ],
      priority: 1,
      user: {},
      message: "",
      characteristics: [],
      product: "web",
      choice: true,
      submitted: false,
    };
  },
  computed: {
    normalizePriority() {
      return this.priorities.find((priority) => priority.id === this.priority)
        .name;
    },
    normalizeChoice() {
      return this.choice ? "Yes" : "No";
    },
  },
  methods: {
    capitalize(str) {
      return (
        String(str)
          .charAt(0)
          .toUpperCase() + String(str).slice(1, str.length)
      );
    },
    submit() {
      this.submitted = true;
    },
  },
};
</script>

<style>
body {
  background-color: #ececec;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  display: flex;
  flex-direction: column;
}

.content {
  display: flex;
}

.panel {
  flex: 1;
  background: #fff;
  margin: 0px 10px;
  padding: 20px;
  border: 1px solid #aaa;
  border-radius: 5px;
}

.panel .header {
  width: 100%;
  background-color: #ddd;
  padding: 10px 0px;
  border-radius: 5px;
  font-size: 1.4rem;
}

#app form button {
  float: right;
  margin: 10px 0px;
  padding: 10px 20px;
  font-size: 1.4rem;
  border-radius: 5px;
  color: #fff;
  background-color: #2196f3;
}

#app h1 {
  font-weight: 200;
  margin: 20px;
  padding: 0;
}

.mr-4 {
  margin-right: 40px;
}
</style>
