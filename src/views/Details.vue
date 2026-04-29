<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const pokemon = ref(null)
const shiny = ref(false)

onMounted(async () => {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${route.params.name}`
  )

  pokemon.value = await res.json()
})

function toggleShiny(){
  shiny.value = !shiny.value
}

// Dentro do seu <script setup> no details.vue
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
<div class="page">
    <div v-if="pokemon" class="box">
    <div class="header-actions">
        <router-link to="/" class="back">
            ⬅ Voltar
        </router-link>
    </div>

<img
:src="shiny
? pokemon.sprites.front_shiny
: pokemon.sprites.front_default"
/>

<h1>{{ pokemon.name }}</h1>

<button class="shiny-btn" @click="toggleShiny">
{{ shiny ? 'Normal ✨' : 'Shiny ✨' }}
</button>

<p><strong>ID:</strong> {{ pokemon.id }}</p>
<p><strong>Altura:</strong> {{ pokemon.height }}</p>
<p><strong>Peso:</strong> {{ pokemon.weight }}</p>

<h2>Tipos</h2>

<div class="types">
<span
v-for="type in pokemon.types"
:key="type.type.name"
:style="{ background: colors[type.type.name] || '#555' }"
>
{{ type.type.name }}
</span>
</div>

<h2>Status</h2>

<div
v-for="stat in pokemon.stats"
:key="stat.stat.name"
class="stat"
>
{{ stat.stat.name }} - {{ stat.base_stat }}
</div>

</div>

</div>
</template>

<style scoped>
.header-actions {
  display: flex;
  justify-content: flex-start; /* Alinha o conteúdo à esquerda */
  width: 100%;
}

.page{
min-height:100vh;
display:flex;
justify-content:center;
align-items:center;
padding:30px;
}

.box{
background:#1e293b;
padding:40px;
border-radius:25px;
width:500px;
text-align:center;
box-shadow:0 10px 30px rgba(0,0,0,.3);
}

img{
width:180px;
margin-bottom:15px;
}

.back{
display:inline-block;
margin-bottom:20px;
background:#ef4444;
padding:10px 20px;
border-radius:10px;
color:white;
text-decoration:none;
}

.shiny-btn{
margin:15px 0;
padding:10px 20px;
border:none;
border-radius:10px;
cursor:pointer;
background:gold;
font-weight:bold;
}

.types{
display:flex;
justify-content:center;
gap:10px;
flex-wrap:wrap;
margin:20px 0;
}

.types span {
  padding: 8px 20px;
  border-radius: 20px;
  color: white;
  font-weight: bold;
  text-transform: capitalize;
  box-shadow: 0 4px 10px rgba(0,0,0,0.2);
}

.stat{
background:#334155;
padding:10px;
margin:8px 0;
border-radius:10px;
}
</style>