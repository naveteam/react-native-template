import PropTypes from 'prop-types'
import styled from 'styled-components'
import { space, layout, typography, color, variant } from 'styled-system'

const BIGGER = 'bigger'
const BIG = 'big'
const MEDIUM = 'medium'
const REGULAR = 'regular'
const SMALL = 'small'
const SMALLER = 'smaller'
const TINY = 'tiny'

const Text = styled.Text(
  variant({
    variants: {
      [BIGGER]: {
        fontSize: 32,
        lineHeight: 39
      },
      [BIG]: {
        fontSize: 24,
        lineHeight: 29
      },
      [MEDIUM]: {
        fontSize: 20,
        lineHeight: 24
      },
      [REGULAR]: {
        fontSize: 16,
        lineHeight: 26
      },
      [SMALL]: {
        fontSize: 14,
        lineHeight: 17
      },
      [SMALLER]: {
        fontSize: 12,
        lineHeight: 15
      },
      [TINY]: {
        fontSize: 10,
        lineHeight: 12
      }
    }
  }),
  space,
  layout,
  typography,
  color
)

Text.propTypes = {
  variant: PropTypes.oneOf([BIGGER, BIG, MEDIUM, REGULAR, SMALL, SMALLER, TINY]),
  textAlign: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  lineHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default Text
