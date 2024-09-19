<template>
    <div class="container">
        <div class="contenedorVideoGames">
            <h1>Video Games!</h1>
            <h3>Select your favorite console:</h3>
            <button class="btn btn-primary" @click="MensajeJuegosPlayStation5(); habilitarMostrarMensaje(); cambiarColor(1)"><h4>{{Consola1}}</h4></button>
            <button class="btn btn-primary" @click="MensajeJuegosXbox(); habilitarMostrarMensaje(); cambiarColor(2)" ><h4>{{Consola2}}</h4></button>
            <button class="btn btn-primary" @click="MensajeJuegosNintendo(); habilitarMostrarMensaje(); cambiarColor(3)"><h4>{{Consola3}}</h4></button>    
            <h6 class="hiddenMessage" v-if="!monstrarMensaje"><h6>Estos son los video juegos de la consola:</h6><h6 :style="{color:colorConsola}">{{ mensaje }}</h6></h6>
            <h6 v-else></h6>
        </div>
    </div>
    <PlayStation5Component></PlayStation5Component>
    <NintendoComponent></NintendoComponent>
    <XboxComponent></XboxComponent>
    
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PlayStation5Component from '@/components/PlayStation5Component.vue';
import NintendoComponent from '@/components/NintendoComponent.vue';
import XboxComponent from '@/components/XboxComponent.vue';


    interface ComponentData
    {
        mensaje: string,
        mostrarMensaje: boolean,
        colorConsola: string,
    }
        
export default defineComponent({
        components: {
        PlayStation5Component,
        NintendoComponent,
        XboxComponent,
    },

        props: {
        Consola1: String,
        Consola2: String,
        Consola3: String,
        },
        methods:
        {
            MensajeJuegosPlayStation5() {
                this.mensaje = `${this.Consola1}`;
            },
            MensajeJuegosXbox() {
                this.mensaje = `${this.Consola2}`;
            },
            MensajeJuegosNintendo() {
                this.mensaje = `${this.Consola3}`;
            },
            habilitarMostrarMensaje() {
                this.monstrarMensaje = !this.monstrarMensaje;
            },
            cambiarColor(numero: number)
            {
                if (numero == 1)
                {
                    this.colorConsola = 'blue';
                }
                else if (numero == 2)
                {
                    this.colorConsola = 'purple';
                }
                else
                {
                    this.colorConsola = 'red';
                }
            }
        },
        data()
        {
            return {
                mensaje: "",  
                monstrarMensaje: true,
                colorConsola: 'black',
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