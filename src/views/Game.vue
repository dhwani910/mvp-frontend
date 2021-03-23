<template>
    <div>
        <div class="home">
            <button @click="home">Back to Home</button>
        </div>
        <div class="rate">
            <button @click="rate">Rate this Game</button>
        </div>

        <overview />
        <upgrades />
    </div>
</template>

<script>
import Overview from '@/components/Overview.vue';
import Upgrades from '@/components/Upgrades.vue';
export default {
    name: 'GamePage',
    components: {
        Overview,
        Upgrades
    },
    methods: {
        coding(){
             this.$store.commit('incrementBytes', this.$store.state.bpk);
        },
        loop(){
            //Game Loop
            this.$store.commit('bytesPerSecond');
            this.levelManager();
            requestAnimationFrame(this.loop);
        },
        levelManager(){
            if (this.$store.getters.bytesUntilLevelUp <= 0){
                this.$store.commit('levelUp');
            }
        },
        home(){
            this.$router.push("/feed")
        },
        rate(){
            this.$router.push("/rate");
        },
    },
    created(){
        this.loop();
        window.addEventListener('keypress', this.coding);
    },
    destroyed(){
        window.removeEventListener('keypress', this.coding);
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
.rate{
    position: absolute;
    font-size: 20px;
    font-weight: 300;
    top: 17px;
    right: 17px;
}

</style>