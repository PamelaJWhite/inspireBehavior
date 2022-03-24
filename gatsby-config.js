module.exports = {
  siteMetadata: {
      title: `Inspire Behavior`,
    siteUrl: `https://www.inspirebehaviortherapy.com`,
    description: `Inspire Behavior Therapy website`, 
    image: `https://ibb.co/BBLRkcD`
  },
  plugins: [
    "gatsby-plugin-react-helmet", "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", 
    //this set of 3 plugins is to enable creating mdx blog posts from the src/posts folder
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/src/posts`
      },
    },
    {
      resolve: 'gatsby-plugin-page-creator',
      options:{
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          posts: require.resolve('./src/components/post-layout.js'),
        },
      },
    //end of mdx config
    },
    {
      resolve: 'gatsby-source-filesystem',
      options:{
        name: 'images',
        path: `${__dirname}/src/images`,

      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp'
  ],
};