import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import headerStyles from './header.module.scss'

const Header = () => {
  const data = useStaticQuery(graphql`
  query{
    site{
      siteMetadata{
        title
      }
    }
  }
  `)

  return(
    <header className={headerStyles.header}>
      <h1>
         <Link className={headerStyles.title} to="/"> {data.site.siteMetadata.title} 
         </Link>
      </h1>
      <nav>
        <ul className={headerStyles.nav_list}>
          <li> <Link className={headerStyles.nav_item} activeClassName={headerStyles.active_nav_item} to="/">Home</Link></li>
          <li> <Link className={headerStyles.nav_item} activeClassName={headerStyles.active_nav_item}  to="/about">About</Link></li>
          <li> <Link className={headerStyles.nav_item} activeClassName={headerStyles.active_nav_item} to="/contact">Contact</Link></li>
          <li> <Link className={headerStyles.nav_item} activeClassName={headerStyles.active_nav_item} to="/blog">Blog</Link></li>
        </ul>
      </nav>
    </header>

  )
}

export default Header

