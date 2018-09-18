import React from 'react'
import { Provider } from 'react-redux'
import styled from 'styled-components'
// import store from './src/store/configureStore'

const BgBlack = styled.View`
  background-color: #000;
  flex: 1;
  align-items: center;
  justify-content: center
`

const TextWhite = styled.Text`
  color: white
`

export default class App extends React.Component {
  render () {
    return (
      // <Provider store={store}>
      <BgBlack>
        <TextWhite>Boilerplate padrão!</TextWhite>
      </BgBlack>
      // </Provider>
    )
  }
}
