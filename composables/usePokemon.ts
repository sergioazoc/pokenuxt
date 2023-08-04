import { storeToRefs } from "pinia"
import { getPokemons } from "@/services/pokemon.service"
import { pokemonStore } from "@/stores/pokemon.store"
import { useQuery } from "@tanstack/vue-query"

const usePokemon = () => {
  const { setPokemons } = pokemonStore()
  const { pokemons } = storeToRefs(pokemonStore())
  
  const { isLoading, isError, data, error } = useQuery(
    ['pokemons'],
    () => getPokemons(),
    {
      onSuccess(newPokemons) {
        setPokemons(newPokemons.results)
      }
    }
  )

  return {
    pokemons,
    isLoading
  }
}

export default usePokemon