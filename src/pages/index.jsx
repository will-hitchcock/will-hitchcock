import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Profile from '../components/Profile'

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
          resume {
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
              url: heroImage,
            },
          },
          resume: {
            file: {
              url: resume,
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
          heroImage={`https://${heroImage}`}
          resume={`https://${resume}`}
        />
      </Layout>
    )}
  />
)

export default Index
