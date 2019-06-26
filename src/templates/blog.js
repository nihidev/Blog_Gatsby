import React from 'react'
import { graphql } from 'gatsby'

// This import is used to Render the JSON. It gives only the required data from the JSON 
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Layout from '../components/layout'
import Head from '../components/head'


// 13 - Rendering Post Data into Blog Template

/* This code is used to create Pages for .MD files written by us. If we need to create dynamic pages for contentful pages we need to use a different code bcoz the query changes.

export const query = graphql`
query (
  $slug: String!
){
  markdownRemark (
    fields: {
      slug:{
        eq: $slug
      }
    }
  )
  {
    frontmatter{
      title
      date
    }
    html
  }
}
`

// We put the Data into the Blog Template .. Its Dynamic. 
// dangerouslySetInnerHTML contains the HTML content. It should not have any space.
// i.e <div></div> No space between the divs.

const Blog = (props) => {
  return(
    <Layout>
      <h1> {props.data.markdownRemark.frontmatter.title} </h1>
      <p> {props.data.markdownRemark.frontmatter.date} </p>
      <div dangerouslySetInnerHTML= {{__html: props.data.markdownRemark.html }}></div>
    </Layout>
  )
}  


*/

export const query = graphql`
query (
  $slug: String!
)
{
  contentfulBlogPost(
      slug:{
        eq: $slug
      }
  )
  {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body{
        json
      }
  }
}
`



const Blog = (props) => {
  const options ={
    renderNode: {
      "embedded-asset-block": (node) => {
       const alt= node.data.target.fields.title['en-US']
       const url= node.data.target.fields.file['en-US'].url
        return <img alt={alt} src={url}/>
      }
    }
  }
  return(
    <Layout>
      <Head title={props.data.contentfulBlogPost.title} />
      <h1>{props.data.contentfulBlogPost.title}</h1>
      <p>{props.data.contentfulBlogPost.publishedDate}</p>
      {
        documentToReactComponents(props.data.contentfulBlogPost.body.json, options)
      }
    </Layout>
  )
}  

export default Blog



