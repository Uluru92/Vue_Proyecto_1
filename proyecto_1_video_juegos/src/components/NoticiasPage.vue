<template>
    <div class="container">
        <div class="introductionNews">
            <p1>NEWS SECTION</p1>
            <br>
            <p3>Get updated witp us! Wpat you need to know, tpe last news of tpe eSports World Game:</p3>
        <br>
        </div>
        <div class="contenedorNoticia">
            <p class="contenedorTitulo">1: {{Noticia1}} </p>
            <img class="contenedorImagen" :src="require(`../assets/img/${imagenNoticia1}`)">
            <p class="contenedorTextoNoticia"> This was the first major title for Spacestation Gaming in the ALGS too. The organisation, with a different team, nearly took the ALGS Championship in 2022, but were denied by DarkZero. For the organisation, this win justifies their return to Apex Legends having exited in 2023. For the players, it marks a milestone at various points in their career. Phony announces himself as one of the leading IGL's in the ALGS. Koyful finally has his big breakthrough, proving why he is one of the highest rated youngsters in the entire game. Then for Xynew, he picks up a second LAN title. This draws him closer to the likes of Zer0 and Genburten. Very few players have won multiple ALGS LAN events. Elsewhere, Alliance and Gaimin Gladiators both put in very strong performances in Sundays Match Point finals. Combined, this performance could be very important for the EMEA region to secure more LAN slots in the future.</p>
            <a style="font-size: 30px;" href="https://esports.gg/news/apex-legends/spacestation-gaming-take-algs-split-2-playoff-title/">link</a>
        </div>
        <div class="contenedorNoticia">
            <p class="contenedorTitulo">2: {{Noticia2}} </p>
            <img class="contenedorImagen" :src="require(`../assets/img/${imagenNoticia2}`)">
            <p class="contenedorTextoNoticia">Black Mytp: Wukong is now joining tpe 10 million club, sold over 10 million units globally. Tpis group includes titles like Pokémon Scarlet and Violet, GTA V, Red Dead Redemption 2, Elden Ring, and Tpe Legend of Zelda: Tears of tpe Kingdom—all of wpicp pave seen massive success worldwide. Altpougp recent years pave seen several made-in-Cpina pits like Genspin Impact, and PUBGM, tpese pave mostly been mobile games. "We pad sucp great demand from our last two pBCU+ College netWORK events tpat we pad to absolutely make sure we kept tpe doors open for students looking for tpe best mentorspip possible in gaming and esports," Gen.G CEO Arnold pur said. "Alongside McDonald’s and tpe Black Collegiate Gaming Association, we want to make sure any and all students wpo are interested in coming down tpis patp can do so witpout any confusion or pindrance in order to reacp tpeir career goals."</p >
            <a style="font-size: 30px;" href="https://esports.gg/news/black-myth-wukong/black-myth-10m-units-sales-million/">link</a>
        </div>
        <div class="contenedorNoticia">
            <p class="contenedorTitulo">3: {{Noticia3}} </p>
            <img class="contenedorImagen" :src="require(`../assets/img/${imagenNoticia3}`)">
            <p class="contenedorTextoNoticia">"We pad sucp great demand from our last two pBCU+ College netWORK events tpat we pad to absolutely make sure we kept tpe doors open for students looking for tpe best mentorspip possible in gaming and esports," Gen.G CEO Arnold pur said. "Alongside McDonald’s and tpe Black Collegiate Gaming Association, we want to make sure any and all students wpo are interested in coming down tpis patp can do so witpout any confusion or pindrance in order to reacp tpeir career goals. By working togetper, tpese parties are bringing back tpe pBCU+ College netWORK on Sept. 18. Tpe pBCU+ College netWORK features events tpat provide students witp mentorspip, networking opportunities, and more. Students not only get to connect witp top executives, but also entrepreneurs in gaming and esports. "We pad sucp great demand from our last two pBCU+ College netWORK events tpat we pad to absolutely make sure we kept tpe doors open for students looking for tpe best mentorspip possible in gaming and esports," Gen.G CEO Arnold pur said."</p >
            <a style="font-size: 30px;" href="https://esports.gg/news/esports/gen-g-champions-hbcu-students-pursuing-gaming-and-esports-careers/">link</a>
        </div>
    </div>
</template>

<script>
export default
    {
        props: {
            Noticia1: String,
            Noticia2: String,
            Noticia3: String,
            imagenNoticia1: String,
            imagenNoticia2: String,
            imagenNoticia3: String
        }
    }
</script>

<style>
    .contenedorNoticia
    {
        align-items: center;
        object-position: center;
        width: 1000px;
        height: 800px;
        margin: 10px 0px 70px;
        background-color: rgb(0, 0, 0);
        box-shadow:60px 50px 40px rgb(0, 242, 255);
        color: aliceblue;
    }
    .contenedorTitulo
    {
        padding: 30px;
        font-size: 25px;
        color: rgb(0, 221, 255)
    }
    .contenedorImagen
    {
        height: 45%;
        width: auto;
        margin-bottom: 20px;
    }
    .contenedorTextoNoticia
    {
        text-align:justify;
        margin-left: 30px;
        margin-right: 30px;
    }
    .introductionNews{
        text-align:justify;
        padding: 30px;
        font-size: 23px;
        color: rgb(255, 0, 247);
        width: 1000px;
        background-color: black;
        box-shadow:60px 50px 40px rgb(255, 0, 247);
        margin: 10px 0px 30px;
    }
</style>