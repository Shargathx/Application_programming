/*

Development versus production
Development optimizes for fast feedback and debugging, whereas production optimizes for performance through minification and bundling.

--------------------------------

npm run build, dist and npm run preview
npm run build compiles production assets into a dist folder, and npm run preview lets you test that built package locally.

--------------------------------

Vite's base setting for a repository hosted on GitHub Pages
Configuring the base option in Vite ensures asset file paths align correctly with subdirectories on GitHub Pages.

--------------------------------

Deploying the build through GitHub Actions
Automating the process of building and publishing code directly to hosting servers via GitHub workflows.

--------------------------------

Why HashRouter is useful on GitHub Pages
Hash routing handles client-side URLs using hashes (#/), bypassing 404 errors when pages are refreshed on static hosts.

--------------------------------

Why GitHub Pages cannot run the future Express backend
GitHub Pages only serves static files, while an Express backend requires an active Node.js server runtime environment.

--------------------------------

Frontend environment variables are visible to users and cannot hold secrets
Because frontend code runs entirely in the browser, any bundled environment variable can be viewed by users.   

*/
