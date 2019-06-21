import React from 'react'
import { Provider } from 'react-redux'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import Welcome from 'src/screens/Welcome'
import { env } from 'src/config'
// import store from './src/store/configureStore'

if (env.environment) {
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
    return (
      // <Provider store={store}>
      <RootStack />
      // </Provider>
    )
  }
}
