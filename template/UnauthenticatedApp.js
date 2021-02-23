import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Login } from 'src/screens'

const Stack = createStackNavigator()

const UnauthenticatedApp = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Login' component={Login} />
    </Stack.Navigator>
  )
}

export default UnauthenticatedApp
