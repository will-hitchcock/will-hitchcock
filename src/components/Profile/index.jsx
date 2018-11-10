import React from 'react'
import { string, arrayOf, shape } from 'prop-types'
import styled from 'styled-components'
import SocialLinkList from '../SocialLink/list'
import Button from '../Button'
import Row from '../Foundations/row'
import units from '../Foundations/units'
import Header from '../Typography/Header'
import Paragraph from '../Typography/Paragraph'

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background:
    linear-gradient(
      rgba(0, 0, 0, 0.8),
      rgba(0, 0, 0, 0.8)
    ),
    url(${({ background }) => background}) no-repeat center center fixed;
  background-size: cover;
  color: #C9CED6;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${units(160)};
  padding: ${units(9)};
`

const Profile = ({
  header,
  blurb,
  socialLinks,
  heroImage,
  resume,
}) => (
  <Container background={heroImage}>
    <Content>
      <Header size="large" inverted>{header}</Header>
      <Paragraph inverted>{blurb}</Paragraph>
      <Row>
        <Button inverted text="Paper Resume" url={resume} external />
        <Button inverted text="Digital Resume" url="/resume" />
      </Row>
      <SocialLinkList socialLinks={socialLinks} />
    </Content>
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
  resume: string.isRequired,
}

export default Profile
