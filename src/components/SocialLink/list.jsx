import React from 'react'
import { arrayOf, shape, string } from 'prop-types'
import Row from '../Foundations/row'
import SocialLink from './index'

const SocialLinkList = ({ socialLinks }) => (
  <Row>
    {socialLinks.map((link) => (
      <SocialLink key={link.icon} {...link} />
    ))}
  </Row>
)

SocialLinkList.propTypes = {
  socialLinks: arrayOf(shape({
    icon: string.isRequired,
    url: string.isRequired,
  })).isRequired,
}

export default SocialLinkList
