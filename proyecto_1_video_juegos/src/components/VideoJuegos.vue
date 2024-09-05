<template>
    <div style="background-color:greenyellow; margin: 2px; padding: 15px;">
        <h1>Video Games!</h1>
        <h3>Select your favorite console:</h3>
        <button class="btn btn-primary" @click="MostrarJuegosPlayStation5" style="margin: 10px; width: 180px; height: 60px;"><h4>{{Consola1}}</h4></button>
        <button class="btn btn-primary" @click="MostrarJuegosXbox" style="margin: 10px; width: 180px; height: 60px;"><h4>{{Consola2}}</h4></button>
        <button class="btn btn-primary" @click="MostrarJuegosNintendo" style="margin: 10px; width: 180px; height: 60px;"><h4>{{Consola3}}</h4></button>
        <h6>{{ mensaje }}</h6>
    </div>
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