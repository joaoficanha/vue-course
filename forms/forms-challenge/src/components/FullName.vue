<template>
    <div>
        <Label name="Name">
            <input 
                type="text" 
                :value="firstName" 
                @input="$emit('input-firstname', $event.target.value)" 
            />
        </Label>
        <Label name="Last Name">
            <input 
                type="text" 
                :value="lastName" 
                @input="$emit('input-lastname', $event.target.value)" 
            />
        </Label>
    </div>
</template>

<script>
import Label from "./Label.vue";

export default {
  components: { Label },
  props: {
    firstName: {
      type: String,
      required: true,
      default: "",
    },
    lastName: {
      type: String,
      required: true,
      default: "",
    },
  },
};
</script>
