<template>
    <h1>Estoy en General</h1>
    <div class="container">
        <div class="contenedorVideoGames">
            <h1>Video Games!</h1>
            <h3>Select your favorite console:</h3>
            <button class="btn btn-primary" @click="MensajeJuegosPlayStation5(); habilitarMostrarMensaje()"><h4>{{Consola1}}</h4></button>
            <button class="btn btn-primary" @click="MensajeJuegosXbox(); habilitarMostrarMensaje()" ><h4>{{Consola2}}</h4></button>
            <button class="btn btn-primary" @click="MensajeJuegosNintendo(); habilitarMostrarMensaje()"><h4>{{Consola3}}</h4></button>    
            <h6 class="hiddenMessage" v-if="!monstrarMensaje">{{ mensaje }}</h6>
            <h6 v-else></h6>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    interface ComponentData
    {
        mensaje: string,
        mostrarMensaje: boolean,
    }
        
    export default defineComponent({

        props: {
        Consola1: String,
        Consola2: String,
        Consola3: String,
        },
        methods:
        {
            MensajeJuegosPlayStation5() {
                this.mensaje = `Estos son los video juegos de la consola: ${this.Consola1}`;
            },
            MensajeJuegosXbox() {
                this.mensaje = `Estos son los video juegos de la consola: ${this.Consola2}`;
            },
            MensajeJuegosNintendo() {
                this.mensaje = `Estos son los video juegos de la consola: ${this.Consola3}`;
            },
            habilitarMostrarMensaje() {
                this.monstrarMensaje = !this.monstrarMensaje;
            }
        },
        data()
        {
            return {
                mensaje: "",  
                monstrarMensaje: true,
            }
        }
        
    })
</script>

<style>
    .contenedorVideoGames
    {
        align-items: center;
        object-position: center;
        margin: 10px 0px 70px;
        padding: 10px;
        background-color: rgb(0, 0, 0);
        box-shadow:60px 50px 40px rgb(255, 253, 119);
        color: aliceblue;
    }
    .btn-primary  {
        margin: 10px; 
        width: 180px; 
        height: 60px;
    }
    .hiddenMessage{
        align-items: center;
        object-position: center;
        margin: 10px 0px 70px;
        padding: 10px;
        background-color: rgb(221, 255, 0);
        box-shadow:60px 50px 40px rgb(0, 0, 0);
        color: rgb(0, 0, 0);
    }
</style>