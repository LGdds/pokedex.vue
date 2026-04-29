<script setup>
import { ref } from 'vue'

const search = ref('')
</script>

<template>
<<<<<<< HEAD
    <input type="text" placeholder="Buscar Pokémon..." v-model="search" @input="$emit('search', search)"/>
=======
<input
type="text"
placeholder="Buscar Pokémon..."
v-model="search"
@input="$emit('search', search)"
/>
>>>>>>> a22f930e744faadf063f0d81b2c1c4bdb4ba0abf
</template>

<style scoped>
input{
<<<<<<< HEAD
    width:100%;
    padding:15px;
    border:none;
    border-radius:12px;
    font-size:16px;
    margin:20px 0;
=======
width:100%;
padding:15px;
border:none;
border-radius:12px;
font-size:16px;
margin:20px 0;
>>>>>>> a22f930e744faadf063f0d81b2c1c4bdb4ba0abf
}
</style>