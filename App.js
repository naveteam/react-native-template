import React from 'react'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ThemeProvider } from 'styled-components'

import { AuthenticatedApp, UnauthenticatedApp } from 'src/navigators'
import { AppProviders, useUser } from 'src/context'
import { Loader } from 'src/components'
import theme from 'src/theme'

const queryClient = new QueryClient()

const App = () => {
  const { user, isLoading } = useUser()

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle='dark-content' />
      <NavigationContainer>
        {isLoading ? <Loader flex={1} /> : user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
      </NavigationContainer>
    </ThemeProvider>
  )
}

export default () => (
  <QueryClientProvider client={queryClient}>
    <AppProviders>
      <App />
    </AppProviders>
  </QueryClientProvider>
)
