console.log(typeof "hello"); // "string"
console.log(typeof 42);      // "number"
console.log(typeof null); // "object" (famous JavaScript quirk)
console.log(typeof true);    // "boolean" (true or false)
console.log(Array.isArray([])); // true (the correct way to check if something is an array)

let score; 
console.log(score); // "undefined" (variable declared, but no value given yet)
let unassigned;
console.log(unassigned); // undefined
let emptyValue = null;
console.log(emptyValue); // "null" (intentionally set to "empty" or "no value")