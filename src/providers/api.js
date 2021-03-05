import axios from 'axios'
import Config from 'react-native-config'

import { getToken } from 'src/utils/auth'

const api = axios.create({
  baseURL: Config.API_URL
})

api.interceptors.request.use(async ({ headers, ...config }) => {
  const token = await getToken()

  return {
    ...config,
    headers: {
      ...headers,
      Authorization: `Bearer ${token}`
    }
  }
})

api.interceptors.response.use(
  response => response?.data,
  err => Promise.reject(err?.response?.data)
)

export default api
