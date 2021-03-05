import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { Login } from 'src/screens'

const Stack = createStackNavigator()

const LoginStack = () => (
  <Stack.Navigator>
    <Stack.Screen name='Login' component={Login} />
  </Stack.Navigator>
)

export default LoginStack
