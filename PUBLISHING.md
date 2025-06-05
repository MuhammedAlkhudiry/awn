# Publishing Guide for AWN

## Initial Setup

1. **Create NPM Account**: Sign up at npmjs.com
2. **Create GitHub Repository**: Push code to GitHub
3. **Update package.json**: Replace `username` with your GitHub username in repository URLs
4. **Set NPM Token**: Add `NPM_TOKEN` secret to GitHub repository settings

## Release Workflow

### 1. Making Changes
When you make changes to the codebase:

```bash
# Make your changes
git add .
git commit -m "feat: add new utility function"

# Create a changeset to describe your changes
npm run changeset
```

### 2. The Changeset Process
When you run `npm run changeset`, you'll be prompted to:
- Select the type of change (patch, minor, major)
- Write a summary of your changes
- This creates a markdown file in `.changeset/`

### 3. Automatic Release
When you push to `main` branch:
1. GitHub Actions will run tests
2. If there are changesets, it will create a "Release" PR
3. The Release PR will update versions and changelog
4. When you merge the Release PR, it will automatically publish to NPM

## Manual Release (if needed)

```bash
# Update versions based on changesets
npm run version

# Build and publish
npm run release
```

## First Release Steps

1. **Update Repository URLs** in `package.json`
2. **Push to GitHub**
3. **Add NPM_TOKEN secret** to GitHub repository
4. **Merge the existing changeset** to trigger first release

## Commands Reference

- `npm run changeset` - Add a new changeset
- `npm run version` - Consume changesets and update versions  
- `npm run release` - Build and publish to NPM
- `npm run build` - Build the project
- `npm run test:run` - Run all tests

## Version Guidelines

- **Patch (0.0.x)**: Bug fixes, minor improvements
- **Minor (0.x.0)**: New features, new utilities
- **Major (x.0.0)**: Breaking changes, major refactors

The first release will be `1.0.0` when you merge the initial changeset.