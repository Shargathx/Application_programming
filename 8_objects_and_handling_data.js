// 1. Creating an object and reading properties
const user = { 
  name: "Bob", 
  age: 0, // Note: 0 is a valid number, but it's a "falsy" value!
  profile: { role: "admin" } 
};

// Reading with dot notation or bracket notation
console.log(user.name);          // "Bob"
console.log(user["age"]);        // 0

// What happens if a property doesn't exist?
console.log(user.email);         // undefined (it doesn't crash, just returns undefined)

// 2. Optional Chaining (?.) for safe nested access
// If 'address' didn't exist, user.address.city would normally crash your app.
// The (?.) safely stops and returns undefined instead:
console.log(user.address?.city); // undefined

// 3. Nullish Coalescing (??) vs. Logical OR (||)
const userScore = 0;

// The || operator treats 0, false, and "" as "empty" and triggers the fallback incorrectly:
console.log(userScore || 50);    // 50 (Oops! The user's score was actually 0, but it got replaced)

// The ?? operator ONLY falls back if the value is strictly `null` or `undefined`:
console.log(userScore ?? 50);    // 0 (Correct! It keeps the 0 score)
console.log(user.email ?? "N/A"); // "N/A" (Triggers fallback because email is undefined)