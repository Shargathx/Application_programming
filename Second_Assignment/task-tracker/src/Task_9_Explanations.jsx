/*

Client-side routing
Navigation occurs completely inside the browser without forcing full-page reloads from the server.

--------------------------------

Installing React Router and wrapping the application in a router
Installing the routing package and enclosing the root app component to activate navigation state.

Routes, Route, Link and NavLink
Essential building blocks used to manage path matching, render views, and build navigation links.

--------------------------------

BrowserRouter versus HashRouter
BrowserRouter uses standard clean URLs, whereas HashRouter uses hash-based URLs required for GitHub Pages deployments.

--------------------------------

Dynamic routes and useParams
Configuring variable paths like /:taskId and reading those route parameters using the useParams hook. 

--------------------------------

URL parameters are strings
Values extracted from route parameters are always treated as strings and may need parsing (e.g., into numbers).

--------------------------------

Handling unknown routes and unknown task IDs
Setting up fallbacks for unmatched URL paths (*) and displaying proper messages for missing task items. 

*/
