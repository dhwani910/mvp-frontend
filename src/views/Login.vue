// https://www.youtube.com/c/TheNetNinja/videos 


<template>
  <div class="container">
    
    <div class="details">
      <p>Email</p>
      <input type="text" id="email-input" v-model="email" />
      <p>Password</p>
      <input type="password" id="password-input" v-model="password" /><br />
    </div>
    <button @click="loginUser" class="button is-info">Login</button>
    <h5 id="login-status">{{ loginStatus }}</h5>
    <p>Not a Member? sign up</p>
    <button class="button is-info" @click="signup">Sign Up</button>
     
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      loginStatus: "",
    };
  },
  methods: {
    loginUser: function () {
      this.loginStatus = "Loading..";
      axios
        .request({
          method: "POST",
          url: "http://127.0.0.1:5000/api/login",
          headers: {
            "Content-Type": "application/json",
          },
          data: {
            email: this.email,
            password: this.password,
            loginStatus: this.loginStatus,
          },
        })
        .then((response) => {
          this.loginStatus = "Success";
          cookies.set("session", response.data.loginToken);
          cookies.set("userId", response.data.userId);
          this.$router.push("/feed");
        })
        .catch((error) => {
          console.log(error);
          this.loginStatus = "Error";
          alert("Invalid email or password");
        });
    },
    signup() {
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss">
#img {
  margin-top: 1rem;
}
#text {
  p {
    font-size: 1.5rem;
  }
}
.details p {
  margin-bottom: 0;
}
input {
  margin-bottom: 1rem;
  width: 60%;
}
button {
  margin-bottom: 1rem;
}
</style>