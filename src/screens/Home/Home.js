import React from 'react'
import styled from 'styled-components'

import { Button } from 'src/components'

const BgBlack = styled.View`
  background-color: #000;
  flex: 1;
  align-items: center;
  justify-content: center;
`

const TextWhite = styled.Text`
  color: white;
`

export default ({ navigation }) => (
  <BgBlack>
    <TextWhite>Boilerplate padrão!</TextWhite>
    <Button text='go to profile' onPress={() => navigation.navigate('Profile')} />
  </BgBlack>
)
