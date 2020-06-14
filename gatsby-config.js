module.exports = {
  siteMetadata: {
    siteTitle: `React Three Fiber`,
    defaultTitle: `React Three Fiber`,
    siteTitleShort: `react-three-fiber`,
    siteDescription: `React Three Fiber is a React reconciler for Threejs on the web and react-native.`,
    siteUrl: `https://react-three-fiber.com`,
    siteAuthor: `Paul Henschel`,
    siteImage: `/banner.png`,
    siteLanguage: `en`,
    themeColor: `#333`,
    basePath: `/docs`,
    footer: ``,
  },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        basePath: "/docs",
        configPath: `src/config`,
        docsPath: `src/docs`,
        githubUrl: `https://github.com/react-spring/react-three-fiber`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `React Three Fiber`,
        short_name: `React Three Fiber`,
        start_url: `/docs`,
        background_color: `#ffffff`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // trackingId: ``,
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://react-three-fiber.com`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
