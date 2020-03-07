import styled from 'styled-components'

import { parseModifiers } from 'src/utils'

const InputComponent = styled.TextInput.attrs(props => ({
  autoCapitalize: 'none',
  ...props
}))`
  border: 1px solid black;
  color: black;
  padding: 4px 8px;
  border-radius: 4px;
  ${props => parseModifiers(props)}
`

export default InputComponent
