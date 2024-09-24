<template>
    <div class="container">
      <div class="contenedorSolicitud">    
            <h1>{{Visitor}} Submit your request now!</h1>
            <div>

                <input v-model.lazy="userName_input" class="form-control" placeholder="Your Name" :style="{backgroundColor:userColor}">
                <h3 v-if="userRequired">{{userRequired_message}}</h3>

                <input v-model.trim="PhoneNumber_input" class="form-control" placeholder="Phone Number" :style="{backgroundColor:PhoneColor}">
                <h3 v-if="PhoneRequired">{{PhoneRequired_message}}</h3>
                
                <input v-model.trim="Email_input" class="form-control" placeholder="Email" :style="{backgroundColor:EmailColor}">
                <h3 v-if="EmailRequired">{{EmailRequired_message}}</h3>
                
                <select class="form-select" v-model="Consolas" :style="{backgroundColor:ConsolaColor}">
                    <option v-if="Consolas ==='Select your favorite consola'">{{Consolas}}</option>
                    <option v-for="(consola,index) in ConsolasDisponibles" :key="index">
                        {{ consola }}
                    </option>
                </select>     
                <h3 v-if="ConsolaRequired">{{ConsolaRequired_message}}</h3>

                <select v-if="Consolas ==='PlayStation 5'" class="form-select" v-model="VideoGames" :style="{backgroundColor:VideoGamesColor}">
                    <option >{{VideoGames}}</option>
                    <option v-for="(videogame,index) in VideoGamesPlayStation5" :key="index">
                        {{ videogame }}
                    </option>
                </select>
                <select v-if="Consolas ==='Xbox'" class="form-select" v-model="VideoGames" :style="{backgroundColor:VideoGamesColor}">
                    <option >{{VideoGames}}</option>
                    <option v-for="(videogame,index) in VideoGamesXbox" :key="index">
                        {{ videogame }}
                    </option>   
                </select>
                <select v-if="Consolas ==='Nintendo'" class="form-select" v-model="VideoGames" :style="{backgroundColor:VideoGamesColor}">
                    <option >{{VideoGames}}</option>
                    <option v-for="(videogame,index) in VideoGamesNintendo" :key="index">
                        {{ videogame }}
                    </option>
                </select>
                <h3 v-if="VideoGameRequired">{{VideoGameRequired_message}}</h3>

                <input v-model.trim="additionalComment_input" class="form-control" placeholder="Additional Comment" :style="{backgroundColor:CommentColor}">
                <h3 v-if="CommentRequired">{{CommentRequired_message}}</h3>

            </div>
            <br>
            <b-button @click="SendRequest()" class="btn btn-success">Send</b-button>
            <br>
            <br>
            <h6 style="color: red;">{{ mensajeCamposObligatorios }}</h6>
            <br>
            <h3 :style="{color:RequestColor, backgroundColor:RequestBackColor}">{{enviarSolicitud}}</h3>
            <br>
            <h4 v-if="joke===true" v-show="userName_input">Thanks for choosing us {{ userName_input.split('').reverse().join('')}}! Ups, thats your name backwards!!!</h4>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent, onMounted } from 'vue';
    import axios from 'axios';

    interface ComponentData
    {
    enviarSolicitud: string,
    PhoneNumber_input: string,
    Email_input: string,
    consolaSelected: string,
    videoGameSelected: string,
    userName_input: string,
    additionalComment_input: string,
    Consolas: string,
    VideoGames: string,
    VideoGamesPlayStation5: string[],
    VideoGamesXbox: string[],
    VideoGamesNintendo: string[],
    mensajeCamposObligatorios: string,
    userRequired: false,
    userRequired_message: string,
    PhoneRequired: false,
    PhoneRequired_message: string,
    EmailRequired: false,
    EmailRequired_message: string,
    ConsolaRequired: false,
    ConsolaRequired_message: string,
    VideoGameRequired: false,
    VideoGameRequired_message: string,
    CommentRequired: false,
    CommentRequired_message: string,
    }
    
