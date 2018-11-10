import styled from 'styled-components'
import { bool } from 'prop-types'
import units from '../Foundations/units'
import { glitter, black } from '../Foundations/colors'

const sizes = {
  small: units(3),
  medium: units(4),
  large: units(5),
}

const Text = styled.span`
  font-size: ${({ size }) => (sizes[size])};
  line-height: 1;
  display: flex;
  color: ${({ inverted }) => (inverted ? glitter : black)};
`

console.log(bool)

Text.propTypes = {
  inverted: bool,
}

Text.defaultProps = {
  inverted: false,
}

export default Text
