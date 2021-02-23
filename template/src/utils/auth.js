import { AsyncStorage } from 'react-native'

import { ASYNC_STORAGE_TOKEN } from 'src/constants'

export const getToken = () => AsyncStorage.getItem(ASYNC_STORAGE_TOKEN)

export const setToken = token => AsyncStorage.setItem(ASYNC_STORAGE_TOKEN, token)

export const clearToken = () => AsyncStorage.removeItem(ASYNC_STORAGE_TOKEN)
