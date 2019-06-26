const path = require('path')

/* We dont need this if we are using contentful because COntentful creates slugs.
    The entire purpose of this code is to create slugs.

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if(node.internal.type == 'MarkdownRemark') {

    const slug = path.basename(node.fileAbsolutePath, '.md')
    
    createNodeField({
      node,
      name: 'slug',
      value: slug
    })

  }
 
}



// 12- Dynamically Generating Pages

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogTemplate = path.resolve('./src/templates/blog.js')
  const res = await graphql(`
  query{
    allMarkdownRemark{
      edges{
        node{
          fields{
            slug
          }
        }
      }
    }
  }
  `)

  // For each slug we create a new page with blog template

  res.data.allMarkdownRemark.edges.forEach((edge) => {
    createPage({
      component : blogTemplate,
      path:`/blog/${edge.node.fields.slug}`,
      context:{
        slug: edge.node.fields.slug
      }
    })
  })
}

// The entire above code is if we need to create pages dynamically for .MD posts we create. We create slug using onCreateNode and then we create pages dynamically using createPages.




*/

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogTemplate = path.resolve('./src/templates/blog.js')
  const res = await graphql(`
  query{
    allContentfulBlogPost{
      edges{
        node{
          slug
        }
      }
    }
  }
  `)

  // For each slug we create a new page with blog template

  res.data.allContentfulBlogPost.edges.forEach((edge) => {
    createPage({
      component : blogTemplate,
      path:`/blog/${edge.node.slug}`,
      context:{
        slug: edge.node.slug
      }
    })
  })
}
