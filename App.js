import React from 'react'
import { Provider } from 'react-redux'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import Welcome from 'src/screens/Welcome'
// import store from './src/store/configureStore'

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
