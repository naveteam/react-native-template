import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import Welcome from 'src/screens/Welcome'
// import store from './src/store/configureStore'

if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'))
}

const RootStack = createAppContainer(
  createStackNavigator(
    {
      Welcome: {
        screen: Welcome
      }
    },
    {
      headerMode: 'none'
    }
  )
)

export default class App extends React.Component {
  render() {
    return <RootStack />
  }
}
