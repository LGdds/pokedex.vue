<script setup>
import { ref } from 'vue'

const search = ref('')
</script>

<template>
    <input type="text" placeholder="Buscar Pokémon..." v-model="search" @input="$emit('search', search)"/>
</template>

<style scoped>
input{
    width:100%;
    padding:15px;
    border:none;
    border-radius:12px;
    font-size:16px;
    margin:20px 0;
}
</style>