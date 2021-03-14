<template>
    <div>
        <h1>Reviews Of Type Master</h1>
        
        <game-likes :gameId="1"></game-likes>
    </div>
</template>

<script>
import GameLikes from "@/components/GameLikes.vue"
export default {
    name: 'RatePage',
    components: {
        GameLikes
    }
}
</script>

<style scoped>

</style>