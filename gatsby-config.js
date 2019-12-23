module.exports = {
  siteMetadata: {
    title: "Ryan Macy | Developer, Entrepreneur, Teacher",
    description:
      "Ryan Macy's Personal Website, learn who he is, what he uses, and what he's writing about.",
    author: "@bitr0t_",
  },
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `fonts`,
        path: `${__dirname}/src/fonts`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ryan Macy's Personal Website`,
        short_name: `Thyself`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#7000FF`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
