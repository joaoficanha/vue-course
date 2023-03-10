<template>
    <div class="user-list">
        <h3>User List</h3>
        <ul class="list">
            <router-link 
                v-for="user in users" 
                :key="user.id" 
                :to="`/user/${user.id}`" 
                tag="li" 
                class="list-item"
            >
                {{ user.name }}
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
  data() {
    return {
      users: [
        {
          name: "User 1",
          id: 1,
        },
        {
          name: "User 2",
          id: 2,
        },
        {
          name: "User 3",
          id: 3,
        },
      ],
    };
  },
};
</script>
