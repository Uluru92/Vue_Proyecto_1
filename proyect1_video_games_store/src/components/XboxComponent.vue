<template>
    <div>
        <ul class="list-group">
            <button><li class="list-group-item">{{VideoGamesXbox[0]}}</li></button>
            <button><li class="list-group-item">{{VideoGamesXbox[1]}}</li></button>
            <button><li class="list-group-item">{{VideoGamesXbox[2]}}</li></button>
            <button><li class="list-group-item">{{VideoGamesXbox[3]}}</li></button>
            <button><li class="list-group-item">{{VideoGamesXbox[4]}}</li></button>
        </ul>
    </div>
 </template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';

export default defineComponent({
    methods: {
        selectConsola(consolaSelected: string)
        {
            this.$emit('consolaSelected', consolaSelected);         
        },
        async llamarApiVideoJuegos(){
            const respuesta = await axios.get('http://localhost:3015/api/route/ObtenerTodosLosVideoJuegos')
            console.log(respuesta);

            this.vectorVideoJuegos = respuesta.data.DetalleRespuesta;
                
            const vectorGameNamesXbox = [] as string[];

            for (let i = 0; i < this.vectorVideoJuegos.length; i++)
            {
                if (this.vectorVideoJuegos[i].consola === "Xbox")
                {
                    const gameNameActual = this.vectorVideoJuegos[i].gameName;
                    if (!vectorGameNamesXbox.includes(gameNameActual))
                    {
                        vectorGameNamesXbox.push(gameNameActual);
                    }
                    this.VideoGamesXbox = vectorGameNamesXbox
                    console.log(vectorGameNamesXbox)
                    console.log(this.VideoGamesXbox)
                }
            }
        }
    },
    data() {
        return {
            VideoGames: '' as string,
            VideoGamesXbox: [] as string[],
            vectorVideoJuegos: [] as any,
        }
    },
    mounted()
    {
        this.llamarApiVideoJuegos();
    }
});
</script>

<style>
</style>