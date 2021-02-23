import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Home, Profile } from 'src/screens'

const Stack = createStackNavigator()

const AuthenticatedApp = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Profile' component={Profile} />
    </Stack.Navigator>
  )
}

export default AuthenticatedApp
