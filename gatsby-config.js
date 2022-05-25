module.exports = {
  // Customize me!
  siteMetadata: {
    company: "Fox and Geese",
    domain: "https://witty-hill-062e68a0f.1.azurestaticapps.net",
    defaultTitle:
      "Data Intelligence Solutions / We're AI Engineers in Portland",
    defaultDescription:
      "We develop practical AI and data intelligence products for commercial, military, and government customers.",
    contact: {
      email: "hello@foxandgeese.com",
    },
    menuLinks: [],
  },
  pathPrefix: "/tiny-agency",
  plugins: [
    "gatsby-plugin-top-layout",
    "gatsby-transformer-remark",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-remove-serviceworker",
    {
      resolve: "gatsby-plugin-material-ui",
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "FoxAndGeese",
        short_name: "FoxAndGeese",
        start_url: "/",
        background_color: "#eeeeee",
        //theme_color: "#6b37bf",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "images/logo.png", // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        //crossOrigin: `use-credentials`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
        ignore: [`**/\.*`],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Fox and Geese LLC`,
        short_name: `Fox and Geese LLC`,
        start_url: `/`,
        background_color: `#eeeeee`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: "./images/logo.png",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/data`,
        name: "data",
        ignore: [`**/\.*`],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-120162676-1",
      },
    },
  ],
};
