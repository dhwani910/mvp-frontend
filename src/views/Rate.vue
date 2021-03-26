<template>
    <div>
        <div class="home">
            <button class="button is-primary" @click="home">Back to Home</button>
        </div>
        <h1 class="title is-1">Reviews Of Type Master</h1>
        <!-- // Game Likes and Game Review Import...... -->
        <div>
            <game-likes :gameId="1"></game-likes>
        </div>
        <game-review :gameId="1"></game-review>
    </div>
</template>

<script>
import GameLikes from "@/components/GameLikes.vue";
import GameReview from "@/components/GameReview.vue";
export default {
    name: 'RatePage',
    components: {
        GameLikes,
        GameReview
    },
    methods: {
        home(){
            this.$router.push("/feed")
        }
    }
}
</script>

<style scoped>
.home{
    position: absolute;
    font-size: 20px;
    font-weight: 300;
    top: 17px;
    left: 17px;
}


</style>