<template>
  <div class="auth-content">
    <div class="auth-modal">
      <img src="@/assets/logo.png" width="200" alt="Logo" />
      <hr />
      <div class="auth-title">{{ showRegister ? "Register" : "Login" }}</div>

      <input
        v-if="showRegister"
        v-model="user.name"
        type="text"
        placeholder="Name"
      />
      <input
        v-model="user.email"
        name="email"
        type="text"
        placeholder="Email"
      />
      <input
        v-model="user.password"
        name="password"
        type="password"
        placeholder="Password"
      />
      <input
        v-if="showRegister"
        v-model="user.confirmPassword"
        type="password"
        placeholder="Confirm Password"
      />

      <button v-if="showRegister" @click="register">Register</button>
      <button v-else @click="login">Login</button>

      <a href @click.prevent="showRegister = !showRegister">
        <span v-if="showRegister">Already have an account? Login!</span>
        <span v-else>Don't have an account? Register here!</span>
      </a>
    </div>
  </div>
</template>

<script>
import { showError, userKey } from "../../global";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      showRegister: false,
      user: {},
    };
  },
  methods: {
    ...mapActions(["setUser"]),
    login() {
      this.$http
        .post("/auth/login", this.user)
        .then((response) => {
          this.setUser(response.data);
          localStorage.setItem(userKey, JSON.stringify(response.data));
          this.$router.push({ path: "/" });
        })
        .catch(showError);
    },
    register() {
      this.$http
        .post("/auth/register", this.user)
        .then(() => {
          this.$toasted.global.defaultSuccess();
          this.user = {};
          this.showRegister = false;
        })
        .catch(showError);
    },
  },
};
</script>

<style>
.auth-content {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.auth-modal {
  background-color: #fff;
  width: 350px;
  padding: 35px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);

  display: flex;
  flex-direction: column;
  align-items: center;
}

.auth-title {
  font-size: 1.2rem;
  font-weight: 100;
  margin-top: 10px;
  margin-bottom: 15px;
}

.auth-modal input {
  border: 1px solid #bbb;
  width: 100%;
  margin-bottom: 15px;
  padding: 3px 8px;
  outline: none;
}

.auth-modal button {
  align-self: flex-end;
  background-color: #2460ae;
  color: #fff;
  padding: 5px 15px;
}

.auth-modal a {
  margin-top: 35px;
}

.auth-modal hr {
  border: 0;
  width: 100%;
  height: 1px;
  background-image: linear-gradient(
    to right,
    rgba(120, 120, 120, 0),
    rgba(120, 120, 120, 0.75),
    rgba(120, 120, 120, 0)
  );
}
</style>
