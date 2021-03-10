<template>
  <div>
    <div>
      <h3>{{ deleteStatus }}</h3>
      <div class="delete-container">
        <h4>Delete Profile</h4>
        <p>Password</p>
        <input type="password" id="password-input" v-model="password" />
        <button @click="deleteProfile">
          <i class="fas fa-user-times"></i>Delete
        </button>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  name: "ProfileDelete",
  data() {
    return {
      loginTokin: cookies.get("session"),
      username: "",
      password: "",
      deleteStatus: "",
    };
  },
  methods: {
    deleteProfile() {
      this.deleteStatus = "Loading....";
      axios
        .request({
          url: "http://127.0.0.1:5000/api/users",
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          data: {
            loginToken: cookies.get("session"),
            password: this.password,
          },
        })
        .then((response) => {
          console.log(response);
          this.deleteStatus = "Deleted successfully";
          this.$router.push("/");
          cookies.delete("session");
          cookies.delete("userId");
        })
        .catch((error) => {
          console.log(error);
          this.deleteStatus = "something went wrong";
        });
    },
  },
};
</script>

<style scoped>
</style>