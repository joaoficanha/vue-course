<template>
	<div id="app">
		<h1>Super Quiz</h1>
    <transition name="flip" mode="out-in">
      <Question 
      v-if="!isAnswered"
      :currentQuestion="questions[currentQuestion]" 
      @answered="onAnswer"
      />
      <Result v-else :isCorrect="isCorrect" @nextQuestion="onNextQuestion" />
    </transition>
	</div>
</template>

<script>
import Question from "./components/Question.vue";
import Result from "./components/Result.vue";
import questions from "./util/questions";

export default {
  components: { Question, Result },
  data() {
    return {
      currentQuestion: 0,
      isCorrect: false,
      isAnswered: false,
      questions,
    };
  },
  methods: {
    reset() {
      this.isAnswered = false;
      this.isCorrect = false;
    },
    onAnswer(correct) {
      this.isAnswered = true;
      this.isCorrect = correct;
    },
    onNextQuestion() {
      this.reset();
      const randomIndex = this.getRandomIndex();
      this.currentQuestion = parseInt(randomIndex);
    },
    getRandomIndex() {
      return Math.random() * this.questions.length;
    },
  },
  watch: {
    currentQuestion(newValue, oldValue) {
      if (newValue === oldValue) {
        this.reset();
        const randomIndex = this.getRandomIndex();
        this.currentQuestion = parseInt(randomIndex);
      }
    },
  },
};
</script>

<style>
body {
  background: linear-gradient(to right, rgb(0, 0, 70), rgb(28, 181, 224));
  font-family: "Oswald", sans-serif;
  color: #fff;
  height: 100vh;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
}

#app h1 {
  font-weight: 200;
  font-size: 4rem;
}

@keyframes flip-out {
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(90deg);
  }
}

@keyframes flip-in {
  from {
    transform: rotateY(90deg);
  }
  to {
    transform: rotateY(0deg);
  }
}

.flip-enter-active {
  animation: flip-in 0.3s ease;
}

.flip-leave-active {
  animation: flip-out 0.3s ease;
}
</style>
