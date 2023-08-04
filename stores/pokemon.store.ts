import { defineStore } from 'pinia'

export const pokemonStore = defineStore('pokemon', {
  state: () => ({ 
    pokemons: [],
  }),
  
  actions: {
    setPokemons(pokemons: any) {
      this.pokemons = pokemons  
    },
  },
})