const age = 20;
const hasId = true;

if (age >= 18 && hasId) {
  console.log("Access granted");
} else {
  console.log("Access denied");
}

const status = age >= 18 ? "Adult" : "Minor";
console.log(status); // "Adult"