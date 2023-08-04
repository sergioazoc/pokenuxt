// import API from '@/api'

const getPokemons = async () => {
  
  const { $api } = useNuxtApp()
  const response = await $api.get(`pokemon?limit=905&offset=0`)
  
  return response.data
}

export {
  getPokemons
}