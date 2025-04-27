const fs = require('fs');
const path = require('path');
const Ajv = require('ajv');
const addFormats = require('ajv-formats');

// Initialize Ajv
const ajv = new Ajv({ allErrors: true });
addFormats(ajv);

// Load schema
const schema = JSON.parse(fs.readFileSync(path.join(__dirname, 'src', 'species', 'schema.json'), 'utf8'));
const validate = ajv.compile(schema);

// Get species categories
const speciesTypes = ['fish', 'nonfish', 'inverts', 'snails', 'plants'];
const speciesDir = path.join(__dirname, 'src', 'species');

// Track results
let validCount = 0;
let invalidCount = 0;
let totalCount = 0;
let errorDetails = [];

// Process each category
speciesTypes.forEach(type => {
  const typeDir = path.join(speciesDir, type);
  
  // Skip if directory doesn't exist
  if (!fs.existsSync(typeDir)) {
    console.log(`Skipping directory: ${type} (not found)`);
    return;
  }
  
  const files = fs.readdirSync(typeDir)
    .filter(file => file.endsWith('.json')); // Only JSON files
  
  // Process each JSON file
  files.forEach(file => {
    totalCount++;
    const filePath = path.join(typeDir, file);
    
    try {
      // Read and parse JSON
      const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      
      // Validate against schema
      const valid = validate(data);
      
      if (valid) {
        validCount++;
        console.log(`✅ ${type}/${file} is valid`);
      } else {
        invalidCount++;
        console.error(`❌ ${type}/${file} is invalid:`);
        validate.errors.forEach(error => {
          console.error(`  - ${error.instancePath}: ${error.message}`);
        });
        
        errorDetails.push({
          file: `${type}/${file}`,
          errors: validate.errors
        });
      }
    } catch (err) {
      invalidCount++;
      console.error(`❌ ${type}/${file} has syntax errors:`, err.message);
      errorDetails.push({
        file: `${type}/${file}`,
        error: err.message
      });
    }
  });
});

// Print summary
console.log('\n--- Validation Summary ---');
console.log(`Total files: ${totalCount}`);
console.log(`Valid: ${validCount}`);
console.log(`Invalid: ${invalidCount}`);

// Exit with error code if invalid files found
if (invalidCount > 0) {
  console.error('\nValidation failed. Fix the above issues before continuing.');
  process.exit(1);
} else {
  console.log('\nAll species files are valid!');
} 