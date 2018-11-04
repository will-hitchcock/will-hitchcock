import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Profile from '../components/Profile'
import Layout from '../components/Layout'

const Index = () => (
  <StaticQuery
    query={graphql`
      {
        contentfulProfile {
          header
          blurb
          socialLinks {
            icon
            url
          }
          heroImage {
            file {
              url
            }
          }
        }
      }
    `}
    render={(
      {
        contentfulProfile: {
          header,
          blurb,
          socialLinks,
          heroImage: {
            file: {
              url,
            },
          },
        },
      },
    ) => (
      <Layout>
        <Profile
          header={header}
          blurb={blurb}
          socialLinks={socialLinks}
          heroImage={`https://${url}`}
        />
      </Layout>
    )}
  />
)

export default Index
