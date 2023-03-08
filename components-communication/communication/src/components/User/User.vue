<template>
    <div class="container">
        <h1>User Component</h1>
        <p>This is a really cool component!</p>
        <p>Name: <strong>{{ userName }}</strong></p>
        <p>Age: <strong>{{ userAge }}</strong></p>
        <button @click="changeName">Change user name</button>
        <hr>
        <div class="componentes">
            <user-info 
                :userName="userName" 
                :userAge="userAge"
                :resetNameFn="resetName"
                @userNameUpdated="userName = $event" 
            />
            <edit-user 
                :userAge="userAge" 
                :changeAgeFn="changeAge" 
                @userAgeUpdated="userAge = $event"
            />
        </div>
    </div>
</template>

<script>
import UserInfo from "./UserInfo.vue";
import EditUser from "./EditUser.vue";

export default {
  components: { UserInfo, EditUser },
  data() {
    return {
      userName: "John Doe",
      userAge: 22,
    };
  },
  methods: {
    changeName() {
      this.userName = "Jane Doe";
    },
    resetName() {
      this.userName = "John Doe";
    },
    changeAge() {
      this.userAge = 33;
    },
  },
};
</script>

<style scoped>
.container {
  background-color: #27363b;
  color: #fff;
  padding: 10px;
}

.container hr {
  margin: 20px 10px;
}

.componentes {
  display: flex;
}

.componentes > * {
  margin: 10px;
}
</style>
