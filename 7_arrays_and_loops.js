const fruits = ["apple", "banana"];
fruits.push("orange"); // Adds to end of the array

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

for (const fruit of fruits) {
  if (fruit === "banana") break;
  console.log(fruit);
}