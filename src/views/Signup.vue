<template>
  <div class="container">
    <!-- sign up form... -->
    <section>
      <div class="box">
        <div class="form">
          <h2>Sign Up</h2>
          <form>
            <div class="inputBx">
              <input type="text" placeholder="Username" v-model="username" />
              <i class="fas fa-user"></i>
            </div>
            <div class="inputBx">
              <input
              type="text"
              placeholder="E-mail"
              v-model="email"
              />
              <i class="fas fa-envelope"></i>
            </div>
            <div class="inputBx">
              <input type="password" placeholder="Password" v-model="password" />
              <i class="fas fa-lock"></i>
            </div>
            <div class="inputBx">
              <input type="text" placeholder="Bio" v-model="bio" />
              <i class="fas fa-book"></i>
            </div>
            <div class="inputBx">
              <input
                type="date"
                v-model="birthdate"
                placeholder="yyyy-mm-dd"
              />
              <i class="fas fa-birthday-cake"></i>
            </div>
            <div class="inputBx">
              <input @click="signupUser" type="submit" value="Sign Up"/>
            </div>
          </form>
          <p>Already Have An Account? <a href="#" @click="signin">Sign In</a></p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  name: "Signup",
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
    signupUser: function () {
      axios
        .request({
          method: "POST",
          url: "http://127.0.0.1:5000/api/users",
          headers: {
            "Content-Type": "application/json",
          },
          data: {
            email: this.email,
            username: this.username,
            password: this.password,
            bio: this.bio,
            birthdate: this.birthdate,
          },
        })
        .then((response) => {
          console.log(response);
          cookies.set("session", response.data.loginToken);
          cookies.set("userId", response.data.userId);
          this.$router.push("/feed");
        })
        .catch((error) => {
          console.log(error);
        });
    },

    signin: function () {
      this.$router.push("/login");
    },
  },
};
</script>

<style lang="scss">

</style>