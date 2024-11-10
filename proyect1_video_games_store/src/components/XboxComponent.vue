<template>
    <div>
        <div class="list-group" style="padding-left: 30px;padding-right: 30px">
            <button @click="showInfo(1)" class="buttonSelected">{{VideoGamesXbox[0]}}</button>
            <button @click="showInfo(2)" class="buttonSelected">{{VideoGamesXbox[1]}}</button>
            <button @click="showInfo(3)" class="buttonSelected">{{VideoGamesXbox[2]}}</button>
            <button @click="showInfo(4)" class="buttonSelected">{{VideoGamesXbox[3]}}</button>
            <button @click="showInfo(5)" class="buttonSelected">{{VideoGamesXbox[4]}}</button>
        </div>   
        <div v-if="showInfo_1===true" class="GameSelect">
            <h6>Video Game Selected -  {{VideoGamesXbox[0]}}</h6>
            <h6>Year: {{LanzamientoGame[0]}}</h6>
            <img v-bind:src="imagenXbox" style="width: 50%; height: 50%;" class="contenedorImagen">
        </div>
        <div v-if="showInfo_2===true" class="GameSelect">
            <h6>Video Game Selected -  {{VideoGamesXbox[1]}}</h6>
            <h6>Year: {{LanzamientoGame[1]}}</h6>
            <img style="width: 50%; height: 50%;" class="contenedorImagen" src="../assets/img/xbox.png">
        </div>
        <div v-if="showInfo_3===true" class="GameSelect">
            <h6>Video Game Selected -  {{VideoGamesXbox[2]}}</h6>
            <h6>Year: {{LanzamientoGame[2]}}</h6>
            <img style="width: 50%; height: 50%;" class="contenedorImagen" src="../assets/img/xbox.png">
        </div>
        <div v-if="showInfo_4===true" class="GameSelect">
            <h6>Video Game Selected -  {{VideoGamesXbox[3]}}</h6>
            <h6>Year: {{LanzamientoGame[3]}}</h6>
            <img style="width: 50%; height: 50%;" class="contenedorImagen" src="../assets/img/xbox.png">
        </div>
        <div v-if="showInfo_5===true" class="GameSelect">
            <h6>Video Game Selected -  {{VideoGamesXbox[4]}}</h6>
            <h6>Year: {{LanzamientoGame[4]}}</h6>
            <img style="width: 50%; height: 50%;" class="contenedorImagen" src="../assets/img/xbox.png">
        </div>
    </div>
 </template>
<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';

export default defineComponent({
    methods: {
        selectConsola(consolaSelected: string) {
            this.$emit('consolaSelected', consolaSelected);
        },
        async llamarApiVideoJuegos() {
            const respuesta = await axios.get('http://localhost:3015/api/route/ObtenerTodosLosVideoJuegos')

            this.vectorVideoJuegos = respuesta.data.DetalleRespuesta;

            const vectorGameNamesXbox = [] as string[];


            for (let i = 0; i < this.vectorVideoJuegos.length; i++) {
                if (this.vectorVideoJuegos[i].consola === "Xbox") {
                    const gameNameActual = this.vectorVideoJuegos[i].gameName;
                    if (!vectorGameNamesXbox.includes(gameNameActual)) {
                        vectorGameNamesXbox.push(gameNameActual);
                    }
                    this.VideoGamesXbox = vectorGameNamesXbox
                }
            }

            const vectorLanzamientoXbox = [] as string[];

            for (let i = 0; i < this.vectorVideoJuegos.length; i++) {
                if (this.vectorVideoJuegos[i].consola === "Xbox") {
                    const lanzamientoActual = this.vectorVideoJuegos[i].lanzamiento;
                    vectorLanzamientoXbox.push(lanzamientoActual);
                    this.LanzamientoGame = vectorLanzamientoXbox
                }
            }
        },
        changeBackColor() {
            this.colorGameSelected = 'white' as string
            this.colorBackGameSelected = 'green' as string
        },
        changeBackColorDefault() {
            this.colorGameSelected = 'black' as string
            this.colorBackGameSelected = 'white' as string
        },
        showInfo(x: number) {
            if (x == 1) {
                this.showInfo_1 = true;
                this.showInfo_2 = false;
                this.showInfo_3 = false;
                this.showInfo_4 = false;
                this.showInfo_5 = false;
            }
            else if (x == 2) {
                this.showInfo_1 = false;
                this.showInfo_2 = true;
                this.showInfo_3 = false;
                this.showInfo_4 = false;
                this.showInfo_5 = false;
            }
            else if (x == 3) {
                this.showInfo_1 = false;
                this.showInfo_2 = false;
                this.showInfo_3 = true;
                this.showInfo_4 = false;
                this.showInfo_5 = false;
            }
            else if (x == 4) {
                this.showInfo_1 = false;
                this.showInfo_2 = false;
                this.showInfo_3 = false;
                this.showInfo_4 = true;
                this.showInfo_5 = false;
            }
            else {
                this.showInfo_1 = false;
                this.showInfo_2 = false;
                this.showInfo_3 = false;
                this.showInfo_4 = false;
                this.showInfo_5 = true;
            }
        }
    },
    data() {
        return {
            VideoGamesXbox: [] as string[],
            LanzamientoGame: [] as any,

            vectorLanzamientoXbox: [] as any,
            vectorVideoJuegos: [] as any,

            colorGameSelected: 'black' as string,
            colorBackGameSelected: 'white' as string,

            showInfo_1: false as boolean,
            showInfo_2: false as boolean,
            showInfo_3: false as boolean,
            showInfo_4: false as boolean,
            showInfo_5: false as boolean,

            info_lanzamiento_1: "" as string,
            info_lanzamiento_2: "" as string,
            info_lanzamiento_3: "" as string,
            info_lanzamiento_4: "" as string,
            info_lanzamiento_5: "" as string,

            imagenXbox: "../assets/img/xbox.png" as string
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
.GameSelect 
{
    color: #000000;
    background-color: #ffd000;
    padding: 10px;
    margin: 10px;
}
</style>