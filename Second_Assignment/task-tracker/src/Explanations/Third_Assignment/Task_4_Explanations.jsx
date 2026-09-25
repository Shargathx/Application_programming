/*

Client and server
The client is the application or frontend (like a browser or React app) that initiates communication,
while the server is the backend system that processes data and responds to client requests.

--------------------------------

Requests and responses
Communication over the web relies on the client sending a request to the server, and the server processing it to return a corresponding response.

--------------------------------

URL, path, query string, headers, and body
A URL specifies the resource location, the path points to a specific endpoint, the query string provides optional key-value filters,
headers carry metadata, and the body contains the main payload data.

--------------------------------

GET, POST, PATCH, and DELETE
GET retrieves data, POST creates new data, PATCH modifies existing data partially, and DELETE removes data.

Status codes: 200, 201, 204, 400, 404, and 500
    200 means success,
    201 means resource created,
    204 means success with no content,
    400 means bad request,
    404 means not found,
    500 means a server error.

--------------------------------

JavaScript objects versus JSON text
A JavaScript object is a native data structure in code, whereas JSON is a lightweight text-based format formatted like a string for data transmission.

--------------------------------

Request Method: GET
URL / Path: /api/tasks/2
Response Status: 200 OK
Response Body:
{
  "id": 2,
  "title": "Practise React state",
  "completed": false
}

*/
