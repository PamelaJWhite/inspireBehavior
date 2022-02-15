module.exports = {
  siteMetadata: {
      title: `Inspire Behavior`,
    siteUrl: `https://www.inspirebehaviortherapy.com`,
    description: `Inspire Behavior Therapy website`, 
    image: "./src/images/logo.png"
  },
  plugins: ["gatsby-plugin-react-helmet", "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }]
};