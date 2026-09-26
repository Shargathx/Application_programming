/*

Briefly recap async, await, and try/catch
async marks a function as asynchronous, allowing it to return a Promise.
await pauses the execution of the async function until the Promise settles (resolves or rejects).
try/catch blocks wrap asynchronous operations to gracefully handle and intercept runtime errors or rejected promises.

--------------------------------------------------

What is the difference between a missing file and invalid JSON?
A missing file means the file path does not exist on disk yet (an operating system-level absence).
Invalid JSON means the file does exist, but its contents are syntactically malformed and cannot be parsed into a JavaScript object.

--------------------------------------------------

How can the error code ENOENT identify a missing file?
When Node.js file system operations (fs/promises) fail because a file or directory cannot be found,
they throw an error object containing a specific code property: ENOENT (standing for "Error NO ENTry").

--------------------------------------------------

Why should other errors not silently return an empty array?
Returning an empty array for all errors would hide critical bugs like permission denials (EACCES), hardware read failures,
or unexpected syntax problems. Other errors must be thrown or logged so they can be diagnosed properly.

--------------------------------------------------

Why must corrupted data not be automatically overwritten?
Automatically wiping or overwriting corrupted files with an empty array or default state destroys user data permanently.
Corrupted files require explicit developer or user intervention so they can fix or recover the malformed data.

*/
