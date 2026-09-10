const products = [
    { name: "Laptop", price: 1000 },
    { name: "Phone", price: 600 },
    { name: "Headphones", price: 100 },
    { name: "Mouse", price: 30 }
];

// transform every product into its name
const names = products.map(product => product.name);

// get all products costing more than 500
const expensive = products.filter(product => product.price > 500);

//  get the first product costing more than 500
const firstExpensive = products.find(product => product.price > 500);
const allExpensives = products.filter(product => product.price > 500)
    .map(product => ({
        name: product.name,
        price: product.price
    }));

const missing = products.find(product => product.price > 2000);

console.log("Names:", names);
console.log("Expensive:", expensive);
console.log("First expensive:", firstExpensive);
console.log("All expensive items in range:", allExpensives);
console.log("Missing:", missing ?? "No items in price range found!");