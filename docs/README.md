# Awn Documentation

This directory contains the documentation website for Awn.

## Structure

- `public/` - Static files for the documentation website
- `src/` - Documentation generation scripts

## Development

### Generate Documentation

```bash
npm run docs:generate
```

This reads the utility manifests from the registry and generates `utilities.json`.

### Local Development

```bash
npm run docs:serve
```

Then visit http://localhost:8000

### Deployment

The documentation is automatically deployed to GitHub Pages when changes are pushed to the main branch.

## Files

- `public/index.html` - Main documentation page
- `public/styles.css` - Stylesheet with clean, modern design
- `public/script.js` - JavaScript for interactivity
- `src/generate-docs.js` - Script to generate utilities data from registry
- `public/utilities.json` - Generated utilities data (auto-generated)

The documentation style is inspired by Zod's clean documentation with:

- Modern, minimal design
- Responsive layout
- Interactive utility cards
- Copy-to-clipboard functionality
- Smooth scrolling navigation
- Syntax highlighting