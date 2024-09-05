<template>

    <h1>Video Games!</h1>
    <h3>Select one of our consoles:</h3>
    <h4>{{Consola1}}</h4>
    <h4>{{Consola2}}</h4>
    <h4>{{Consola3}}</h4>

</template>

<script>
export default
    {
        props: {
            Consola1: String,
            Consola2: String,
            Consola3: String
        }
    }
</script>

<style>
/*Todas las etiquetas de estilo*/
</style>