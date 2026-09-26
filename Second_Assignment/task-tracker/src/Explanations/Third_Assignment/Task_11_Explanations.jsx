/*

What an API integration test checks
API integration tests check that different modules and layers of an application work together correctly,
ensuring that requests, business logic, and routing handle data properly.

--------------------------------------------------

Vitest and Supertest
Vitest is a testing framework used to run tests and assertions, while Supertest is a library
that allows you to test HTTP serversby simulating requests without spinning up a live network socket.

--------------------------------------------------

Checking status codes and response bodies
Checking status codes ensures the server responds with the correct outcome indicator (such as 200, 201, or 404),
and verifying response bodies ensures the returned data structures and error payloads match expectations.

--------------------------------------------------

Testing valid and invalid inputs
Testing valid inputs ensures that correct data payloads succeed, while testing invalid inputs ensures that malformed or empty
data is gracefully rejected with appropriate error codes.

--------------------------------------------------

Why tests must start with predictable data
Tests must start with predictable data so that they remain independent and deterministic,
preventing test failures caused by residual state left over from previous executions.

--------------------------------------------------

Why app is exported separately from app.listen()
Exporting the Express app instance separately from app.listen() allows testing libraries to import
the app and run HTTP assertions directly in-memory without binding ports or conflicting with active server instances.

*/
