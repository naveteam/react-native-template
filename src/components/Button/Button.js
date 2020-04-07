import React from 'react'
import PropTypes from 'prop-types'
import { Text } from 'react-native'
import { space, layout, color } from 'styled-system'
import styled from 'styled-components'

const ButtonComponent = ({ text, ...props }) => (
  <Button {...props}>
    <Text>{text}</Text>
  </Button>
)

const Button = styled.TouchableOpacity`
  padding: 10px;
  border-radius: 4px;
  background-color: white;
  align-items: center;
  ${space}
  ${layout}
  ${color}
`

ButtonComponent.propTypes = {
  text: PropTypes.string
}

export default ButtonComponent
