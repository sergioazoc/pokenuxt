import { storeToRefs } from 'pinia'
import { useQuery } from '@tanstack/vue-query'
import { getPokemon } from '@/services/pokemon.service'
import { pokemonStore } from '@/stores/pokemon.store'

const usePokemon = (id: number) => {
  const { setPokemon } = pokemonStore()
  const { pokemon } = storeToRefs(pokemonStore())

  const { isLoading, isError, error } = useQuery(
    ['pokemon', id],
    () => getPokemon(id),
    {
      onSuccess (newPokemon) {
        setPokemon(newPokemon)
      }
    }
  )

  return {
    pokemon,
    isLoading,
    isError,
    error
  }
}

export default usePokemon
