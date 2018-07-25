import axios from 'axios'
import { AsyncStorage } from 'react-native'

const __API__ = ''

const fetchClient = () => {
  const defaultOptions = {
    baseURL: __API__
  }

  let instance = axios.create(defaultOptions)

  instance.interceptors.request.use(async (config) => {
    const token = await AsyncStorage.getItem('token')
    config.headers.Authorization = token ? `Bearer ${token}` : ''
    return config
  })

  instance.interceptors.response.use(response => {
    return response
  }, error => {
    if (error.response.status === 401) {
      // logica de redirect aqui

    } else {
      return Promise.reject(error)
    }
  })

  return instance
}

export default fetchClient()
