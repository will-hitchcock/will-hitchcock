import React from 'react'
import { string } from 'prop-types'
import styled from 'styled-components'
import Icon from '../Icon'
import { babyBlueEyes } from '../Foundations/colors'

const A = styled.a`
  display: inline-flex;
`
const SocialLink = ({ icon, url, color }) => (
  <A href={url} target="_blank" rel="noopener noreferrer">
    <Icon name={icon} color={color} size={64} />
  </A>
)

SocialLink.propTypes = {
  icon: string.isRequired,
  url: string.isRequired,
  color: string,
}

SocialLink.defaultProps = {
  // TODO: update to primary color
  color: babyBlueEyes,
}

export default SocialLink
