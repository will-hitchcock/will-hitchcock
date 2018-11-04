import React from 'react'
import { shallow } from 'enzyme'
import SocialLink from './index'

describe('SocialLink', () => {
  it('renders a linkedin <SocialLink />, color #0077B5, size 32', () => {
    expect(shallow(
      <SocialLink
        icon="linkedin"
        color="#0077B5"
        url="https://www.linkedin.com/in/willhitchcock"
      />,
    )).toMatchSnapshot()
  })

  it('renders a twitter <SocialLink />, color #1DA1F2, size 64', () => {
    expect(shallow(
      <SocialLink
        icon="twitter"
        color="#1DA1F2"
        url="https://www.linkedin.com/in/willhitchcock"
      />,
    )).toMatchSnapshot()
  })

  it('renders a github <SocialLink />, color #000000, size 128', () => {
    expect(shallow(
      <SocialLink
        icon="twitter"
        color="#000000"
        url="https://www.linkedin.com/in/willhitchcock"
      />,
    )).toMatchSnapshot()
  })
})
