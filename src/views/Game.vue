<template>
    <div>
        <h1>game</h1>
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
        }
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

</style>