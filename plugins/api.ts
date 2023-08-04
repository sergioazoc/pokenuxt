import axios from 'axios'

export default defineNuxtPlugin((nuxtApp) => {
  const apiBaseUrl = nuxtApp.$config.public.apiBaseUrl

  const api = axios.create({
    baseURL: apiBaseUrl
  })

  return {
    provide: {
      api
    }
  }
})
