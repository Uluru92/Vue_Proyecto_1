<template>
    <div>
        <ul class="list-group" style="padding: 30px;">
            <button><li class="buttonSelected">{{VideoGamesPlayStation5[0]}}</li></button>
            <button><li class="buttonSelected">{{VideoGamesPlayStation5[1]}}</li></button>
            <button><li class="buttonSelected">{{VideoGamesPlayStation5[2]}}</li></button>
            <button><li class="buttonSelected">{{VideoGamesPlayStation5[3]}}</li></button>
            <button><li class="buttonSelected">{{VideoGamesPlayStation5[4]}}</li></button>
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

            const vectorGameNamesPlayStation5 = [] as string[];

            for (let i = 0; i < this.vectorVideoJuegos.length; i++)
            {
                if (this.vectorVideoJuegos[i].consola === "PlayStation 5")
                {
                    const gameNameActual = this.vectorVideoJuegos[i].gameName;
                    if (!vectorGameNamesPlayStation5.includes(gameNameActual))
                    {
                        vectorGameNamesPlayStation5.push(gameNameActual);
                    }
                    this.VideoGamesPlayStation5 = vectorGameNamesPlayStation5
                    console.log(vectorGameNamesPlayStation5)
                    console.log(this.VideoGamesPlayStation5)
                }
            }
        }
    },
    data() {
        return {
            VideoGames: '' as string,
            VideoGamesPlayStation5: [] as string[],
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