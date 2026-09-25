/*

"type": "module" in package.json
Adding this setting configures Node.js to treat JavaScript files as ECMAScript modules, enabling standard import and export statements.

--------------------------------

Named exports and imports
Named exports allow you to export multiple values or functions from a module by name, which can then be
selectively imported into other files using curly braces.

--------------------------------

Relative import paths and .js extensions
Local module imports require explicit relative paths (like ./ or ../) and often demand the .js file extension in Node.js ES modules.

--------------------------------

Separating data, processing functions, and startup code
Good architecture keeps raw data, business logic functions, and application execution scripts isolated from one another for better maintainability.

--------------------------------

Returning values instead of only logging them
Functions should return processed results rather than printing them to the console directly, making them reusable, predictable, and testable.   

*/
