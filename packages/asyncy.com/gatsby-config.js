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
      resolve: `gatsby-plugin-typeform`,
      options: {
        forms: {
          feedback: 'deaLvw',
          contact: 'GAr52V',
          partners: 'TgCuNU',
          launchparty: 'ySbpV8',
        },
        domain: 'asyncy',
      }
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
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
