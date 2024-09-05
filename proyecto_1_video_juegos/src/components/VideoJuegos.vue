<template>

    <h1>Video Games!</h1>
    <h3>Select your favorite console:</h3>
    <button @click="MostrarJuegosPlayStation5" style="margin: 10px; width: 120px;"><h4>{{Consola1}}</h4></button>
    <button @click="MostrarJuegosXbox" style="margin: 10px; width: 120px;"><h4>{{Consola2}}</h4></button>
    <button @click="MostrarJuegosNintendo" style="margin: 10px; width: 120px;"><h4>{{Consola3}}</h4></button>

</template>

<script>
export default
    {
        props: {
            Consola1: String,
            Consola2: String,
            Consola3: String
        },
        methods:
        {
            MostrarJuegosPlayStation5() {
                alert(`Estos son los video juegos de la consola ${this.Consola1}`)
            },
            MostrarJuegosXbox() {
                alert(`Estos son los video juegos de la consola ${this.Consola2}`)
            },
            MostrarJuegosNintendo() {
                alert(`Estos son los video juegos de la consola ${this.Consola3}`)
            },

        }
    }
</script>

<style>
/*Todas las etiquetas de estilo*/
</style>