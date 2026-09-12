const rawName = "  Alice Smith  ";
const cleanName = rawName.trim().toLowerCase();

console.log(`Hello, ${cleanName}! Length: ${cleanName.length}`);
console.log(cleanName.includes("alice")); // true