import React from 'react'
import { string } from 'prop-types'
import Icon from '../Icon'

const SocialLink = ({ icon, url, color }) => (
  <a href={url} target="_blank" rel="noopener noreferrer">
    <Icon name={icon} color={color} size={64} />
  </a>
)

SocialLink.propTypes = {
  icon: string.isRequired,
  url: string.isRequired,
  color: string,
}

SocialLink.defaultProps = {
  // TODO: update to primary color
  color: '#000000',
}

export default SocialLink
