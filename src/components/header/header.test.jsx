import React from 'react'
import { shallow } from 'enzyme'
import Header from './index'

describe('<Header />', () => {
  it('should render a <Header />', () => {
    expect(shallow(<Header siteTitle="Test title!" />)).toMatchSnapshot()
  })
})
