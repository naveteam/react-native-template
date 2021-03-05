import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { Home } from 'src/screens'

const Stack = createStackNavigator()

const HomeSack = () => (
  <Stack.Navigator>
    <Stack.Screen name='Home' component={Home} />
  </Stack.Navigator>
)

export default HomeSack
