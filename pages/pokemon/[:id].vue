<script lang="ts" setup>
import usePokemon from '@/composables/usePokemon'
const route = useRoute()

const { pokemon, isLoading, isError, error } = usePokemon(Number(route.params.id))

</script>

<template>
  <h1>pokemon {{ $route.params.id }}</h1>
  <RouterLink to="/">Home</RouterLink>

  <p v-if="isLoading">loading...</p>

  <p v-if="isError">{{ error }}</p>

  <pre>
    {{ pokemon }}
  </pre>
</template>