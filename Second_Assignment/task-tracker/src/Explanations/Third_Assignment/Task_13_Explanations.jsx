/*

What is an environment variable?
An environment variable is a dynamic, external value stored outside of the source code that influences how a running
application behaves depending on its deployment environment.

--------------------------------------------------

How does Node.js read values through process.env?
Node.js reads environment variables through the global process.env object,which acts as an interface to the operating system environment variables or values loaded via configuration tools.

--------------------------------------------------

Why are environment variable values strings?
Environment variable values are always passed as strings because operating systems store environment data as text,
meaning developers must manually parse booleans or numbers when necessary.

--------------------------------------------------

Why should configuration be separate from application logic?
Configuration is separated from application logic to ensure code portability and security,
allowing the exact same application to run in different environments by modifying external variables rather than hardcoding values.

--------------------------------------------------

What is .env.example, and why should secrets stay out of Git?
A .env.example file acts as a template documenting required configuration keys without exposing sensitive data,
while actual secrets must stay out of Git to prevent security breaches and unauthorized access.

*/
