<template>
    <div>
        <h1>game review</h1>
        <div v-for="review in reviews" :key="review.reviewId">
            <h2>{{review.username}}</h2>
            <p>{{review.content}}</p>
            <review-edit
                v-if="userId == review.userId"
                :reviewId="review.reviewId">
            </review-edit>
            <review-delete
                v-if="(userId == review.userId)"
                :reviewId="review.reviewId">

            </review-delete>
        </div>
        <div>
            <textarea type="text" v-model="reviewContent" placeholder="What Do You Think About This Game??"></textarea>
            <button @click="reviewCreate">
                <i class="fas fa-check"></i>
            </button>
        </div>
        
    </div>
</template>


<script>
import axios from "axios";
import cookies from "vue-cookies";
import ReviewEdit from './ReviewEdit.vue';
import ReviewDelete from './ReviewDelete.vue';
export default {
    name: 'GameReview',
    components: { 
        ReviewEdit,
        ReviewDelete,
    },
    props: {
        gameId: Number,
        reviewId: Number,
    },
    data() {
        return {
            reviews: [],
            userId: cookies.get("userId"),
            reviewContent: "",    
        };
    },
    mounted() {
        this.showReview();
    },
    methods: {
        showReview() {
            axios.request({
                url: "http://127.0.0.1:5000/api/game-review",
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
                params: {
                    gameId: this.gameId,
                },
            }).then((response) => {
                console.log(response);
                this.reviews = response.data;
            }).catch((error) => {
                console.log(error);
            })
        },
        reviewCreate() {
            axios.request({
                url: "http://127.0.0.1:5000/api/game-review",
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                data: {
                    loginToken: cookies.get("session"),
                    gameId: this.gameId,
                    content: this.reviewContent,
                }
            }).then((response) => {
                console.log(response);
                this.reviewContent = "";
                alert("successfully posted");
            }).catch((error) => {
                console.log(error);
            })
        },
        
    }
}
</script>

<style scoped>

</style>