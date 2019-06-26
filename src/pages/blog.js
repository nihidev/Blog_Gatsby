import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import blogStyles from './blog.module.scss'
import Head from '../components/head'

const BlogPage = () => {

/*
This is for markdown Post - where we enter the post as a MD file.

  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

    //Ends here

  */

    //For Contentful Blog Posts from the Contentful.com From the Internet

  const data = useStaticQuery(graphql` 
  query{
    allContentfulBlogPost (
      sort:{
        fields:publishedDate,
        order:DESC
      }
    )
      {
      edges{
        node{
          title
          slug
          publishedDate(formatString:"MMMM Do, YYYY"
          )
        }
      }
    }
  }
  `)


  /* This can be used for MD post.

  return (
    <Layout>
      <h1>Blog Page</h1>
      <ol className={blogStyles.posts}>
        {data.allMarkdownRemark.edges.map(edge => {
          return (
            <li className={blogStyles.post}>
              <Link to={`/blog/${edge.node.fields.slug}`}>
                <h2>{edge.node.frontmatter.title}</h2>
                <p>{edge.node.frontmatter.date}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
 
// Ends here

*/

// For contenful posts

return (
  <Layout>
    <Head title="Blog"/>
    <h1>Blog Page</h1>
    <ol className={blogStyles.posts}>
      {data.allContentfulBlogPost.edges.map(edge => {
        return (
          <li className={blogStyles.post}>
            <Link to={`/blog/${edge.node.slug}`}>
              <h2>{edge.node.title}</h2>
              <p>{edge.node.publishedDate}</p>
            </Link>
          </li>
        )
      })}
    </ol>
  </Layout>
)

}

export default BlogPage
