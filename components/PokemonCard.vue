<script lang="ts" setup>
  export interface Props {
    name: string
    id: string
  }

  const props = defineProps<Props>()

</script>

<template>
  <div
    class="d-flex align-items-center justify-content-between border pe-3 gap-3"
  >
    <img
      :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`"
      alt=""
    >
    <NuxtLink :to="`/pokemon/${props.id}`">
      {{ props.name }}
    </NuxtLink>
  </div>
</template>
