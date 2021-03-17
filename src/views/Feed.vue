<template>
    <div>
      <h1>welcome</h1>
      <div class="right">
        <div class="profile">
            <h1>User Profile</h1>
            <button class="button is-info" @click="profile">
               <i class="fas fa-user"></i>
            </button>
        </div>
        <signout-button></signout-button>
        <button @click="game">Play Game</button>
        <button class="rate" @click="rate">Rate this Game</button>
      </div>
    </div>
</template>

<script>
import SignoutButton from "../components/Signout.vue";
export default {
    name: 'FeedPage',
     components: {
        SignoutButton,
    },
    methods: {
        profile() {
           this.$router.push("/profile");
        },
        rate(){
            this.$router.push("/rate");
        },
        game(){
            this.$router.push("/game");
        }
    },
}
</script>

<style scoped>
/* .right{
    position: absolute;
    margin-top: 0;
    margin-left: 0;
} */
/* .rate{
    position: absolute;
    margin-bottom: 0;
} */

</style>