import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import { graphql } from 'gatsby'
import Head from '../components/head'

const ContactPage = () => {
  return (
      <Layout>
        <Head title="Contact"/>
      <h1>Contact Page </h1>
      <p>
        Link to my facebook page
        <a href="https://twitter.com/dev_nikhil" target="_blank">
          dev_nikhil
        </a>
      </p>
      </Layout>
  )
}

export default ContactPage
