import styled from 'styled-components'
import { bool } from 'prop-types'
// import units from '../Foundations/units'
// import margin from '../Foundations/margin'
import { glitter, black } from '../Foundations/colors'

const Paragraph = styled.p`
  display: inline-block;
  color: ${({ inverted }) => (inverted ? glitter : black)};
`

Paragraph.propTypes = {
  inverted: bool,
}

Paragraph.defaultProps = {
  inverted: false,
}

export default Paragraph
