<template>
    <div>
        <button class="btn btn-primary" @click="selectConsola('Play Station 5')">Play Station 5</button>
        <button class="btn btn-primary" @click="selectConsola('Xbox')">Xbox</button>
        <button class="btn btn-primary" @click="selectConsola('Nintendo')">Nintendo</button>
    </div>
 </template>

<script lang="ts">

import { defineComponent } from 'vue';
export default defineComponent({

    methods: {
        selectConsola(consolaSelected: string)
        {
            this.$emit('consolaSelected', consolaSelected);         
        }
    }

});

</script>

<style>


</style>