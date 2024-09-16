<template>
    <div class="container">
      <div class="contenedorSolicitud">    
            <h1>{{Visitor}} Submit your request now!</h1>
            <div>
                <input v-model.lazy="userName" class="form-control" placeholder="Your Name">
                <input v-model.trim="PhoneNumber" class="form-control" placeholder="Phone Number">
                <input v-model.trim="Email" class="form-control" placeholder="Email">
                <select class="form-select" v-model="Consolas">
                    <option >{{Consolas}}</option>
                    <option v-for="(consola,index) in ConsolasDisponibles" :key="index">
                        {{ consola }}
                    </option>
                </select>
                <select v-if="Consolas ==='Play Station 5'" class="form-select" v-model="VideoGames">
                    <option >{{VideoGames}}</option>
                    <option v-for="(videogame,index) in VideoGamesPlayStation5" :key="index">
                        {{ videogame }}
                    </option>
                </select>
                <select v-if="Consolas ==='Xbox'" class="form-select" v-model="VideoGames">
                    <option >{{VideoGames}}</option>
                    <option v-for="(videogame,index) in VideoGamesXbox" :key="index">
                        {{ videogame }}
                    </option>
                </select>
                <select v-if="Consolas ==='Nintendo'" class="form-select" v-model="VideoGames">
                    <option >{{VideoGames}}</option>
                    <option v-for="(videogame,index) in VideoGamesNintendo" :key="index">
                        {{ videogame }}
                    </option>
                </select>
                <input v-model.trim="additionalcomment" class="form-control" placeholder="Additional Comment">
            </div>
            <br>
            <b-button @click="EnviarSolicitud()" class="btn btn-success">Send</b-button>
            <br>
            <div v-if="userName&&PhoneNumber&&Email&&Consolas" style="background-color:springgreen; margin: 10px; padding: 15px;">
                <h3 style="color: azure;">Lets double check your info...</h3>
                <h3 >{{ mensajeSolicitud1 }}</h3>
                <h3 >{{ mensajeSolicitud2 }}</h3>
                <h3 >{{ mensajeSolicitud3 }}</h3>
                <h3 >{{ mensajeSolicitud4 }}</h3>
                <h3 >{{ mensajeSolicitud5 }}</h3>
            </div>
            <h4 v-show="userName">Thanks for choosing us {{ userName.split('').reverse().join('')}}! Ups, thats your name backwards!!!</h4>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    
    export default defineComponent({
        
        props:
        {
            Visitor: String,
        },
        methods:
        {
            EnviarSolicitud()
            {
                this.mensajeSolicitud1 = `Your request has been processed, please verify your contact info:`
                this.mensajeSolicitud2 = `Phone Number: ${this.PhoneNumber}`
                this.mensajeSolicitud3 = `Email: ${this.Email}`
                this.mensajeSolicitud4 = `Consola: ${this.Consolas}`
                this.mensajeSolicitud5 = `Vide Game: ${this.VideoGames}`
            }
        },
        data()
        {
            return {
                mensajeSolicitud1: "",
                mensajeSolicitud2: "",
                mensajeSolicitud3: "",
                mensajeSolicitud4: "",
                mensajeSolicitud5: "",
                userName: "",
                PhoneNumber:"",
                Email: "",
                additionalcomment: "",
                Consolas: "Select your favorite consola",
                VideoGames: "Select the game you want to purchase",
                ConsolasDisponibles: ["Play Station 5","Xbox","Nintendo"],
                VideoGamesPlayStation5: ["Demon's Souls", "Ratchet & Clank: Rift Apart", "Horizon Forbidden West", "Returnal", "Spider-Man: Miles Morales"],
                VideoGamesXbox: ["Halo Infinite", "Forza Horizon 5", "Fable", "Gears 5", "Sea of Thieve"],
                VideoGamesNintendo: ["The Legend of Zelda: Tears of the Kingdom", "Super Mario Odyssey", "Animal Crossing: New Horizons", "Mario Kart 8 Deluxe", "Splatoon 3"]
            }
        }
    })
</script>

<style>
    .contenedorSolicitud{
        background-color: rgb(6, 255, 172) ;
        margin: 2px;
        padding: 15px;
        }
</style>