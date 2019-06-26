import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import { graphql } from 'gatsby'
import Head from '../components/head'

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About"/>
      <h1>About Us</h1>
      <p>
        Link to Contact Page<Link to="/contact">Click Here</Link>
      </p>
    </Layout>
  )
}

export default AboutPage
