<template>
    <div style="background-color:blueviolet; margin: 2px; padding: 15px;">    
        <h1>{{Visitor}} Submit your request now!</h1>
        <div style="margin: 10px;">
            <input class="form-control" placeholder="Name">
            <input class="form-control" placeholder="Phone Number">
            <input class="form-control" placeholder="Email">
            <input class="form-control" placeholder="Aditional comment">
        </div>
        <button @click="EnviarSolicitud()" class="btn btn-success">Send</button>
        <h3>{{ mensajeSolicitud }}</h3>
    </div>
</template>

<script>
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
                this.mensajeSolicitud = `Your request has been processed. We will contact you soon! Thank you ${this.Visitor}!`;
            }
        },
        data()
        {
            return {
                mensajeSolicitud:""
            }
        }
    }
</script>

<style>

</style>