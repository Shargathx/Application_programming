/*
Why in-memory data disappears on restart
In-memory data is stored in volatile RAM, which requires continuous electrical power,
meaning all variables and arrays are wiped clean whenever the application process restarts.

--------------------------------------------------

Reading and writing with node:fs/promises
The node:fs/promises module provides asynchronous file system operations using JavaScript promises,
allowing you to read files with readFile and write files with writeFile without blocking the event loop.

--------------------------------------------------

JSON.parse() and JSON.stringify()
JSON.stringify() converts JavaScript objects or arrays into a string format suitable for text file storage,
while JSON.parse() transforms raw file strings back into usable JavaScript objects.

--------------------------------------------------

Handling a missing or invalid file
Handling a missing or invalid file involves wrapping file reads in try/catch blocks to gracefully initialize a default
empty dataset or fallback state if the file does not exist or contains corrupted JSON.

--------------------------------------------------

Why concurrent file writes need care
Concurrent file writes need care because multiple asynchronous write operations targeting the same file at the same time can race,
leading to corrupted data, overwrites, or partially written text.

--------------------------------------------------

Why a database is preferable for a larger application
A database is preferable for larger applications because it provides built-in concurrency control, atomic transactions,
efficient indexing, and scalability that flat JSON files cannot support under heavy multi-user loads.

*/
