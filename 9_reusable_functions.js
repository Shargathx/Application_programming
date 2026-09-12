function calculateTotal(price, tax = 0.2) {
  return price + (price * tax);
}

const total = calculateTotal(100);
console.log(total); // 120