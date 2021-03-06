module.exports = {
  siteMetadata: {
    siteUrl: `https://case.imedadel.me`,
  },
    plugins: [
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: "Case - a convenient case converter",
          short_name: "Case",
          start_url: "/",
          background_color: "#FCFCFC",
          theme_color: "#6979F8",
          // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
          // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
          display: "standalone",
          icon: "src/images/icon.png", // This path is relative to the root of the site.
        },
      },
      'gatsby-plugin-offline',
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-sitemap`,
      {
        resolve: `gatsby-plugin-typography`,
        options: {
          pathToConfigModule: `src/utils/typography`,
        },
      },
    ],
  }