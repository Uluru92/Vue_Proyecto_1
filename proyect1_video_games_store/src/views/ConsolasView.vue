<template>
    <div class="container">
        <div class="contenedorVideoGames">
            <h3>Select your favorite console:</h3>
            <button class="btn btn-primary" @click="MensajeJuegosPlayStation5();habilitarMensaje(1)"><h4>{{Consola1}}</h4></button>
            <button class="btn btn-primary" @click="MensajeJuegosXbox();habilitarMensaje(2)" ><h4>{{Consola2}}</h4></button>
            <button class="btn btn-primary" @click="MensajeJuegosNintendo();habilitarMensaje(3)"><h4>{{Consola3}}</h4></button>    
        </div>
        <div v-if="PlayStation5Flag===true">
            <h6 class="hiddenMessage" v-if="!monstrarMensaje">
                <h6 :style="{color:colorConsola}">{{ mensaje }}</h6>    
                <h6>Select your favorite Video Game:</h6>
                <h6><PlayStation5Component></PlayStation5Component></h6>
            </h6>
        </div>
        <div v-if="XboxFlag===true">
            <h6 class="hiddenMessage" v-if="!monstrarMensaje">
                <h6 :style="{color:colorConsola}">{{ mensaje }}</h6>
                <h6>Select your favorite Video Game:</h6>
                <h6><XboxComponent></XboxComponent></h6>
            </h6>
        </div>
        <div v-if="NintendoFlag===true">
            <h6 class="hiddenMessage" v-if="!monstrarMensaje">
                <h6 :style="{color:colorConsola}">{{ mensaje }}</h6>
                <h6>Select your favorite Video Game:</h6>
                <h6><NintendoComponent></NintendoComponent></h6>
            </h6>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PlayStation5Component from '@/components/PlayStation5Component.vue';
import NintendoComponent from '@/components/NintendoComponent.vue';
import XboxComponent from '@/components/XboxComponent.vue';
        
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
            habilitarMensaje(numero: number)
            {
                if (numero == 1)
                {
                    this.colorConsola = 'blue';
                    this.PlayStation5Flag = true;
                    this.XboxFlag = false;
                    this.NintendoFlag = false;
                    this.monstrarMensaje = !this.monstrarMensaje;
                }
                else if (numero == 2)
                {
                    this.colorConsola = 'purple';
                    this.XboxFlag = true;
                    this.PlayStation5Flag = false;
                    this.NintendoFlag = false;
                    this.monstrarMensaje = !this.monstrarMensaje;
                }
                else
                {
                    this.colorConsola = 'red';
                    this.NintendoFlag = true;
                    this.PlayStation5Flag = false;
                    this.XboxFlag = false;
                    this.monstrarMensaje = !this.monstrarMensaje;
                }
            }
        },
        data()
        {
            return {
                mensaje: "" as string,  
                monstrarMensaje: true as boolean, 
                colorConsola: 'black' as string,
                PlayStation5Flag: false as boolean,
                XboxFlag: false as boolean,
                NintendoFlag: false as boolean,
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