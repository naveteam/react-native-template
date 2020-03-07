import axios from 'axios'

import { getToken } from 'src/utils'
import { API_URL } from 'src/constants'

const provider = axios.create({
  baseURL: process.env.API_URL || API_URL
})

provider.interceptors.request.use(async ({ headers, ...config }) => {
  const token = await getToken()

  return {
    ...config,
    headers: {
      ...headers,
      Authorization: `Bearer ${token}`
    }
  }
})

provider.interceptors.response.use(
  response => response.data,
  err => Promise.reject(err.response.data)
)

export default provider
