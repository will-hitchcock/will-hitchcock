require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: 'Gatsby with Contentful',
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN,
      },
    },
    'gatsby-transformer-remark',
  ],
}
