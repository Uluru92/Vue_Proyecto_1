<template>
  <div class="container">
      <div class="contenedorIntro">
          <h1 class="contenedorNombreStore">Uluru eSports Store</h1>
          <br>
          <img class="contenedorImagenMonkeyKing" src="../assets/img/MonkeyKing.jpg">
          <div>
              <p class="contenedorTexto"> We are a small business proudly based in Costa Rica, with a physical store located in San José. We specialize in offering the best video games and related products, both in-store and through online orders. We provide fast and reliable home delivery services, so you can enjoy your favorite games without leaving the comfort of your home. Our hours of operation are Monday to Friday from 11:00 a.m. to 7:00 p.m., and Saturdays from 7:00 a.m. to 12:00 p.m. At Urulu Gaming, your next adventure is just a click away!</p>
          </div>
      </div>
  </div>
</template>

<style>
    .contenedorIntro
    {
        display: flex;
        align-items: center;
        justify-content: center;
        
        margin: 10px 0px 70px;
        background-color: rgb(0, 0, 0);
        box-shadow:60px 50px 40px rgb(255, 0, 0);
        color: aliceblue;
    }
    .contenedorTexto
    {
        text-align: center;
        padding: 40px;
    }
    .contenedorNombreStore
    {
        padding: 30px;
        font-size: 55px;
        color: rgb(255, 0, 0)
    }
    .contenedorImagenMonkeyKing
    {
        height: 100%;
        width: auto;
    }
</style>