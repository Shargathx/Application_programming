const products = [
    { name: "Laptop", price: 1000 },
    { name: "Phone", price: 600 },
    { name: "Tablet", price: 600 },
    { name: "Mouse", price: 30 }
];

const result = products
    .filter(product => product.price >= 600)
    .map(product => product.name);

const first = products.find(product => product.price >= 600);

console.log(result);
console.log(first.name);