import type { AxiosResponse } from 'axios'

const getPokemons = async () => {
  const { $api } = useNuxtApp()
  const response: AxiosResponse = await $api.get('pokemon?offset=00&limit=20')

  return response.data
}

const getPokemon = async (id: number) => {
  const { $api } = useNuxtApp()
  const response: AxiosResponse = await $api.get(`pokemon/${id}`)

  return response.data
}

export {
  getPokemons,
  getPokemon
}
