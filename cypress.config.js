const { defineConfig } = require("cypress");




module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    video: true,
    videoCompression: false,
    videosFolder: 'cypress/videos',
    chromeWebSecurity: false,
    baseUrl:'https://jobs.lever.co/FlatironsDevelopment/e6c22608-5268-4eea-b7f8-c3f8b5f7e88b/apply'
  },
});
