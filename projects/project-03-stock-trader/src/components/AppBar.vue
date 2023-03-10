<template>
    <v-toolbar app>
        <v-toolbar-title class="headline text-uppercase mr-4">
            <span>Stock</span>
            <span class="font-weight-light">Trader</span>
        </v-toolbar-title>
        <v-toolbar-items>
            <v-btn flat to="/">Home</v-btn>
            <v-btn flat to="/portfolio">Portfolio</v-btn>
            <v-btn flat to="/stocks">Stocks</v-btn>
        </v-toolbar-items>

        <v-spacer></v-spacer>

        <v-toolbar-items>
            <v-btn flat @click="closeDay">Close current day</v-btn>
            <v-menu offset-y>
                <v-btn flat slot="activator">Save & Load</v-btn>
                <v-list>
                    <v-list-tile @click="saveData">
                        <v-list-tile-title>Save Data</v-list-tile-title>
                    </v-list-tile>
                    <v-list-tile @click="loadData">
                        <v-list-tile-title>Load Data</v-list-tile-title>
                    </v-list-tile>
                </v-list>
            </v-menu>
            <v-layout align-center class="ml-4">
                <span class="text-uppercase grey--text text--darken-2">
                    Balance: {{ balance | currency }}
                </span>
            </v-layout>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
export default {
  computed: {
    balance() {
      return this.$store.getters.balance;
    },
  },
  methods: {
    closeDay() {},
    saveData() {},
    loadData() {},
  },
};
</script>
