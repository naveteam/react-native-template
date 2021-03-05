import AsyncStorage from '@react-native-community/async-storage'

import { TOKEN } from 'src/constants/auth'

export const getToken = () => AsyncStorage.getItem(TOKEN)

export const setToken = token => AsyncStorage.setItem(TOKEN, token)

export const clearToken = () => AsyncStorage.removeItem(TOKEN)
