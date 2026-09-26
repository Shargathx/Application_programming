/*

Reading a collection
Reading a collection refers to fetching an entire list of resources (such as retrieving all available tasks from an array or database).

----------------------------------------

req.params versus req.query
req.params captures route parameters defined with a colon (e.g., /:id),
while req.query captures key-value pairs appended after a question mark for filtering or options.

----------------------------------------

Converting strings to the intended data type
Express handles all parameters and query strings as text strings,
so they must be explicitly converted (e.g., using Number() or strict comparisons) to function correctly.

----------------------------------------

Why the string "false" is truthy in JavaScript
In JavaScript conditions, any non-empty string evaluates to a truthy value (Boolean("false") is true),
meaning you must explicitly check the literal text value rather than relying on standard truthiness.

----------------------------------------

Handling a valid ID that does not exist
If a client requests an ID that conforms to the correct format but is missing from your collection,
the server should explicitly respond with a 404 Not Found status code.

*/
