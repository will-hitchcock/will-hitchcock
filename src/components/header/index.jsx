import React from 'react'
import { string } from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  background: rebeccapurple;
  marginBottom: 1.45rem;
  padding: 1.45rem 1.0875rem;
`

const H1 = styled.h1`
  text-align: center;
  margin: 0;
  color: white;
`

const Header = ({ siteTitle }) => (
  <Wrapper>
    <H1 style={{ margin: 0 }}>
      {siteTitle}
    </H1>
  </Wrapper>
)

Header.propTypes = {
  siteTitle: string.isRequired,
}

export default Header
