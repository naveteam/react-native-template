import React from 'react'
import styled from 'styled-components'

const Button = styled.TouchableOpacity`
  background-color: ${props => props.bg || 'white'};
  color: black;
  padding: 5px;
`

const ButtonText = styled.Text`
  font-size: 20;
  font-weight: bold;
  color: #000;
`

export default ({ bg, name }) => (
  <Button>
    <ButtonText bg={bg}>{name}, Bem vindo</ButtonText>
  </Button>
)
