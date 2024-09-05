<template>

    <h1>Video Games!</h1>
    <h3>Select your favorite console:</h3>
    <button @click="MostrarJuegosPlayStation5" style="margin: 10px; width: 120px;"><h4>{{Consola1}}</h4></button>
    <button @click="MostrarJuegosXbox" style="margin: 10px; width: 120px;"><h4>{{Consola2}}</h4></button>
    <button @click="MostrarJuegosNintendo" style="margin: 10px; width: 120px;"><h4>{{Consola3}}</h4></button>
    <h6>{{ mensaje }}</h6>
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
                this.mensaje = `Estos son los video juegos de la consola ${this.Consola1}`;
            },
            MostrarJuegosXbox() {
                this.mensaje = `Estos son los video juegos de la consola ${this.Consola2}`;
            },
            MostrarJuegosNintendo() {
                this.mensaje = `Estos son los video juegos de la consola ${this.Consola3}`;
            },
        },
        data()
        {
            return {
                mensaje:""
            }
        }
    }
</script>

<style>
/*Todas las etiquetas de estilo*/
</style>