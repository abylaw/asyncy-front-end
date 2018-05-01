module.exports = {
  siteMetadata: {
    title: 'Asyncy',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-sass`,
    `gatsby-plugin-glamor`,
    `gatsby-plugin-pageclip`,
    {
      resolve: `gatsby-plugin-google-maps`,
      options: {
        key: `AIzaSyDWTrdPlgVur0zs-coQAdNw99FagQ-Rors`,
        location: {
          lng: 4.8935913,
          lat: 52.3648436,
        },
        mapElementId: `map`,
      }
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-typeform`,
      options: {
        forms: {
          feedback: 'deaLvw',
          contact: 'GAr52V',
          partners: 'TgCuNU',
          launchparty: 'ySbpV8',
        },
      },
    },
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
