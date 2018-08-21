import React from 'react'
// import { Provider } from 'react-redux'
import { StyleSheet, Text, View } from 'react-native'
// import store from './src/store/configureStore'

export default class App extends React.Component {
  render () {
    return (
      // <Provider store={store}>
        <View style={styles.container}>
          <Text>Boilerplate padrão!</Text>
        </View>
      // </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
