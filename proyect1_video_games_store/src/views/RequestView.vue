<template>
    <div class="container">
      <div class="contenedorSolicitud">    
            <h1>{{Visitor}} Submit your request now!</h1>
            <div>
                <input v-model.lazy="userName_input" class="form-control" placeholder="Your Name">
                <input v-model.trim="PhoneNumber_input" class="form-control" placeholder="Phone Number">
                <input v-model.trim="Email_input" class="form-control" placeholder="Email">
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
                <input v-model.trim="additionalComment_input" class="form-control" placeholder="Additional Comment">
            </div>
            <br>
            <b-button @click="EnviarSolicitud()" class="btn btn-success">Send</b-button>
            <br>
            <br>
            <h6 style="color: red;">{{ mensajeCamposObligatorios }}</h6>
            <h3 style="color: red;">{{enviarSolicitud}}</h3>
            <h3 >{{ phoneNumber }}</h3>
            <h3 >{{ emailUser }}</h3>
            <h3 >{{ consolaSelected }}</h3>
            <h3 >{{ videoGameSelected }}</h3>
            <h3 >{{ additionalcomment }}</h3>
            <h4 v-show="userName_input">Thanks for choosing us {{ userName_input.split('').reverse().join('')}}! Ups, thats your name backwards!!!</h4>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    interface ComponentData
    {
    enviarSolicitud: string,
    phoneNumber: string,
    PhoneNumber_input: string,
    emailUser: string,
    Email_input: string,
    consolaSelected: string,
    videoGameSelected: string,
    userName_input: string,
    additionalcomment: string,
    additionalComment_input: string,
    Consolas: string,
    VideoGames: string,
    ConsolasDisponibles: string[],
    VideoGamesPlayStation5: string[],
    VideoGamesXbox: string[],
    VideoGamesNintendo: string[],
    mensajeCamposObligatorios: string,
    
    }
    
    export default defineComponent({
        
        props:
        {
            Visitor: String,
        },
        methods:
        {
            EnviarSolicitud()
            {
                if (!this.userName_input || !this.PhoneNumber_input || !this.Email_input || this.Consolas == 'Select your favorite consola' || this.VideoGames == 'Select the game you want to purchase' || !this.additionalComment_input)
                    this.mensajeCamposObligatorios = "Please complete all blank spaces before sending your request!"
                else if (this.userName_input!="" && this.PhoneNumber_input!="" &&this.Email_input!="" && this.Consolas != 'Select your favorite consola' || this.VideoGames != 'Select the game you want to purchase' && this.additionalComment_input!="")
                {
                    this.mensajeCamposObligatorios = ""
                    this.enviarSolicitud = `Your request has been processed, please verify your contact info:`
                    this.phoneNumber = `Phone Number: ${this.PhoneNumber_input}`
                    this.emailUser = `Email: ${this.Email_input}`
                    this.consolaSelected = `Consola: ${this.Consolas}`
                    this.videoGameSelected = `Vide Game: ${this.VideoGames}`
                    this.additionalcomment = `Additional comment: ${this.additionalComment_input}`
                }
            }
        },
        data()
        {
            return {
                enviarSolicitud: "",
                phoneNumber: "",
                emailUser: "",
                consolaSelected: "",
                videoGameSelected: "",
                userName_input: "",
                PhoneNumber_input:"",
                Email_input: "",
                additionalcomment: "",
                additionalComment_input: "",
                Consolas: "Select your favorite consola",
                VideoGames: "Select the game you want to purchase",
                ConsolasDisponibles: ["Play Station 5","Xbox","Nintendo"],
                VideoGamesPlayStation5: ["Demon's Souls", "Ratchet & Clank: Rift Apart", "Horizon Forbidden West", "Returnal", "Spider-Man: Miles Morales"],
                VideoGamesXbox: ["Halo Infinite", "Forza Horizon 5", "Fable", "Gears 5", "Sea of Thieve"],
                VideoGamesNintendo: ["The Legend of Zelda: Tears of the Kingdom", "Super Mario Odyssey", "Animal Crossing: New Horizons", "Mario Kart 8 Deluxe", "Splatoon 3"],
                mensajeCamposObligatorios: "",
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