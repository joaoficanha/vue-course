<template>
	<div id="app" class="container-fluid">
		<h1>Animations</h1>
		<hr>
		<!-- <b-button 
			variant='primary' 
			class="mb-4 mr-4" 
			@click="show = !show"
		>
			{{show ? 'Hide' : 'Show'}} message
		</b-button>

		<b-button 
			variant='primary' 
			class="mb-4" 
			@click="changeAnimationType"
		>
			Change last card animation type to {{ animationType }}
		</b-button> -->

		<!-- <transition name="fade" appear>
			<b-alert v-if="show" variant="info" show>{{ message }}</b-alert>
		</transition>

		<transition name="slide" type="animation" appear>
			<b-alert v-show="show" variant="info" show>{{ message }}</b-alert>
		</transition>

		<transition 
			enter-active-class="animated bounce"
			leave-active-class="animated shake"
		>
			<b-alert v-show="show" variant="info" show>{{ message }}</b-alert>
		</transition> -->

		<!-- <transition :name="animationType" mode="out-in">
			<b-alert v-if="show" variant="info" show key="info">{{ message }}</b-alert>
			<b-alert v-else variant="warning" show key="warning">{{ message }}</b-alert>
		</transition>

		<hr>

		<b-button variant="primary" @click="show2 = !show2">
			{{show2 ? 'Hide' : 'Show'}}
		</b-button>

		<transition
			:css="false"
			@before-enter="beforeEnter"
			@enter="enter"
			@after-enter="afterEnter"
			@enter-cancelled="enterCancelled"
			@before-leave="beforeLeave"
			@leave="leave"
			@leave-cancelled="leaveCancelled"
		>
			<div v-if="show2" class="box"></div>
		</transition>

    <hr>

    <div class="mb-4">
      <b-button class="mr-2" variant="info" @click="alertComponent = 'AlertInfo'">Info component</b-button>
      <b-button variant="warning" @click="alertComponent = 'AlertWarning'">Warning component</b-button>
    </div>

    <transition name="fade" mode="out-in">
      <component :is="alertComponent"/>
    </transition> -->

    <b-button variant="primary" class="mb-4" @click="addStudent">Add Student</b-button>
    <transition-group name="slide" tag="div">
      <b-list-group v-for="(student, index) in students" :key="student">
        <b-list-group-item @click="removeStudent(index)">
          {{ student }}
        </b-list-group-item>
      </b-list-group>
    </transition-group>
	</div>
</template>

<script>
// import AlertWarning from "./AlertWarning.vue";
// import AlertInfo from "./AlertInfo.vue";

export default {
  // components: { AlertWarning, AlertInfo },
  data() {
    return {
      message: "A really cool message!",
      show: false,
      animationType: "fade",
      show2: true,
      defaultWidth: 0,
      alertComponent: "AlertInfo",
      students: ["John", "Jane", "William", "Robert"],
    };
  },
  methods: {
    addStudent() {
      const randomStr = Math.random()
        .toString(36)
        .substring(2);
      this.students.push(randomStr);
    },
    removeStudent(index) {
      this.students.splice(index, 1);
    },
    animate(el, done, isNegative = false) {
      let round = 1;
      const interval = setInterval(() => {
        const newWidth =
          this.defaultWidth + (isNegative ? -round * 10 : round * 10);
        el.style.width = `${newWidth}px`;

        round++;

        if (round > 30) {
          clearInterval(interval);
          done();
        }
      }, 20);
    },
    changeAnimationType() {
      this.animationType = this.animationType === "fade" ? "slide" : "fade";
    },
    beforeEnter(el) {
      this.defaultWidth = 0;
      el.style.width = `${this.defaultWidth}px`;
    },
    enter(el, done) {
      this.animate(el, done);
    },
    // afterEnter() {
    //   console.log("afterEnter");
    // },
    // enterCancelled() {
    //   console.log("enterCancelled");
    // },
    beforeLeave(el) {
      this.defaultWidth = 300;
      el.style.width = `${this.defaultWidth}px`;
    },
    leave(el, done) {
      this.animate(el, done, true);
    },
    // afterLeave() {
    //   console.log("afterLeave");
    // },
    // leaveCancelled() {
    //   console.log("leaveCancelled");
    // },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 1.5rem;
}

.box {
  height: 100px;
  width: 300px;
  margin: 30px auto;
  background-color: lightgreen;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s;
}

@keyframes slide-in {
  from {
    transform: translateY(40px);
  }

  to {
    transform: translateY(0);
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(40px);
  }
}

.slide-enter-active {
  animation: slide-in 2s ease;
  transition: opacity 2s;
}

.slide-leave-active {
  position: absolute;
  width: 100%;
  animation: slide-out 2s ease;
  transition: opacity 2s;
}

.slide-enter,
.slide-leave-to {
  opacity: 0;
}

.slide-move {
  transition: transform 1s;
}
</style>
