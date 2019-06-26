module.exports = {
  siteMetadata: {
    title: "Gatsby Project",
    author: "Nihil Dev",
  },
  plugins: [
    // Plugin for React-Helmet
    'gatsby-plugin-react-helmet',

    
    // Plugin for Contentful

    {
      resolve: 'gatsby-source-contentful',
      options:{
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    },


    //Plugin for CSS.

    "gatsby-plugin-sass",

    // Plugin to generate pages dynamically and to fetch data from filesystem 
     
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      }
    },

    // Plugin to insert images.

    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    }
    
  ]
}

//To Setup GRAPHQL PLAYGROUND - Easier ways are there *
/** 
let activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"

console.log('Using environment config: ${activeEnv}')

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

// GRAPHQL PLAYGROUND ENDS HERE

*/
