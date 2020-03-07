import { fetchClient } from 'src/providers'

export const getMe = () => fetchClient.get('/v1/me')

export const loginUser = credentials => fetchClient.post('/v1/users/login', credentials)
