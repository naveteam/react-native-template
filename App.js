import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Home, Profile } from 'src/screens'

if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'))
}

const Stack = createStackNavigator()

const App = props => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='Profile' component={Profile} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default App
