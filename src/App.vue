<template>
  <div id="app">
    <overview />
    <upgrades />
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
   
  </div>
</template>

<script>
import Overview from './components/Overview.vue';
import Upgrades from './components/Upgrades.vue';

export default {
  name: "app",
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

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'montserrat', sans-serif;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
