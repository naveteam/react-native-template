import React from 'react'
import { Provider } from 'react-redux'
import { createStackNavigator } from 'react-navigation'
import Welcome from './src/screens/Welcome'
// import store from './src/store/configureStore'

const RootStack = createStackNavigator({
  Welcome
},
{
  headerMode: 'none'
})

export default class App extends React.Component {
  render () {
    return (
      // <Provider store={store}>
      <RootStack />
      // </Provider>
    )
  }
}
