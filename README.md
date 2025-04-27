# FishStats - Aquarium Species Profiles

A static website built with [11ty](https://www.11ty.dev/) to provide detailed species profiles for aquarium owners, covering fish, invertebrates, non-fish aquatic animals, snails, and plants.

## 📝 Features

- **Detailed Species Profiles**: Comprehensive information about aquarium species
- **Data-driven**: Each species is stored as a JSON file
- **Static Generation**: Fast, secure, and easily deployable
- **Mobile-friendly**: Responsive design for all device sizes
- **Modern UI**: Clean and easy-to-navigate interface

## 🛠️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 14 or later)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/fishstats.git
   cd fishstats
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```
   
   This will start a local development server at `http://localhost:8080`

### Building for production

To build the site for production:

```bash
npm run build
```

This generates the static site in the `_site` directory.

## 📂 Project Structure

```
/src
  /species              # Species data in JSON format
    /fish/              # Fish species
    /nonfish/           # Non-fish species (e.g., axolotls)
    /inverts/           # Invertebrates
    /snails/            # Snails
    /plants/            # Aquatic plants
  /img/                 # Images folder
    /species/           # Species images
    /map/               # Distribution map images
  /layouts/             # Page templates
  /partials/            # Reusable template parts
  /styles/              # CSS styles
  index.njk             # Homepage
  404.njk               # 404 page
  fish.njk              # Fish listing page
  plants.njk            # Plants listing page
  inverts.njk           # Invertebrates listing page
  nonfish.njk           # Non-fish listing page
  snails.njk            # Snails listing page
.eleventy.js            # 11ty configuration
```

## 📊 Adding or Updating Species

### Adding a New Species

1. Determine the category for your species (fish, inverts, nonfish, snails, or plants)
2. Create a new JSON file in the appropriate directory under `/src/species/`
3. Name the file using lowercase letters and underscores (e.g., `clownfish.json`, `java_fern.json`)
4. Fill in the JSON data following the schema (see example below)
5. Add any images to `/src/img/species/` and, if applicable, map images to `/src/img/map/`
6. Validate your JSON file using the validation script: `npm run validate`
7. Commit and push your changes to GitHub, and the site will automatically deploy

### Validating Species JSON Files

We include a validation tool to check that your species JSON files conform to the schema:

```bash
npm run validate
```

This will:
- Check all JSON files in the species directories
- Validate them against the schema in `src/species/schema.json`
- Report any errors that need to be fixed
- Exit with an error code if validation fails (useful for CI/CD pipelines)

### JSON Schema Example

Each species should follow this general structure:

```json
{
  "id": "species_id",
  "commonName": "Common Name",             
  "synonyms": ["Alternate Name"],          
  "scientificName": "Scientific Name",     
  "taxonomy": {
    "kingdom": "Animalia",
    "phylum": "...",
    "class": "...",
    "order": "...",
    "family": "...",
    "genus": "...",
    "species": "..."                       
  },
  "conservationStatus": {
    "iucn": "Status",              
    "cites": "Appendix"               
  },
  "distribution": {
    "range": ["Region 1", "Region 2"], 
    "coordinates": {                      
      "lat": 0.0,
      "lng": 0.0
    },
    "mapImage": "/img/map/species-range.jpg"
  },
  "description": "Detailed description...",
  
  // Additional fields...
  
  "gallery": [
    "/img/species/species-1.jpg",
    "/img/species/species-2.jpg"
  ],
  "tags": ["tag1", "tag2", "tag3"],
  "references": [
    {
      "title": "Reference Title",
      "url": "https://example.org/reference",
      "accessed": "YYYY-MM-DD"
    }
  ]
}
```

### Required Fields

At minimum, each species should include:

- `id`: Unique identifier (used in URLs)
- `commonName`: Common name 
- `scientificName`: Scientific name
- `description`: Brief description

All other fields are optional but recommended for completeness.

### Image Recommendations

- **Species Images**: 1200 × 800 pixels, JPG format
- **Map Images**: 800 × 600 pixels, JPG format
- Keep filenames consistent: `species-name-1.jpg`, `species-name-2.jpg`, etc.

## 🚀 Deployment

The site is configured to deploy to [Cloudflare Pages](https://pages.cloudflare.com/).

1. Connect your GitHub repository to Cloudflare Pages
2. Configure the build settings:
   - Build command: `npm run build`
   - Build output directory: `_site`
   - Node.js version: `16` (or later)

## 🧪 Local Development

To develop locally:

1. Start the development server:
   ```bash
   npm start
   ```

2. Make your changes
3. The browser will auto-reload when files are saved

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request or open an issue.

---

For questions or support, please open an issue on GitHub. 