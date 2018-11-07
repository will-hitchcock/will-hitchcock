import React from 'react'
import { string, bool } from 'prop-types'
import styled, { css } from 'styled-components'
import { babyBlueEyes, stPatricksBlue, glitter } from '../Foundations/colors'
import units from '../Foundations/units'

const StyledButton = styled.a`
  display: inline-flex;
  padding: 8px;
  background: transparent;
  ${({ inverted }) => (
    inverted
      ? css`
        border: 2px solid ${babyBlueEyes};
        color: ${babyBlueEyes};
      `
      : css`
        border: 2px solid ${stPatricksBlue};
        background-color: ${stPatricksBlue};
        color: ${glitter};
      `
  )}
  text-decoration: none;
  border-radius: ${units(1)};
`

const Button = ({
  text,
  external,
  url,
  inverted,
}) => (
  <StyledButton
    href={url}
    target={external ? '_blank' : null}
    rel={external ? 'noopener noreferrer' : null}
    inverted={inverted}
  >
    {text}
  </StyledButton>
)

Button.propTypes = {
  text: string.isRequired,
  url: string.isRequired,
  external: bool,
  inverted: bool,
}

Button.defaultProps = {
  external: false,
  inverted: false,
}

export default Button
