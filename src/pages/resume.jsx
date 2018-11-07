import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Resume from '../components/Resume'

const ResumePage = () => (
  <StaticQuery
    query={graphql`
      {
        allContentfulExperienceSet {
          edges {
            node {
              title
              experience {
                name
                title
                startDate
                endDate
                location
                logo {
                  file {
                    url
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={({ allContentfulExperienceSet: { edges: experienceSets } }) => (
      <Layout>
        <Resume experienceSets={experienceSets} />
      </Layout>
    )}
  />
)

export default ResumePage
