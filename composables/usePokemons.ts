import { storeToRefs } from 'pinia'
import { useQuery } from '@tanstack/vue-query'
import { getPokemons } from '@/services/pokemon.service'
import { pokemonStore } from '@/stores/pokemon.store'

const usePokemons = () => {
  const { setPokemons } = pokemonStore()
  const { results: pokemons } = storeToRefs(pokemonStore())

  const { isLoading, isError, error } = useQuery(
    ['pokemons'],
    () => getPokemons(),
    {
      onSuccess (newPokemons) {
        setPokemons(newPokemons.results)
      }
    }
  )

  return {
    pokemons,
    isLoading,
    isError,
    error
  }
}

export default usePokemons
