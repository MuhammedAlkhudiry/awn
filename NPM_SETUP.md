# NPM Publishing Setup

## Step 1: Create NPM Account & Token

1. **Create NPM Account** (if you don't have one):
   - Go to https://www.npmjs.com/signup
   - Sign up with your email

2. **Generate NPM Token**:
   - Go to https://www.npmjs.com/settings/tokens
   - Click "Generate New Token" → "Classic Token"
   - Choose **"Publish"** scope
   - Copy the generated token (starts with `npm_`)

## Step 2: Add NPM Token to GitHub

1. Go to your repository: https://github.com/MuhammedAlkhudiry/awn
2. Click "Settings" tab
3. In the sidebar, click "Secrets and variables" → "Actions"
4. Click "New repository secret"
5. **Name**: `NPM_TOKEN`
6. **Value**: Paste your NPM token from step 1
7. Click "Add secret"

## Step 3: Trigger Release Process

The GitHub Actions workflow is already configured. Here's what happens:

1. **When you push to main** (already done ✅):
   - Tests run automatically
   - If there are changesets, a "Release" PR is created

2. **Check for Release PR**:
   - Go to https://github.com/MuhammedAlkhudiry/awn/pulls
   - Look for a PR titled something like "Version Packages"

3. **Merge Release PR**:
   - Review the changelog
   - Merge the PR
   - This triggers automatic publishing to NPM

## Step 4: Verify Publication

After merging the release PR:

1. **Check GitHub Actions**:
   - Go to https://github.com/MuhammedAlkhudiry/awn/actions
   - Verify the workflow completed successfully

2. **Check NPM**:
   - Your package will be available at: https://www.npmjs.com/package/awn
   - Users can install with: `npm install -g awn`
   - Or use directly: `npx awn search`

## Expected First Release

- **Version**: 1.0.0 (from initial changeset)
- **Package Name**: `awn`
- **Global CLI**: `awn` command
- **NPX Usage**: `npx awn add <utility>`

## Manual Publishing (Backup)

If automatic publishing doesn't work:

```bash
# Login to NPM
npm login

# Publish manually
npm run release
```

## Current Status

✅ Code pushed to GitHub
✅ GitHub Actions configured
✅ Package.json configured for NPM
⏳ **Next**: Add NPM_TOKEN secret and merge release PR

Your AWN library is ready for the world! 🚀