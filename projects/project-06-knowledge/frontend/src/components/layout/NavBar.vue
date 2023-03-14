<template>
  <transition name="slide" mode="out-in">
    <v-navigation-drawer v-show="isMenuOpen" class="drawer" app absolute>
    </v-navigation-drawer>
  </transition>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "app-nav-bar",
  computed: {
    ...mapGetters(["isMenuOpen"]),
  },
};
</script>

<style>
@keyframes slide-in {
  from {
    transform: translateX(-256px);
    opacity: 0;
  }
  to {
    transform: translateX(0px);
    opacity: 1;
  }
}

@keyframes slide-out {
  from {
    transform: translateX(0px);
    opacity: 1;
  }
  to {
    transform: translateX(-256px);
    opacity: 0;
  }
}

.drawer {
  background: linear-gradient(to right, #232526, #414345);
}

.slide-enter-active {
  animation: slide-in 0.3s ease;
}

.slide-leave-active {
  animation: slide-out 0.3s ease;
}
</style>
