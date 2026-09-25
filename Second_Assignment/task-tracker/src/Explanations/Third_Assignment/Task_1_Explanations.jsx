/*

Node.js as a Runtime
An open-source, cross-platform JavaScript runtime built on Chrome's V8 engine that executes JS code outside the browser.

Browser vs. Server-side JS
Browser JS interacts with the DOM and UI via window or document, while server-side Node.js interacts with the OS, file system, and network.

No document Object
The document object is part of the browser's HTML DOM API; Node.js runs on a machine or server without a visual browser window or DOM tree.

Why No Auto Web Server
Running a JS file executes instructions sequentially and exits; creating a server requires explicitly
importing a module (like http) and calling .listen() to keep the port open.

Version Checking
Run node -v and npm -v in the terminal to verify installations.

*/
