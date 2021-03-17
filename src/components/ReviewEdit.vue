<template>
    <div>
        
        <div>
            <button @click="shouldShow = !shouldShow">
                <i class="fas fa-pen"></i>
            </button>
            <div v-if="shouldShow">
                <textarea v-model="editedReviewContent"></textarea>
                <button @click="editReview()">
                    <i class="fas fa-check"></i>
                </button>

            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
    name: 'ReviewEdit',
    props: {
        reviewId: Number,
    },
    data() {
        return {
            loginToken: cookies.get("session"),
            editedReviewContent: "",
            shouldShow: false,
        };
    },
    methods: {
        editReview() {
            axios.request({
                url: "http://127.0.0.1:5000/api/game-review",
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                data: {
                    loginToken: cookies.get("session"),
                    reviewId: this.reviewId,
                    content: this.editedReviewContent,
                },
            }).then((response) => {
                console.log(response);
                this.shouldShow = false;
                alert("edited");
            }).catch((error) => {
                console.log(error);
            })
        }
    }
}
</script>


<style scoped>


</style>