<template>
    <div class="user-detail">
        <h3>User Detail</h3>
        <p><strong>ID: </strong>{{ id }}</p>
        <!-- :to="`/user/${id}/edit`" -->
        <hr>
        <router-link 
          tag="button" 
          primary 
          :to="{
            name: 'userEdit', 
            params: { id }, 
            query: { lang: 'en' },
            // hash: '#footer'
          }"
        >
          Edit
        </router-link>
    </div>
</template>

<script>
export default {
  props: ["id"],
  beforeRouteEnter(to, from, next) {
    //is executed before the component renders
    // console.log(this.id) - does not work because component is not yet created
    console.log("beforeRouteEnter life cycle - User Detail");

    //use a callback function to access component properties
    // next((vm) => {
    //   console.log(vm.id);
    // });

    next();
  },
  //   data() {
  //     return {
  //       id: this.$route.params.id,
  //     };
  //   },
  //   watch: {
  //     $route(to, from) {
  //       this.id = to.params.id;
  //     },
  //   },
};
</script>
