import PropTypes from 'prop-types'
import styled from 'styled-components'

import { parseModifiers } from 'src/utils'

const ColumnComponent = styled.View(
  ({ flex, flexWrap = false, alignItems, justifyContent, ...props }) => `
  ${flex ? `flex: ${flex};` : ''}
  ${flexWrap ? 'flex-wrap: wrap;' : ''}
  ${alignItems ? `align-items: ${alignItems};` : ''}
  ${justifyContent ? `justify-content: ${justifyContent};` : ''}
  ${parseModifiers(props)}
`
)

ColumnComponent.propTypes = {
  flex: PropTypes.number,
  flexWrap: PropTypes.bool,
  alignItems: PropTypes.string,
  justifyContent: PropTypes.string
}

export default ColumnComponent
