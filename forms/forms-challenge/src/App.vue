<!-- Exercicio 01 OK -->
<!-- Criar uma formulário de registro -->
<!-- Nome completo (Nome e Sobrenome) -->
<!-- Email -->
<!-- Senha -->
<!-- Armazenar Dados? (Sim/Não) -->

<!-- Exercicio 02 OK -->
<!-- Só mostrar o fomulário de não tiver sido submetido -->
<!-- Mostrar a área de Resultado apenas quando o formulário for submetido -->

<!-- Exercicio 03 OK -->
<!-- Crie um componente personalizado NomeCompleto -->
<!-- Esse componente deve receber Nome e Sobrenome -->

<template>
	<div id="app">
		<h1>Forms Challenge</h1>
		<div class="content">
			<RegistrationForm v-if="!submitted" :user="user" :submit="submit"/>
			<Result v-else :user="user"/>
		</div>
	</div>
</template>

<script>
import RegistrationForm from "./components/RegistrationForm.vue";
import Result from "./components/Result.vue";

export default {
  name: "app",
  components: { RegistrationForm, Result },
  data() {
    return {
      user: {
        saveData: "yes",
      },
      submitted: false,
    };
  },
  methods: {
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
</style>
