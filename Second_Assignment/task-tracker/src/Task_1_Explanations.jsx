/* What is React?
React is a popular, open-source JavaScript library developed by Meta (Facebook) for building user interfaces,
primarily for single-page applications. It allows developers to build reusable UI components.

-------------------------------

What is a component?
A component is an independent, reusable piece of UI.
It acts like a JavaScript function that accepts inputs (called "props") and returns
HTML-like code (JSX) describing what should appear on the screen.

-------------------------------

What is Vite?
Vite is a modern, ultra-fast frontend build tool and development server created by Evan You.
It significantly improves the frontend development experience by providing lightning-fast
server start and instant Hot Module Replacement (HMR).

-------------------------------

What roles do Node.js and npm play when developing a React application?
Node.js provides the runtime environment to execute JavaScript outside the browser (needed for development tools),
while npm (Node Package Manager) handles downloading, installing, and managing project dependencies and running scripts.

-------------------------------

package.json: A manifest file listing project metadata, scripts, and dependencies.

node_modules: The local directory where all installed third-party packages and dependencies are stored.

index.html: The main entry point HTML file loaded by the browser, which contains the root container where React mounts the app.

src/main.jsx: The JavaScript entry point that connects the React app to the DOM root element in index.html.

src/App.jsx: The root React component of your application where you typically start laying out your app structure.

-------------------------------

Installing dependencies (npm install) reads package.json and downloads all required packages into node_modules.
You only need to do this once when setting up or pulling a project.

Starting the development server (npm run dev) spins up a local web server so you can view, test,
and live-edit your application in real time in the browser.

*/