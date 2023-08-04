<script lang="ts" setup>
import usePokemon from '@/composables/usePokemon'
const { pokemons, isLoading } = usePokemon()

console.log(pokemons)

</script>

<template>
  <h1>hola</h1>

  <p v-if="isLoading">loading...</p>

  <div v-else v-for="pokemon in pokemons">
    {{ pokemon }}
  </div>
</template>