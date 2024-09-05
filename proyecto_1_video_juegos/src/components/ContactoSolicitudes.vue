<template>
    <div style="background-color:blueviolet; margin: 2px; padding: 15px;">    
        <h1>{{Visitor}} Submit your request now!</h1>
        <div style="margin: 10px;">
            <input v-model.lazy="userName" class="form-control" placeholder="Your Name">
            <input v-model.trim="PhoneNumber" class="form-control" placeholder="Phone Number">
            <input v-model.trim="Email" class="form-control" placeholder="Email">
            <select class="form-control" v-model="Consolas">
                <option value="" disabled selected>{{Consolas}}</option>
                <option value="PlayStation5">Play Station 5</option>
                <option value="Xbox">Xbox</option>
                <option value="Nintendo">Nintendo</option>
            </select>
            <select v-if="Consolas ==='PlayStation5'" class="form-control" v-model="VideoGames">
                <option value="" disabled selected>{{VideoGames}}</option>
                <option value="Demon's Souls">Demon's Souls</option>
                <option value="Ratchet & Clank: Rift Apart">Ratchet & Clank: Rift Apart</option>
                <option value="Horizon Forbidden West">Horizon Forbidden West</option>
                <option value="Returnal">Returnal</option>
                <option value="Spider-Man: Miles Morales">Spider-Man: Miles Morales</option>
            </select>
            <select v-if="Consolas ==='Xbox'" class="form-control" v-model="VideoGames">
                <option value="" disabled selected>{{VideoGames}}</option>
                <option value="Halo Infinite">Halo Infinite</option>
                <option value="Forza Horizon 5">Forza Horizon 5</option>
                <option value="Fable">Fable</option>
                <option value="Gears 5">Gears 5</option>
                <option value="Sea of Thieve">Sea of Thieve</option>
            </select>
            <select v-if="Consolas ==='Nintendo'" class="form-control" v-model="VideoGames">
                <option value="" disabled selected>{{VideoGames}}</option>
                <option value="The Legend of Zelda: Tears of the Kingdom">The Legend of Zelda: Tears of the Kingdom</option>
                <option value="Super Mario Odyssey">Super Mario Odyssey</option>
                <option value="Animal Crossing: New Horizons">Animal Crossing: New Horizons</option>
                <option value="Mario Kart 8 Deluxe">Mario Kart 8 Deluxe</option>
                <option value="Splatoon 3">Splatoon 3</option>
            </select>

            <input v-model.trim="additionalcomment" class="form-control" placeholder="Additional Comment">
        </div>
        <button @click="EnviarSolicitud()" class="btn btn-success">Send</button>
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
</template>

<script type="text/javascript">
export default
    {
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
                additionalcomment: "",// Asegúrate de que este campo esté correctamente definido
                Consolas: "Select your favorite consola",
                VideoGames: "Select the game you want to purchase"
            }
        }
    }
</script>

<style>

</style>