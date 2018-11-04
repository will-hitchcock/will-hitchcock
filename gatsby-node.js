// const path = require('path')
//
// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions
//   return new Promise((resolve, reject) => {
//     const PageTemplate = path.resolve('src/components/page.jsx')
//     resolve(
//       graphql(/* GraphQL */`
//         contentfulProfile(id: { eq: 1 }) {
//           header
//           heroImage
//         }
//       `).then((result) => {
//         if (result.errors) {
//           reject(result.errors)
//         }
//         console.log(result)
//         // result.data.allContentfulPage.edges.forEach(({ node: { id } }) => {
//         //   createPage({
//         //     path: slug === 'index' ? '/' : `/${slug}`,
//         //     component: PageTemplate,
//         //     context: {
//         //       id,
//         //     },
//         //   })
//         // })
//       }),
//     )
//   })
// }
