module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-plugin-react-svg",
    options: {
      rule: {
        include: /images/ // See below to configure properly
      }
    }
  },
  ],
}
