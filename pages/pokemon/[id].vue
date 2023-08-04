<script lang="ts" setup>
  import usePokemon from '@/composables/usePokemon'
  const route = useRoute()

  const { pokemon, isLoading, isError, error } = usePokemon(Number(route.params.id))

</script>

<template>
  <div class="d-flex align-items-center gap-3">
    <h1 class="text-capitalize">
      {{ pokemon?.name }}
    </h1>
    <RouterLink to="/">
      Volver al inicio
    </RouterLink>
  </div>

  <div v-if="isLoading && !pokemon" class="spinner-border mx-auto" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>

  <div v-if="isError" class="alert alert-danger" role="alert">
    {{ error }}
  </div>

  <PokemonCard v-if="pokemon" :id="pokemon.id" :name="pokemon.name" />

  <div class="vstack gap-2">
    <div
      v-for="stat in pokemon?.stats"
      :key="stat.stat.name"
      class="d-flex align-items-center gap-3"
    >
      <div class="text-capitalize">
        {{ stat.stat.name }}:
      </div>
      <div
        class="progress w-100"
        role="progressbar"
        :aria-label="stat.stat.name"
        :aria-valuenow="stat.base_stat"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div class="progress-bar" :style="`width: ${stat.base_stat}%`">
          {{ stat.base_stat }}%
        </div>
      </div>
    </div>
  </div>
</template>
