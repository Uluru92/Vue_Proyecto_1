<template>
    <div>
        <ul class="list-group">
            <button><li class="list-group-item">{{VideoGamesNintendo[0]}}</li></button>
            <button><li class="list-group-item">{{VideoGamesNintendo[1]}}</li></button>
            <button><li class="list-group-item">{{VideoGamesNintendo[2]}}</li></button>
            <button><li class="list-group-item">{{VideoGamesNintendo[3]}}</li></button>
            <button><li class="list-group-item">{{VideoGamesNintendo[4]}}</li></button>
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
                
            const vectorGameNamesNintendo = [] as string[];

            for (let i = 0; i < this.vectorVideoJuegos.length; i++)
            {
                if (this.vectorVideoJuegos[i].consola === "Nintendo")
                {
                    const gameNameActual = this.vectorVideoJuegos[i].gameName;
                    if (!vectorGameNamesNintendo.includes(gameNameActual))
                    {
                        vectorGameNamesNintendo.push(gameNameActual);
                    }
                    this.VideoGamesNintendo = vectorGameNamesNintendo
                    console.log(vectorGameNamesNintendo)
                    console.log(this.VideoGamesNintendo)
                }
            }
        }
    },
    data() {
        return {
            VideoGames: '' as string,
            VideoGamesNintendo: [] as string[],
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