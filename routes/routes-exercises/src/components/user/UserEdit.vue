<template>
    <div class="user-edit">
        <h3>User Edit</h3>
        <p><strong>ID: </strong>{{ id }}</p>
        <p><strong>Language: </strong>{{ $route.query.lang }}</p>
        <hr>
        <button primary @click="hasConfirmed = true">
          Confirm
        </button>


        <div id="footer">
          <h3>Vue Course</h3>
        </div>
    </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      hasConfirmed: false,
    };
  },
  beforeRouteLeave(to, from, next) {
    if (this.hasConfirmed) {
      next();
    } else {
      if (confirm("Are you sure?")) {
        next();
      } else {
        next(false);
      }
    }
  },
};
</script>

<style>
#footer {
  margin-top: 1000px;
}
</style>
