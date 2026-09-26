/*

What middleware is and why its order matters
Middleware functions are blocks of code that have access to the request object (req), response object (res),
and the next middleware function in the application’s request-response cycle.
Order matters because Express executes middleware sequentially in the exact order they are defined in the code.

----------------------------------------

next()
The next() function is a router function that, when invoked,
passes control over to the next matching middleware or route handler in the chain.

----------------------------------------

Request logging
Request logging involves recording details about incoming HTTP requests (such as the method, URL, and timestamp) for monitoring, debugging, and auditing.

----------------------------------------

Middleware for routes that do not exist
A catch-all middleware function placed at the bottom of the route stack handles unrecognized endpoints, typically returning a 404 status.

----------------------------------------

Express error-handling middleware
Error-handling middleware functions are defined with four arguments instead of three: (err, req, res, next).
Express recognizes them specifically as error handlers and routes uncaught errors to them.

----------------------------------------

Validation errors versus unexpected server errors
Validation errors stem from invalid input provided by the client (resulting in a 400 status),
whereas unexpected server errors are internal bugs, failures, or unhandled exceptions (resulting in a 500 status).

*/
