<template>

    <h1>News!</h1>
    <h3>Get updated with us! What you need to know, the last news of the eSports World Game:</h3>
    <h4>1: {{Noticia1}} <a  href="https://esports.gg/news/apex-legends/spacestation-gaming-take-algs-split-2-playoff-title/" target="_blank">link</a></h4>
    <h4>2: {{Noticia2}} <a  href="https://esports.gg/news/black-myth-wukong/black-myth-10m-units-sales-million/" target="_blank">link</a></h4>
    <h4>3: {{Noticia3}} <a  href="https://esports.gg/news/esports/gen-g-champions-hbcu-students-pursuing-gaming-and-esports-careers/" target="_blank">link</a></h4>
    
</template>

<script>
export default
    {
        props: {
            Noticia1: String,
            Noticia2: String,
            Noticia3: String
        }
    }
</script>

<style>
/*Todas las etiquetas de estilo*/
</style>