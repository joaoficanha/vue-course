<template>
    <div class="quotations">
        <span>
            <button @click="number--">&lt;</button>
            <button @click="number++">&gt;</button>
        </span>
        <Quotation>
          <h1 slot="author">{{ quotations[index].author }}</h1>
          <p>{{ quotations[index].text }}</p>
          <h6 slot="source">{{ quotations[index].source }}</h6>
        </Quotation>
    </div>
</template>

<script>
import Quotation from "./Quotation.vue";

export default {
  components: { Quotation },
  data() {
    return {
      number: 0,
      quotations: [
        {
          source: "Jornal do Empreendedor",
          text:
            "Lembre-se sempre que você é absolutamente único. Assim como todos os outros.",
          author: "Margaret Mead",
        },
        {
          source: "Frases de Mãe",
          text: "Isso não é um quarto, é um chiqueiro.",
          author: "Roberta",
        },
        {
          source: "Frases de Pai",
          text: "Vou contar até 3! 1, 2, 2...",
          author: "Gustavo",
        },
      ],
    };
  },
  computed: {
    index() {
      return Math.abs(this.number % 3);
    },
  },
};
</script>

<style scoped>
.quotations {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
