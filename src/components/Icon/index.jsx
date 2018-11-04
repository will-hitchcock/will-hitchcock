import React from 'react'
import { string, number, oneOf } from 'prop-types'
import { Icon as IconKit } from 'react-icons-kit'
import { linkedin } from 'react-icons-kit/fa/linkedin'
import { twitter } from 'react-icons-kit/fa/twitter'
import { github } from 'react-icons-kit/fa/github'
import styled from 'styled-components'

const Container = styled.span`
  color: ${(props) => props.color}
`

const getIcon = (name) => {
  switch (name) {
    case 'linkedin':
      return linkedin
    case 'twitter':
      return twitter
    case 'github':
      return github
    default:
      return null
  }
}

const Icon = ({ name, color, size }) => (
  <Container color={color}>
    <IconKit icon={getIcon(name)} size={size} />
  </Container>
)

Icon.propTypes = {
  name: oneOf([
    'linkedin',
    'twitter',
    'github',
  ]).isRequired,
  color: string.isRequired,
  size: number.isRequired,
}

export default Icon
