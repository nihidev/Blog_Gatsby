import React from 'react'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'

import Head from '../components/head'

import Layout from "../components/layout"
import '../styles/index.scss'

const IndexPage = () => {
  return(
    <Layout>
      <Head title="Home"/>
      <h1> Im Nihildev</h1>
      <h2> Im studying in TUM</h2>
      <p> Need a developer <a href="/contact">Contact Me</a></p>
    </Layout>
  )
  
}

export default IndexPage