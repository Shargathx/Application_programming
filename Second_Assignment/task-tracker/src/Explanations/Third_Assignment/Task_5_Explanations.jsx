/*

What Express adds to Node.js
Express provides a robust framework, simplified routing, and middleware capabilities on top of raw Node.js to manage HTTP requests more efficiently.

--------------------------------

Installing Express
Express is added to a project via the npm registry by executing the npm install express command in the terminal.

--------------------------------

Creating an Express application
An Express application instance is instantiated by importing the express package and invoking it as a function.

--------------------------------

req, res, res.json(), and app.listen()
The req object represents the incoming HTTP request, res handles the outgoing response,
res.json() sends a JSON-serialized response body, and app.listen() starts the server on a specified port.

--------------------------------

Ports and localhost
Ports are specific communication endpoints on a network, and localhost (127.0.0.1) is the standard hostname
used to access services running on your own computer.

--------------------------------

Separating the exported app from the file that starts listening
Decoupling the Express application definition from the server startup script makes the app easier to test and modularize.   

*/
