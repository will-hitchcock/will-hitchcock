import React from 'react'
import { shallow } from 'enzyme'
import Icon from './index'

describe('Icon', () => {
  it('renders a linkedin <Icon />, color #0077B5, size 32', () => {
    expect(shallow(
      <Icon name="linkedin" color="#0077B5" size={32} />,
    )).toMatchSnapshot()
  })

  it('renders a twitter <Icon />, color #1DA1F2, size 64', () => {
    expect(shallow(
      <Icon name="twitter" color="#1DA1F2" size={64} />,
    )).toMatchSnapshot()
  })

  it('renders a github <Icon />, color #000000, size 128', () => {
    expect(shallow(
      <Icon name="twitter" color="#000000" size={128} />,
    )).toMatchSnapshot()
  })
})
