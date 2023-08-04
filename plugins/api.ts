import axios from 'axios'

export default defineNuxtPlugin(nuxtApp => {
  
  const config = useRuntimeConfig()
  const apiBaseUrl = config.public.apiBaseUrl

  const api = axios.create({
    baseURL: apiBaseUrl
  })

  return {
    provide: {
      api
    }
  }
})