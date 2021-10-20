module.exports = {
  siteMetadata: {
    title: "Design by Kevin Chisaki",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 100,
          breakpoints: [640, 768, 960, 1536],
          backgroundColor: `transparent`,
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        }
      }
    },
    "gatsby-plugin-gatsby-cloud", 
    "gatsby-plugin-postcss",
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
  ],
};
