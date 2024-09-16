<template>
   
   <div class="container">
        <h1>Estoy en Directivas</h1>
        <h1>Directiva V-For</h1>
        <ul>
            <li v-for="(consolas,index) in vectorConsolas" :key="index">
                {{ consolas }}

            </li>
        </ul>
    </div>

</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    
    export default defineComponent({
        data() {
            return {
                vectorConsolas : ['Play Station','Nintendo','Xbox']
            }  
        }
    })
</script>