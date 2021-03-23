<template>
    <div>
        <div class="home">
            <button @click="home">Back to Home</button>
        </div>
        <h1>Reviews Of Type Master</h1>
        <!-- // Game Likes and Game Review Import...... -->
        <div class="like">
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