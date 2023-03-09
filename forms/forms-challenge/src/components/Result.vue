<template>
    <div class="panel">
        <div class="header">Result</div>
        <Label name="Name:">
            <span>{{ user.firstName ? user.firstName : '-' }}</span>
        </Label>
        <Label name="Last Name:">
            <span>{{ user.lastName ? user.lastName : '-' }}</span>
        </Label>
        <Label name="Email:">
            <span>{{ user.email ? user.email : '-' }}</span>
        </Label>
        <Label name="Password:">
            <span>{{ user.password ? user.password : '-' }}</span>
        </Label>
        <Label name="Save Data?">
            <span>{{ user.saveData ? capitalize(user.saveData) : '-' }}</span>
        </Label>
    </div>
</template>

<script>
import Label from "./Label.vue";

export default {
  components: { Label },
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  methods: {
    capitalize(str) {
      return (
        String(str)
          .charAt(0)
          .toUpperCase() + String(str).slice(1, str.length)
      );
    },
  },
};
</script>
