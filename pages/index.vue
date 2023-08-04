<script lang="ts" setup>
  import usePokemons from '@/composables/usePokemons'

  const { pokemons, isLoading, isError, error } = usePokemons()

  const pokemonId = (url: string) => url.split('/').filter(Boolean).pop()

</script>

<template>
  <div v-if="isLoading && !pokemons" class="spinner-border mx-auto" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>

  <div v-if="isError" class="alert alert-danger" role="alert">
    {{ error }}
  </div>

  <div class="d-flex flex-wrap justify-content-between gap-3">
    <PokemonCard v-for="pokemon in pokemons" :id="pokemonId(pokemon.url)" :key="pokemon.name" :name="pokemon.name" />
  </div>
</template>
