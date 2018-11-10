import styled from 'styled-components'
import { bool, oneOf } from 'prop-types'
import { glitter, black } from '../Foundations/colors'

const Header = styled.h1`
  display: flex;
  align-items: baseline;
  justify-content: flex-start;
  color: ${({ inverted }) => (inverted ? glitter : black)};
`

Header.propTypes = {
  inverted: bool,
  size: oneOf(['small', 'medium', 'large']),
}

Header.defaultProps = {
  inverted: false,
  size: 'medium',
}

export default Header
