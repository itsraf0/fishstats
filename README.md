# FishStats - Aquarium Species Profiles

## Contributing Species Data

Thank you for contributing to FishStats! This guide will help you add your own aquarium species profiles.

### Quick Start

1. Create a JSON file for your species in the appropriate directory:
   - `src/species/fish/` - for fish species
   - `src/species/inverts/` - for invertebrates
   - `src/species/snails/` - for snail species
   - `src/species/plants/` - for aquatic plants
   - `src/species/nonfish/` - for other aquatic creatures

2. Name your file using the species common name in lowercase with hyphens instead of spaces (e.g., `neon-tetra.json`, `java-fern.json`).

3. Fill out the species data following the JSON schema format.

4. Validate your file using `node validate-species.js` before submitting. A pull request check is in progress!

### JSON Format

Your species JSON file must follow our schema. Required fields include:
- `id` - Unique identifier (same as filename without extension)
- `commonName` - Common name of the species
- `scientificName` - Scientific name of the species
- `description` - A detailed description

See (src/species/schema.json)[https://github.com/itsraf0/fishstats/blob/main/src/species/schema.json] for the full schema (template) and (src/species/fish/clownfish.json)[https://github.com/itsraf0/fishstats/blob/main/src/species/schema.json] for a complete example.

### Tips for Great Contributions

- Include detailed care information (water parameters, tank requirements)
- Add feeding recommendations based on your experience
- Provide accurate size and lifespan information
- Include compatibility data with other species
- Add references to sources where possible

### Validation

Run `node validate-species.js` to check that your JSON file is valid before submitting. This will catch any formatting errors or missing required fields.

### Images

If you have high-quality images, place them in the `src/img/species/` directory using the same ID as your JSON file (e.g., `neon-tetra-1.jpg`, `neon-tetra-2.jpg`).

### Questions?

If you have any questions about contributing, please open an issue or contact Raf (raf@itsraf.com or form on website).

Thank you for helping build the FishStats database!

*p.s. thanks chatgpt for making my inchoherent mispelled ramballing readable*