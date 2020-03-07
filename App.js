import React from 'react'
import { Text } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'

import { AppProviders, useUser } from 'src/context'

import AuthenticatedApp from './AuthenticatedApp'
import UnauthenticatedApp from './UnauthenticatedApp'

if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'))
}

const App = props => {
  const { isFetchingUser, user } = useUser()

  console.log('isFetchingUser', isFetchingUser)
  if (isFetchingUser) {
    return <Text>Carregando...</Text>
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>{user ? <AuthenticatedApp /> : <UnauthenticatedApp />}</NavigationContainer>
    </SafeAreaProvider>
  )
}

export default () => (
  <AppProviders>
    <App />
  </AppProviders>
)
