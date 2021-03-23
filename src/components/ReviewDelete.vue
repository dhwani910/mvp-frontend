<template>
    <div>
        <!-- user can delete review about game... -->
        <button @click="reviewDelete">
            <i class="fas fa-trash-alt"></i>
        </button>
    </div>
</template>

<script>
import cookies from "vue-cookies";
import axios from 'axios'
export default {
    name: 'ReviewDelete',
    props: {
        reviewId: Number,
    },
    methods: {
        reviewDelete() {
            axios.request({
                url: "http://127.0.0.1:5000/api/game-review",
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                data: {
                    loginToken: cookies.get("session"),
                    reviewId: this.reviewId,
                },
            }).then((response) => {
                console.log(response);
            }).catch((error) => {
                console.log(error);
            })
        }
    }
}
</script>