export default defineComponent({    

    
        props:
        {
            Visitor: String,
        },
        methods:
        {
            SendRequest()
            {
                if (!this.userName_input || !this.PhoneNumber_input || !this.Email_input || this.Consolas == 'Select your favorite consola' || this.VideoGames == 'Select the game you want to purchase' || !this.additionalComment_input)
                {
                    this.mensajeCamposObligatorios = "Please complete all blank spaces before sending your request!"
                    this.enviarSolicitud = ``
                    this.RequestBackColor = "white"
                    this.RequestColor = "red"
                    this.joke = false

                    if (!this.userName_input) {
                        this.userRequired = true
                        this.userRequired_message = "*Required field"
                        this.userColor= "red"
                    }
                    if (!this.PhoneNumber_input) {
                        this.PhoneRequired = true
                        this.PhoneRequired_message = "*Required field"
                        this.PhoneColor = "red"
                    }
                    if (!this.Email_input) {
                        this.EmailRequired = true
                        this.EmailRequired_message = "*Required field"
                        this.EmailColor = "red"
                    }
                    if (this.Consolas == 'Select your favorite consola') {
                        this.ConsolaRequired = true
                        this.ConsolaRequired_message = "*Required field"
                        this.ConsolaColor = "red"
                    }
                    if (this.VideoGames == 'Select the game you want to purchase' && this.Consolas != 'Select your favorite consola' ) {
                        this.VideoGameRequired = true
                        this.VideoGameRequired_message = "*Required field"
                        this.VideoGamesColor = "red"
                    }
                    if (!this.additionalComment_input) {
                        this.CommentRequired = true
                        this.CommentRequired_message = "*Required field"
                        this.CommentColor = "red"
                    }
                    if (this.userName_input) {
                        this.userRequired = false
                        this.userRequired_message = ""
                        this.userColor= "white"
                    }
                    if (this.PhoneNumber_input) {
                        this.PhoneRequired = false
                        this.PhoneRequired_message = ""
                        this.PhoneColor = "white"
                    }
                    if (this.Email_input) {
                        this.EmailRequired = false
                        this.EmailRequired_message = ""
                        this.EmailColor = "white"
                    }
                    if (this.Consolas != 'Select your favorite consola') {
                        this.ConsolaRequired = false
                        this.ConsolaRequired_message = ""
                        this.ConsolaColor = "white"
                    }
                    if (this.VideoGames != 'Select the game you want to purchase' && this.Consolas != 'Select your favorite consola' ) {
                        this.VideoGameRequired = false
                        this.VideoGameRequired_message = ""
                        this.VideoGamesColor = "white"
                    }
                    if (this.additionalComment_input) {
                        this.CommentRequired = false
                        this.CommentRequired_message = ""
                        this.CommentColor = "white"
                    }
                }
                else if (this.userName_input!="" && this.PhoneNumber_input!="" && this.Email_input!="" && this.Consolas != 'Select your favorite consola' && this.VideoGames != 'Select the game you want to purchase' && this.additionalComment_input!="")
                {
                        this.mensajeCamposObligatorios = ""
                        this.enviarSolicitud = `The information has been provided. You will be contacted within a maximum of 2 days.`
                        this.userRequired = false
                        this.userRequired_message = ""
                        this.userColor = "white"
                        this.PhoneRequired = false
                        this.PhoneRequired_message = ""
                        this.PhoneColor = "white"
                        this.EmailRequired = false
                        this.EmailRequired_message = ""
                        this.EmailColor = "white"
                        this.ConsolaRequired = false
                        this.ConsolaRequired_message = ""
                        this.ConsolaColor = "white"
                        this.VideoGameRequired = false
                        this.VideoGameRequired_message = ""
                        this.VideoGamesColor = "white"
                        this.CommentRequired = false
                        this.CommentRequired_message = ""
                        this.CommentColor = "white"
                        this.RequestBackColor = "green"
                        this.RequestColor = "white"
                        this.joke = true
                }             
            },
            async llamarApiVideoJuegos(){
                const respuesta = await axios.get('http://localhost:3015/api/route/ObtenerTodosLosVideoJuegos')
                console.log(respuesta);

                this.vectorVideoJuegos = respuesta.data.DetalleRespuesta;

                const vectorConsolas = [] as string[];
                for (let i = 0; i < this.vectorVideoJuegos.length; i++){
                    const consolaActual = this.vectorVideoJuegos[i].consola;
                    if (!vectorConsolas.includes(consolaActual))
                    {
                       vectorConsolas.push(consolaActual);
                    }
                    this.ConsolasDisponibles = vectorConsolas      
                }

                const vectorGameNamesPlayStation5 = [] as string[];
                const vectorGameNamesXbox = [] as string[];
                const vectorGameNamesNintendo = [] as string[];

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
                    }

                    if (this.vectorVideoJuegos[i].consola === "Xbox")
                    {
                        const gameNameActual = this.vectorVideoJuegos[i].gameName;
                        if (!vectorGameNamesXbox.includes(gameNameActual))
                        {
                            vectorGameNamesXbox.push(gameNameActual);
                        }
                        this.VideoGamesXbox = vectorGameNamesXbox
                    }

                    if (this.vectorVideoJuegos[i].consola === "Nintendo")
                    {
                        const gameNameActual = this.vectorVideoJuegos[i].gameName;
                        if (!vectorGameNamesNintendo.includes(gameNameActual))
                        {
                            vectorGameNamesNintendo.push(gameNameActual);
                        }
                        this.VideoGamesNintendo = vectorGameNamesNintendo
                    }
                }
            },
    },
        data()
        {
            return {
                enviarSolicitud: "",
                consolaSelected: "",
                videoGameSelected: "",
                userName_input: "",
                PhoneNumber_input:"",
                Email_input: "",
                additionalComment_input: "",
                Consolas: "Select your favorite consola",
                VideoGames: "Select the game you want to purchase",
                ConsolasDisponibles: [] as string[],
                VideoGamesPlayStation5: [] as string[],
                VideoGamesXbox: [] as string[],
                VideoGamesNintendo: [] as string[],
                mensajeCamposObligatorios: "",
                userRequired: true,
                userRequired_message: "",
                userColor:"white",
                PhoneRequired: true,
                PhoneRequired_message: "",
                PhoneColor:"white",
                EmailRequired: true,
                EmailRequired_message: "",
                EmailColor: "white",
                ConsolaRequired: true,
                ConsolaRequired_message: "",
                ConsolaColor:"white",
                VideoGameRequired: true,
                VideoGameRequired_message: "",
                VideoGamesColor: "white",
                CommentRequired: true,
                CommentRequired_message: "",
                CommentColor: "white",
                RequestColor: "red",
                RequestBackColor: "white",
                joke: false,
                
                vectorVideoJuegos: [] as any,
                vectorConsolas: [] as string[]
            }
    },
    mounted()
    {
        this.llamarApiVideoJuegos();
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