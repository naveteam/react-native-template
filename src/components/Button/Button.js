import React from 'react'
import PropTypes from 'prop-types'
import { Text } from 'react-native'
import styled from 'styled-components'

import { parseModifiers } from 'src/utils'

const ButtonComponent = ({ text, ...props }) => (
  <Button {...props}>
    <Text>{text}</Text>
  </Button>
)

const Button = styled.TouchableOpacity`
  color: black;
  padding: 10px;
  border-radius: 4px;
  background-color: ${props => props.color || 'white'};
  ${props => parseModifiers(props)}
`

ButtonComponent.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string
}

export default ButtonComponent
