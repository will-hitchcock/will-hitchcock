import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
// import Header from '../header'
import GlobalStyles from './globalStyles'

const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={query}
    render={({ site: { siteMetadata: { title } } }) => (
      <>
        <Helmet title={title}>
          <html lang="en" />
        </Helmet>
        <GlobalStyles />
        {/* <Header siteTitle={title} /> */}
        <Container>
          {children}
        </Container>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
