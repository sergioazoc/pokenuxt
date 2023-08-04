<script lang="ts" setup>
import usePokemons from '@/composables/usePokemons'
const { pokemons, isLoading, isError, error } = usePokemons()

const pokemonId = (url: string) => {
  return url.split('/').filter(Boolean).pop()
}

</script>

<template>
  <h1>hola</h1>

  <p v-if="isLoading">loading...</p>

  <p v-if="isError">{{ error }}</p>

  <pre v-else v-for="pokemon in pokemons">
    {{ pokemon }}
    <NuxtLink :to="`/pokemon/${pokemonId(pokemon.url)}`">{{ pokemon.name }}</NuxtLink>
  </pre>
</template>