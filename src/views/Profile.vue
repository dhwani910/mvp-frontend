<template>
    <div>
        <h1>profile</h1>
         <signout-button></signout-button>
         <button @click="home">Back to Home</button>
         <profile-edit></profile-edit>
         <profile-delete></profile-delete>
          <div class="user-profile">
               <button @click="getUser">View Profile</button>
              <div>
                <p>{{ user.username }}</p>
                <p>{{ user.email }}</p>
                <p>{{ user.bio }}</p>
                <p>{{ user.birthdate }}</p>
              </div>
          </div>
          <div class="users-profile">
                <button @click="getUsers">View Other People Profile</button>
                  <div v-for="user in users" :key="user.userId">
                     <h3>{{ user.username }}</h3>
                     <p>{{ user.email }}</p>
                     <p>{{ user.bio }}</p>
                     <p>{{ user.birthdate }}</p>
        
                  </div>
          </div>
    </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
import SignoutButton from "../components/Signout.vue";
import ProfileEdit from "../components/ProfileEdit.vue";
import ProfileDelete from "../components/ProfileDelete.vue";
export default {
    name: "UserProfile",
    components: {
        ProfileEdit,
        ProfileDelete,
        SignoutButton,
        // FollowButton,
    },
    data() {
      return {
        user: {},
        users: [],
        userId: cookies.get("userId"),
        shouldShow: false,
       };
    },
    methods: {
    getUser: function () {
      axios
        .request({
          url: "http://127.0.0.1:5000/api/users",
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          params: {
            userId: this.userId,
          },
        })
        .then((response) => {
          console.log(response);
          this.user = response.data[0];
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getUsers: function () {
      axios
        .request({
          url: "http://127.0.0.1:5000/api/users",
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          console.log(response);
          this.users = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
        home(){
            this.$router.push("/feed")
        }
    },
}
</script>

<style scoped>

</style>