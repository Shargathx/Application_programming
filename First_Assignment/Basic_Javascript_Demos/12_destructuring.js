const user = { name: "Charlie", age: 25 };
const updatedUser = { ...user, age: 26 }; // Shallow copy with update
// The spread operator (...user) unpacks all enumerable properties from the original user object into a new object (updatedUser)
// Placing "age: 26" after the spread syntax overrides the original age value (changing it from 25 to 26) while keeping name: "Charlie" intact.

const [first, ...rest] = [10, 20, 30];
console.log(first); // 10
console.log(rest); // [20, 30]

// Positional Unpacking: const [first, ...rest] = [10, 20, 30]; extracts elements from an array based on their index position.
// Targeting First Items: The variable first captures the initial element of the array, resulting in 10.
// Gathering the Remainder: The rest operator (...rest) collects all remaining unpacked elements into a brand-new array, resulting in [20, 30].