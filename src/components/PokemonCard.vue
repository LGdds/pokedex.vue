<script setup>
defineProps(['pokemon'])

const colors = {
 normal:'#A8A77A',
 fire:'#EE8130',
 water:'#6390F0',
 electric:'#F7D02C',
 grass:'#7AC74C',
 ice:'#96D9D6',
 fighting:'#C22E28',
 poison:'#A33EA1',
 ground:'#E2BF65',
 flying:'#A98FF3',
 psychic:'#F95587',
 bug:'#A6B91A',
 rock:'#B6A136',
 ghost:'#735797',
 dragon:'#6F35FC',
 dark:'#705746',
 steel:'#B7B7CE',
 fairy:'#D685AD'
}
</script>

<template>
<<<<<<< HEAD
<router-link :to="'/pokemon/' + pokemon.name" class="card">
    <img :src="pokemon.image">
    <h2>{{ pokemon.name }}</h2>
    <div class="types">
        <span v-for="type in pokemon.types" :key="type" :style="{background: colors[type] || '#555'}">
            {{ type }}
        </span>
    </div>
=======
<router-link
:to="'/pokemon/' + pokemon.name"
class="card"
>

<img :src="pokemon.image">

<h2>{{ pokemon.name }}</h2>

<div class="types">
<span
v-for="type in pokemon.types"
:key="type"
:style="{background: colors[type] || '#555'}"
>
{{ type }}
</span>
</div>

>>>>>>> a22f930e744faadf063f0d81b2c1c4bdb4ba0abf
</router-link>
</template>

<style scoped>
.card{
<<<<<<< HEAD
    background:#1e293b;
    padding:20px;
    border-radius:20px;
    text-align:center;
    text-decoration:none;
    color:white;
    transition:.3s;
    box-shadow:0 10px 20px rgba(0,0,0,.25);
}

.card:hover{
    transform:translateY(-10px) scale(1.03);
    background:#334155;
}

img{
    width:100px;
}

.types{
    margin-top:15px;
    display:flex;
    justify-content:center;
    gap:8px;
    flex-wrap:wrap;
}

.types span{
    padding:6px 12px;
    border-radius:20px;
    font-size:13px;
    font-weight:bold;
    color:white;
    text-transform:capitalize;
    box-shadow:0 4px 8px rgba(0,0,0,.2);
=======
background:#1e293b;
padding:20px;
border-radius:20px;
text-align:center;
text-decoration:none;
color:white;
transition:.3s;
box-shadow:0 10px 20px rgba(0,0,0,.25);
}

.card:hover{
transform:translateY(-10px) scale(1.03);
background:#334155;
}

img{
width:100px;
}

.types{
margin-top:15px;
display:flex;
justify-content:center;
gap:8px;
flex-wrap:wrap;
}

.types span{
padding:6px 12px;
border-radius:20px;
font-size:13px;
font-weight:bold;
color:white;
text-transform:capitalize;
box-shadow:0 4px 8px rgba(0,0,0,.2);
>>>>>>> a22f930e744faadf063f0d81b2c1c4bdb4ba0abf
}
</style>