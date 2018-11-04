import React from 'react'
import { string, arrayOf, shape } from 'prop-types'
import styled from 'styled-components'
import SocialLink from '../SocialLink'

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background:
    /* top, transparent red, faked with gradient */
    linear-gradient(
      rgba(0, 0, 0, 0.8),
      rgba(0, 0, 0, 0.8)
    ),
    url(${({ background }) => background}) no-repeat center center fixed;
  background-size: cover;
  color: #C9CED6;
`

const H1 = styled.h1`

`

const Profile = ({
  header,
  blurb,
  socialLinks,
  heroImage,
}) => (
  <Container background={heroImage}>
    <H1>{header}</H1>
    <p>{blurb}</p>
    {socialLinks.map(({ icon, url }) => (
      <SocialLink key={icon} icon={icon} url={url} color="#C9CED6" />
    ))}
  </Container>
)

Profile.propTypes = {
  header: string.isRequired,
  blurb: string.isRequired,
  socialLinks: arrayOf(shape({
    icon: string.isRequired,
    url: string.isRequired,
  })).isRequired,
  heroImage: string.isRequired,
}

export default Profile
