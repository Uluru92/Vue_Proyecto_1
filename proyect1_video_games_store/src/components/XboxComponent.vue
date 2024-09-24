<template>
    <div>
        <ul class="list-group" style="padding-left: 30px;padding-right: 30px">
            <button><li class="buttonSelected">{{VideoGamesXbox[0]}}</li></button>
            <button><li class="buttonSelected">{{VideoGamesXbox[1]}}</li></button>
            <button><li class="buttonSelected">{{VideoGamesXbox[2]}}</li></button>
            <button><li class="buttonSelected">{{VideoGamesXbox[3]}}</li></button>
            <button><li class="buttonSelected">{{VideoGamesXbox[4]}}</li></button>
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
.buttonSelected {
    color: #000000;
    transition: color 1s,
}
.buttonSelected:hover {
    color: #15ff00;
    background-color: #000000;
}
</style>