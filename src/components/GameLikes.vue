<template>
<!-- user can like or unlike game and can see other's like.... -->
    <div class="like-container">
        <button class="button is-primary" @click="likeGame()" v-if="isLiked == false">
            <i class="fas fa-thumbs-up"></i>
        </button>
        <button class="button is-primary" @click="unlikeGame" v-else-if="isLiked == true">
            <i class="fas fa-thumbs-down"></i>
        </button>
        <span>  {{likesAmount}}</span>
        
    </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
    name: "GameLikes",
    data(){
        return {
            likesNum: [],
            isLiked: false,
            likesAmount: 0,
        };
    },
    props: {
        gameId: Number,
    },
    mounted(){
        this.getLikes();
    },
    methods: {
        likeGame() {
            this.isLiked = true,
            axios.request({
                url: "http://127.0.0.1:5000/api/game-like",
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                data: {
                    loginToken: cookies.get("session"),
                    gameId: this.gameId,
                },
            }).then((response) => {
                console.log(response);
                this.likesAmount++;
            }).catch((error) => {
                console.log(error);
            });
        },
        getLikes() {
            axios.request ({
                url: "http://127.0.0.1:5000/api/game-like",
                mathod: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
                params: {
                    gameId: this.gameId,
                },
            }).then((response) => {
                console.log(response);
                this.likesNum = response.data;
                this.likesAmount = this.likesNum.length;

                let currentUser = cookies.get("userId");
                for (let i = 0; i < this.likesNum.length; i++) {
                    if (currentUser == this.likesNum[i].userId) {
                        this.isLiked = true;
                        return;
                    }
                }
            }).catch((error => {
                console.log(error);
            }))
        },
        unlikeGame() {
            this.isLiked = false,
            axios.request({
                url: "http://127.0.0.1:5000/api/game-like",
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                data: {
                    loginToken: cookies.get("session"),
                    gameId: this.gameId,
                }, 
            }).then((response) => {
                console.log(response);
                this.likesAmount--;
            }).catch((error) => {
                console.log(error);
            });
        },
    }
}
</script>


<style scoped>
span{
    font-weight: 700;
    font-size: 30px;
}

</style>