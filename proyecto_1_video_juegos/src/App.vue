<template>
  <img alt="Vue logo" src="./assets/img/BlackMythWukong.jpg">
  <WelcomePage>
    
  </WelcomePage>
  <NoticiasPage
  Noticia1="Spacestation Gaming take ALGS Split 2 Playoff title"
  Noticia2= "Black Myth: Wukong has sold 10 million units across all platforms"
  Noticia3="Gen.G champions HBCU students pursuing gaming and esports careers"  
  imagenNoticia1="noticia1.jpg"
  imagenNoticia2="noticia2.jpg"
  imagenNoticia3="noticia3.jpg"
  ></NoticiasPage>
  <VideoJuegos
  Consola1="Play Station 5"
  Consola2="Xbox"
  Consola3="Nintendo"
  ></VideoJuegos>
  <ContactoSolicitudes
  Visitor="Adolfo"></ContactoSolicitudes>
</template>

<script>

import WelcomePage from './components/WelcomePage.vue';
import NoticiasPage from './components/NoticiasPage.vue'
import VideoJuegos from './components/VideoJuegos.vue';
import ContactoSolicitudes from './components/ContactoSolicitudes.vue';


export default {
  name: 'App',
  components: {
    WelcomePage,
    NoticiasPage,
    VideoJuegos,
    ContactoSolicitudes
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
