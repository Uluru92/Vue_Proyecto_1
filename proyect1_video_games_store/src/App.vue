<template>
  <MenuBar></MenuBar>
  <nav>
    <router-link to="/">Welcome</router-link> |
    <router-link to="/news">News</router-link> |
    <router-link to="/consolas">Video Games</router-link> |
    <router-link to="/request">Request</router-link>
  </nav>
  <router-view/>

</template>

<script lang="ts">
  import MenuBar from './components/MenuBar.vue';
  export default ({  
    components: {
      MenuBar
    }
})


</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
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
