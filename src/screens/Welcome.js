import React from 'react'
import styled from 'styled-components'
import Button from 'src/components/commom/Button'

const BgBlack = styled.View`
  background-color: #000;
  flex: 1;
  align-items: center;
  justify-content: center;
`

const TextWhite = styled.Text`
  color: white;
`

export default () => (
  <BgBlack>
    <TextWhite>Boilerplate padrão!</TextWhite>
    <Button name='Olá' />
  </BgBlack>
)
