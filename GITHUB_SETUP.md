# GitHub Setup Guide for AWN

## Step 1: Create Repository on GitHub

1. Go to https://github.com/MuhammedAlkhudiry
2. Click the "+" button and select "New repository"
3. Fill in the details:
   - **Repository name**: `awn`
   - **Description**: `عون (AWN) - A shadcn-style utility library for TypeScript. Copy utilities into your project.`
   - **Visibility**: Public
   - **DO NOT** initialize with README, .gitignore, or license (we already have them)
4. Click "Create repository"

## Step 2: Push Your Code

After creating the repository on GitHub, run these commands:

```bash
# This should work after you create the repo
git push -u origin main
```

## Step 3: Set Up NPM Token (for automated publishing)

1. Go to https://www.npmjs.com/settings/tokens
2. Click "Generate New Token" → "Classic Token"
3. Choose "Publish" scope
4. Copy the token
5. Go to your GitHub repository settings
6. Navigate to "Secrets and variables" → "Actions"
7. Click "New repository secret"
8. Name: `NPM_TOKEN`
9. Value: Paste your NPM token
10. Click "Add secret"

## Step 4: Trigger First Release

Once the repository is set up and NPM token is configured:

```bash
# This will trigger the GitHub Actions workflow
# which will create a Release PR
git push origin main
```

## Step 5: Complete First Release

1. GitHub Actions will create a "Release" pull request
2. Review and merge that PR
3. This will trigger the automatic publish to NPM
4. Your package will be available as `npx awn` globally!

## Repository Structure

Your repository will be available at:
- **Homepage**: https://github.com/MuhammedAlkhudiry/awn
- **Issues**: https://github.com/MuhammedAlkhudiry/awn/issues
- **NPM Package**: https://www.npmjs.com/package/awn (after publishing)

## Current Status

✅ Git repository initialized
✅ All files committed locally  
✅ Remote added (https://github.com/MuhammedAlkhudiry/awn.git)
⏳ **Next**: Create repository on GitHub and push

## Commands Ready to Run

After creating the GitHub repository:

```bash
git push -u origin main
```

This will upload your entire AWN project to GitHub!