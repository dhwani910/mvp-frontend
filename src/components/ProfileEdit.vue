<template>
  <div>
    <!-- user can edit their profile.... -->
    <div>
    <button @click="shouldShow = !shouldShow" >
      <i class="fas fa-user-edit"></i>
    </button>
    <div v-if="shouldShow">
    <div class="edit">
      <div class="box">
        <div class="form">
          <h3>Edit Profile</h3>
          <form>
            <div class="inputBx">
              <input type="text" v-model="username" placeholder="Username"/>
              <i class="fas fa-user"></i>
            </div>
            <div class="inputBx">
              <input type="text" v-model="email" placeholder="E-mail"/>
              <i class="fas fa-envelope"></i>
            </div>
            <div class="inputBx">
              <input type="password" v-model="password" placeholder="password" />
              <i class="fas fa-lock"></i>
            </div>
            <div class="inputBx">
              <input type="text" v-model="bio" placeholder="Bio" />
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
              <input @click="editProfile()" type="submit" value="save"/>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  </div>
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
      shouldShow: false,
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
          this.shouldShow = false;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
button{
  height: 50px;
  width: 50px;
}
.box{
  height: 426px;
}
.edit{
  display: flex;
  justify-content: center;
  align-items: center;
}
.box .form h3{
  color: black;
}
.box .form .inputBx input::placeholder{
  color: black;
}
.box .form .inputBx input{
  color: black;
}
.box .form .inputBx input[type="submit"]{
  background: rgb(230, 152, 152);
  color: #111;
  max-width: 100px;
  padding: 8px 10px;
  box-shadow: none;
  font-weight: 500;
  letter-spacing: 1px;
  cursor: pointer;
}

</style>