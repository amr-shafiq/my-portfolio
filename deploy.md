# Deployment Guide

## 🚀 Deploy to GitHub Pages

### Step 1: Push to GitHub
First, make sure your code is pushed to GitHub:

```bash
git add .
git commit -m "Add portfolio website"
git push origin main
```

### Step 2: Deploy
Run the deployment command:

```bash
npm run deploy
```

### Step 3: Configure GitHub Pages
1. Go to your GitHub repository
2. Click on "Settings"
3. Scroll down to "Pages" section
4. Under "Source", select "Deploy from a branch"
5. Select "gh-pages" branch and "/ (root)" folder
6. Click "Save"

### Step 4: Access Your Portfolio
Your portfolio will be available at:
`https://amr-shafiq.github.io/my-portfolio`

## 🔧 Troubleshooting

### If deployment fails:
1. Make sure you have the correct repository name in `package.json`
2. Check that `gh-pages` is installed: `npm install gh-pages --save-dev`
3. Verify your GitHub repository exists and is accessible

### If styles don't load:
1. Make sure Tailwind CSS is properly configured
2. Check that the build process completed successfully
3. Clear browser cache and try again

## 📝 Customization Before Deployment

Before deploying, make sure to update:

1. **Personal Information** in all component files
2. **GitHub username** in `Projects.js` (line 18)
3. **Contact information** in `Contact.js` and `Footer.js`
4. **Social media links** throughout the components
5. **Experience and education** in `About.js`
6. **Skills and proficiency levels** in `Skills.js`

## 🌐 Alternative Deployment Options

### Netlify
1. Connect your GitHub repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `build`

### Vercel
1. Import your GitHub repository to Vercel
2. It will auto-detect React and deploy

### Firebase Hosting
1. Install Firebase CLI: `npm install -g firebase-tools`
2. Initialize: `firebase init hosting`
3. Build: `npm run build`
4. Deploy: `firebase deploy` 