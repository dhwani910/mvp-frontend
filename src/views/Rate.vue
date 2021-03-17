<template>
    <div>
        <h1>Reviews Of Type Master</h1>
        
        <game-likes :gameId="1"></game-likes>
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
}
</script>

<style scoped>

</style>