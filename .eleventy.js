const fs = require("fs");

const filter = require("./src/filter");


// @note import plugins
const pluginRss = require("@11ty/eleventy-plugin-rss");


// @note handle `clj` extension
function compile_clj(inputContent, inputPath) {

  if(inputPath.startsWith("\.\/src\/extra")) {
    return;
  }

  this.addDependencies(inputPath, ["./src/extra/components.cljs"]);

  return async (data) => {
    const { loadFile } = await import('nbb');
    const result = await loadFile("run_clj.cljs");
    return result;
  };

}


module.exports = function (eleventyConfig) {
  // @configuration avoid using .gitignore to tell eleventy what should/should
  // not be watched
  eleventyConfig.setUseGitIgnore(false);

  eleventyConfig.addPassthroughCopy("./src/css");

  eleventyConfig.addPassthroughCopy("./src/site.webmanifest");

  eleventyConfig.addFilter("dateFilter", filter.dateFilter);

  eleventyConfig.addFilter("w3cDate", filter.w3cDate);

  // @configuration rock an RSS feed
  eleventyConfig.addPlugin(pluginRss);

  // @note add support for hiccup
  eleventyConfig.addTemplateFormats("cljs");

  // @note add support for hiccup extension
  eleventyConfig.addExtension("cljs", {
    outputFileExtension: "html",
    compile: compile_clj,
  });

  //eleventyConfig.setFrontMatterParsingOptions({
    //delims: ['(comment', 'true)']
  //});

  return {
    dir: {
      input: "src",
      output: "dist",
    },
    passthroughFileCopy: true,
  };
};
