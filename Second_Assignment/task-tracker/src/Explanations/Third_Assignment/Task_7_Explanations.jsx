/*

Creating a resource with POST
The POST HTTP method is used to send data to the server to create a new resource within a collection.

----------------------------------------

express.json()
express.json() is a built-in middleware function in Express that parses incoming requests with JSON payloads and populates req.body.

----------------------------------------

Content-Type: application/json
The Content-Type: application/json header tells the server that the data being sent in the request body is formatted as a JSON object.

----------------------------------------

Reading req.body
req.body contains the parsed data submitted by the client in the body of an HTTP request, made available by using body-parser middleware like express.json().

----------------------------------------

Why the backend must validate data even if React already validates it
The backend must validate data because client-side validation can easily be bypassed, and APIs can be called directly by users or external scripts.

----------------------------------------

Generating IDs on the server
Generating IDs on the server ensures uniqueness, prevents client-side tampering, and maintains data integrity across all incoming requests.

*/
