import axios from 'axios'
import { AsyncStorage } from 'react-native'

const __API__ = ''

const fetchClient = () => {
  const defaultOptions = {
    baseURL: __API__,
    headers: {
      'Content-Type': 'application/json'
    }
  }

  let instance = axios.create(defaultOptions)

  instance.interceptors.request.use(async (config) => {
    const token = await AsyncStorage.getItem('token')
    config.headers.Authorization = token ? `Bearer ${token}` : ''
    return config
  })

  return instance
}

export default fetchClient()
