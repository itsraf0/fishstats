const fs = require('fs');
const path = require('path');

module.exports = function(eleventyConfig) {
  // Passthrough copy for images and styles
  eleventyConfig.addPassthroughCopy("./src/img");
  eleventyConfig.addPassthroughCopy("./src/styles");
  eleventyConfig.addPassthroughCopy({ "./_headers": "_headers" });

  // Add year shortcode for copyright
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  // Add limit filter to use in templates
  eleventyConfig.addFilter("limit", function(array, limit) {
    return array.slice(0, limit);
  });

  // Add a filter to format file paths
  eleventyConfig.addFilter("formatPath", function(filePath) {
    if (!filePath) return '';
    
    // Extract the category and filename from the input path
    const parts = filePath.split('/');
    const category = parts[parts.length - 2];
    const fileName = parts[parts.length - 1].replace('.json', '');
    
    return `/${category}/${fileName}/`;
  });

  // Create collections for each species type
  eleventyConfig.addCollection("fish", collection => {
    const speciesFiles = loadSpeciesFiles("fish");
    return speciesFiles.map(file => {
      return {
        ...file,
        data: file
      }
    });
  });

  eleventyConfig.addCollection("nonfish", collection => {
    const speciesFiles = loadSpeciesFiles("nonfish");
    return speciesFiles.map(file => {
      return {
        ...file,
        data: file
      }
    });
  });

  eleventyConfig.addCollection("inverts", collection => {
    const speciesFiles = loadSpeciesFiles("inverts");
    return speciesFiles.map(file => {
      return {
        ...file,
        data: file
      }
    });
  });

  eleventyConfig.addCollection("snails", collection => {
    const speciesFiles = loadSpeciesFiles("snails");
    return speciesFiles.map(file => {
      return {
        ...file,
        data: file
      }
    });
  });

  eleventyConfig.addCollection("plants", collection => {
    const speciesFiles = loadSpeciesFiles("plants");
    return speciesFiles.map(file => {
      return {
        ...file,
        data: file
      }
    });
  });

  // Add a collection for all species
  eleventyConfig.addCollection("allSpecies", collection => {
    const categories = ["fish", "nonfish", "inverts", "snails", "plants"];
    let allSpecies = [];
    categories.forEach(category => {
      const speciesFiles = loadSpeciesFiles(category);
      allSpecies = allSpecies.concat(speciesFiles.map(file => {
        return {
          ...file,
          data: file
        }
      }));
    });
    return allSpecies;
  });

  // Configure 11ty
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "partials",
      layouts: "layouts"
    },
    templateFormats: ["njk", "md", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};

// Helper function to load species JSON files
function loadSpeciesFiles(category) {
  const speciesDir = path.join(__dirname, "src", "species", category);
  if (!fs.existsSync(speciesDir)) {
    return [];
  }
  
  const files = fs.readdirSync(speciesDir)
    .filter(file => file.endsWith('.json'));
  
  return files.map(file => {
    const filePath = path.join(speciesDir, file);
    try {
      const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      return {
        ...data,
        category,
        url: `/${category}/${data.id}/`
      };
    } catch (err) {
      console.error(`Error loading ${filePath}:`, err);
      return null;
    }
  }).filter(item => item !== null);
} 