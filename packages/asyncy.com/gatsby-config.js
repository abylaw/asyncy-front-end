module.exports = {
  siteMetadata: {
    title: 'Asyncy',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-sass`,
    `gatsby-plugin-glamor`,
    `gatsby-plugin-pageclip`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content`,
        name: 'markdown-pages',
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'TRACKING_ID',
        head: false,
        anonymize: true,
        respectDNT: true,
      },
    },
  ],
}
