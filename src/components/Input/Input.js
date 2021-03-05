import { space, layout, typography, color } from 'styled-system'
import styled from 'styled-components'

const InputComponent = styled.TextInput.attrs(props => ({
  autoCapitalize: 'none',
  ...props
}))`
  border: 1px solid black;
  color: black;
  padding: 4px 8px;
  border-radius: 4px;
  ${space}
  ${layout}
  ${typography}
  ${color}
`

export default InputComponent
