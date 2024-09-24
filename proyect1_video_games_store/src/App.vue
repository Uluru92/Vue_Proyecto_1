<script setup lang="ts">

</script>

<template>
  <nav>
    <router-link to="/">Welcome</router-link> |
    <router-link to="/news">News</router-link> |
    <router-link to="/consolas">Video Games</router-link> |
    <router-link to="/request">Request</router-link>

    <NewsView
    Noticia1="Spacestation Gaming take ALGS Split 2 Playoff title">
    </NewsView>
  </nav>
  <router-view/>
</template>

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
