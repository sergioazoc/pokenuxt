import { defineStore } from 'pinia'
import { Pokemons, Pokemon, PokemonItem } from '@/models/Pokemon'


export const pokemonStore = defineStore('pokemon', {
  state: (): Pokemons => ({
    count: 0,
    next: null,
    previous: null,
    results: [],
    pokemon: null
  }),
  
  actions: {
    setPokemons(pokemons: PokemonItem[]) {
      this.results = pokemons  
    },

    setPokemon(pokemon: Pokemon) {
      this.pokemon = pokemon
    },
  },
})