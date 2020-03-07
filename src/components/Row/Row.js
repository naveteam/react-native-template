import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Column } from '../Column'

const RowComponent = styled(Column)`
  flex-direction: row;
`

RowComponent.propTypes = {
  flex: PropTypes.number,
  flexWrap: PropTypes.bool,
  alignItems: PropTypes.string,
  justifyContent: PropTypes.string
}

export default RowComponent
