const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy('./src/style.css')  //input
    eleventyConfig.addPassthroughCopy('./src/assets');
    eleventyConfig.addPassthroughCopy('./src/admin');

    eleventyConfig.addFilter("luxonDate", date => {
      return DateTime.fromJSDate(date).toLocaleString(DateTime.DATE_MED);
    });
    return {
      dir: {
        input: "src",
        output: "public"
      }
    }
  };