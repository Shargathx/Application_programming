/*

Frontend and backend as separate processes
The frontend and backend run as independent applications (often on different ports during development),
where the frontend handles the user interface and the backend manages business logic and data storage.

----------------------------------------

Different origins and why CORS may be needed
Browsers enforce the Same-Origin Policy, blocking frontend code from making requests to a different domain,
port, or protocol unless the backend explicitly allows it using CORS (Cross-Origin Resource Sharing).

----------------------------------------

Configuring the allowed frontend origin on the backend
You can configure CORS on the backend using the `cors` middleware package to specify which frontend domains
or localhost URLs are permitted to access the API.

----------------------------------------

Vite environment variables and VITE_API_URL
Vite exposes environment variables to client-side code only if they are prefixed with `VITE_`,
allowing you to safely configure things like the backend API base URL (e.g., `VITE_API_URL`).

----------------------------------------

Why deployed frontend code cannot use your computer's localhost
When a frontend app is deployed to a public server, `localhost` refers to whichever user's device is
currently viewing the page, not the server hosting your backend.

----------------------------------------

Why changing a frontend environment variable requires rebuilding the deployed frontend
Vite embeds environment variables directly into the static bundle during the build step,
meaning changes won't take effect until the app is rebuilt.

----------------------------------------

Sending JSON with fetch
The native `fetch` API is used to make HTTP requests, where you specify `method: 'POST'`, include a `Content-Type: application/json` header,
and serialize the body using `JSON.stringify()`.

*/
