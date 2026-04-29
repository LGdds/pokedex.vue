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
<<<<<<< HEAD
  <h1>Pokédex</h1>
  <SearchBar @search="search = $event" />
  <div v-if="loading" class="loading">
    Carregando...
  </div>
  <div v-else class="grid">
    <PokemonCard v-for="pokemon in filtered" :key="pokemon.name" :pokemon="pokemon"/>
  </div>
=======

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

>>>>>>> a22f930e744faadf063f0d81b2c1c4bdb4ba0abf
</div>
</template>

<style scoped>
<<<<<<< HEAD
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
=======
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
>>>>>>> a22f930e744faadf063f0d81b2c1c4bdb4ba0abf
}

/* search */
:deep(input){
<<<<<<< HEAD
  width:500px;
  max-width:90%;
  margin-bottom:30px;
=======
width:500px;
max-width:90%;
margin-bottom:30px;
>>>>>>> a22f930e744faadf063f0d81b2c1c4bdb4ba0abf
}

/* grid centralizado */
.grid{
<<<<<<< HEAD
  display:grid;
  grid-template-columns:repeat(5, 230px);
  justify-content:center;
  gap:25px;
=======
display:grid;
grid-template-columns:repeat(5, 230px);
justify-content:center;
gap:25px;
>>>>>>> a22f930e744faadf063f0d81b2c1c4bdb4ba0abf
}

/* responsivo */
@media(max-width:1400px){
.grid{
<<<<<<< HEAD
  grid-template-columns:repeat(4, 230px);
=======
grid-template-columns:repeat(4, 230px);
>>>>>>> a22f930e744faadf063f0d81b2c1c4bdb4ba0abf
}
}

@media(max-width:1100px){
.grid{
<<<<<<< HEAD
  grid-template-columns:repeat(3, 230px);
=======
grid-template-columns:repeat(3, 230px);
>>>>>>> a22f930e744faadf063f0d81b2c1c4bdb4ba0abf
}
}

@media(max-width:800px){
.grid{
<<<<<<< HEAD
  grid-template-columns:repeat(2, 220px);
=======
grid-template-columns:repeat(2, 220px);
>>>>>>> a22f930e744faadf063f0d81b2c1c4bdb4ba0abf
}
}

@media(max-width:500px){
.grid{
<<<<<<< HEAD
  grid-template-columns:1fr;
  justify-items:center;
=======
grid-template-columns:1fr;
justify-items:center;
>>>>>>> a22f930e744faadf063f0d81b2c1c4bdb4ba0abf
}
}
</style>