<template>
    <div style="background-color:blueviolet; margin: 2px; padding: 15px;">    
        <h1>{{Visitor}} Submit your request now!</h1>
        <div style="margin: 10px;">
            <input type="text" v-model="userName" class="form-control" placeholder="User Name">
            <input type="text" v-model="PhoneNumber" class="form-control" placeholder="Phone Number">
            <input type="text" v-model="Email" class="form-control" placeholder="Email">
            <input v-model="additionalcomment" placeholder="Escribe un comentario adicional">
        </div>
        <button @click="EnviarSolicitud()" class="btn btn-success">Send</button>
        <h3>{{ mensajeSolicitud1 }}</h3>
        <h3>{{ mensajeSolicitud2 }}</h3>
        <h3>{{ mensajeSolicitud3 }}</h3>

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
                this.mensajeSolicitud1 = `Your request has been processed. Please verify your contact info:`
                this.mensajeSolicitud2 = `Phone Number: ${this.PhoneNumber}`
                this.mensajeSolicitud3 = `Email: ${this.Email}`
            }
        },
        data()
        {
            return {
                mensajeSolicitud1: "",
                mensajeSolicitud2: "",
                mensajeSolicitud3: "",
                userName: "",
                PhoneNumber:"",
                Email: "",
                additionalcomment: "" // Asegúrate de que este campo esté correctamente definido
            }
        }
    }
</script>

<style>

</style>