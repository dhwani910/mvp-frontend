<template>
    <div>
        <!-- home page... -->
        <div class="container">
            <span class="text1">welcome In</span>
            <span class="text2">MVP Project</span>  
        </div>
        <div class="logo">
            <img src="@/assets/logo.png" alt="logo">
        </div>
      
      <div class="right">
        <div class="profile">
            <button class="button is-primary" @click="profile">
                User Profile
               <!-- <i class="fal fa-user"></i> -->
            </button>
        </div>
        <div class="signout">
            <signout-button></signout-button>
        </div>
        
        <div class="game">
            <button class="button is-primary" @click="game">Play Game</button>
        </div>
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
        game(){
            this.$router.push("/game");
        }
    },
}
</script>

<style scoped>
*{
    padding: 0;
    margin: 0;
    font-family: sans-serif;

}
body{
    background: #000;
}
.container{
    text-align: center;
    position: absolute;
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
}
.container span{
    text-transform: uppercase;
    display: block;
}
.container .text1{
    color: white;
    font-size: 60px;
    font-weight: 700;
    letter-spacing: 8px;
    margin-bottom: 20px;
    background: black;
    position: relative;
    animation: text 3s 1;
}
.container .text2{
    color: black;
    font-size: 30px;
    font-weight: 700;
   
}
.profile{
    position: absolute;
    font-size: 20px;
    font-weight: 300;
    top: 17px;
    right: 17px;
}
.signout{
    position: absolute;
    font-size: 20px;
    font-weight: 300;
    top: 60px;
    right: 17px;
}
.logo{
    position: relative;
    top: 370px;
    text-align: center;
}
.game{
    position: relative;
    font-size: 20px;
    font-weight: 300;
    top: 400px;
}


@keyframes text{
    0%{
        color: black;
        margin-bottom: -40px;
    }
    30%{
        letter-spacing: 25px;
        margin-bottom: -40px;
    }
    85%{
        letter-spacing: 8px;
        margin-bottom: -40px;
    }
}



</style>