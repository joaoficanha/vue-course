<template>
    <form class="panel">
        <div class="header">Form</div>
        <FullName 
            :firstName="user.firstName" 
            @input-firstname="user.firstName = $event"
            :lastName="user.lastName"
            @input-lastname="user.lastName = $event"
        />
        <hr>
        <Label name="Email">
            <input type="text" v-model="user.email"/>
        </Label>
        <Label name="Password">
            <input type="password" v-model="user.password"/>
        </Label>
        <Label name="Save data?">
            <span class="mr-4">
                <input type="radio" value="yes" v-model="user.saveData"> Yes
            </span>
            <span class="mr-4">
                <input type="radio" value="no" v-model="user.saveData"> No
            </span>
        </Label>
        <hr>
        <button @click.prevent="submit">Submit</button>
    </form>
</template>

<script>
import Label from "./Label.vue";
import FullName from "./FullName.vue";

export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
    submit: {
      type: Function,
      required: true,
    },
  },
  components: { Label, FullName },
};
</script>
