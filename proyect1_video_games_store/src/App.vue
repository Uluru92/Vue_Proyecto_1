<script setup lang="ts">
import NewsView from './views/NewsView.vue';
</script>

<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/welcome">Welcome</router-link> |
    <router-link to="/news">News</router-link>
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
