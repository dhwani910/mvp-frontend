<template>
  <div>
    <h1>Edit Profile</h1>
    <p>Username</p>
    <input type="text" id="username-input" v-model="username" />
    <p>Email</p>
    <input type="text" id="email-input" v-model="email" />
    <p>Password</p>
    <input type="password" id="password-input" v-model="password" />
    <p>Bio</p>
    <input type="text" id="bio-input" v-model="bio" />
    <p>birthdate</p>
    <input
      type="text"
      id="birthdate-input"
      v-model="birthdate"
      placeholder="yyyy-mm-dd"
    />
    <br />
    <button @click="editProfile()">Save</button>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  name: "ProfileEdit",
  data() {
    return {
      username: "",
      email: "",
      password: "",
      bio: "",
      birthdate: "",
    };
  },
  methods: {
    editProfile() {
      axios
        .request({
          url: "http://127.0.0.1:5000/api/users",
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          data: {
            loginToken: cookies.get("session"),
            username: this.username,
            email: this.email,
            password: this.password,
            bio: this.bio,
            birthdate: this.birthdate,
          },
        })
        .then((response) => {
          console.log(response);
          alert("updated successfully");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
</style>