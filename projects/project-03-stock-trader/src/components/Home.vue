<template>
    <div>
        <h1 class="display-3 font-weight-light mb-4">Trade and consult your Stocks.</h1>
        <v-sheet :elevation="6" class="pa-2 primary">
            <v-icon class="white--text mr-3">info</v-icon>
            <span class="headline white--text font-weight-light">
                You can Load & Save your Data
            </span>
        </v-sheet>
        <v-sheet :elevation="6" class="pa-2 success darken-1 mt-3">
            <v-icon class="white--text mr-3">info</v-icon>
            <span class="headline white--text font-weight-light">
                Click 'Close current day' to start a new day!
            </span>
        </v-sheet>
        <v-divider class="my-4" />
        <p class="display-1"><strong>Your balance:</strong> {{ balance | currency }}</p>
    </div>
</template>

<script>
export default {
  computed: {
    balance() {
      return this.$store.getters.balance;
    },
  },
};
</script>
