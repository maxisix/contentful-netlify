module.exports = {
  siteMetadata: {
    title: "Gatsby Default Starter",
    desc: "A new blog"
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: "ekw8hwczrjgk",
        accessToken:
          "b31089c742f50494c529cb28a061ea6437b9e8754a947ee4287715b02a33c1ba"
      }
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "img",
        path: `${__dirname}/static/assets`
      }
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-transformer-remark"
  ]
};

// pathPrefix: "/levelupgatsby",
