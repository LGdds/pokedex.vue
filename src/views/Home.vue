<script setup>
import { ref, onMounted, computed } from 'vue'
import SearchBar from '../components/SearchBar.vue'
import PokemonCard from '../components/PokemonCard.vue'

const pokemons = ref([])
const search = ref('')
const loading = ref(true)

onMounted(async () => {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10326')
  const data = await res.json()

  const list = await Promise.all(
    data.results.map(async (pokemon) => {
      const res2 = await fetch(pokemon.url)
      const details = await res2.json()

      return {
        name: details.name,
        image: details.sprites.front_default,
        types: details.types.map(t => t.type.name)
      }
    })
  )

  pokemons.value = list
  loading.value = false
})

const filtered = computed(() =>
  pokemons.value.filter(p =>
    p.name.toLowerCase().includes(search.value.toLowerCase())
  )
)
</script>

<template>
<div class="container">

<h1>Pokédex</h1>

<SearchBar @search="search = $event" />

<div v-if="loading" class="loading">
  Carregando...
</div>

<div v-else class="grid">
  <PokemonCard
    v-for="pokemon in filtered"
    :key="pokemon.name"
    :pokemon="pokemon"
  />
</div>

</div>
</template>

<style scoped>
.container{
width:100%;
padding:40px 20px;
display:flex;
flex-direction:column;
align-items:center;
}

h1{
font-size:70px;
margin-bottom:30px;
color:white;
}

/* search */
:deep(input){
width:500px;
max-width:90%;
margin-bottom:30px;
}

/* grid centralizado */
.grid{
display:grid;
grid-template-columns:repeat(5, 230px);
justify-content:center;
gap:25px;
}

/* responsivo */
@media(max-width:1400px){
.grid{
grid-template-columns:repeat(4, 230px);
}
}

@media(max-width:1100px){
.grid{
grid-template-columns:repeat(3, 230px);
}
}

@media(max-width:800px){
.grid{
grid-template-columns:repeat(2, 220px);
}
}

@media(max-width:500px){
.grid{
grid-template-columns:1fr;
justify-items:center;
}
}
</style>