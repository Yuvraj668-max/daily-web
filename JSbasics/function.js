function makeTea(typeofTea) {
  return `Making ${typeofTea}`;
}

let greet = makeTea("green tea");

// console.log(greet);

function teaorder(teatype) {
  function confirmOrder() {
    return `order confired for chai`;
  }
  return confirmOrder();
}
let orderConfirmation = teaorder("green tea");
// console.log(orderConfirmation);

const calculateTotal = (price, quantity) => {
  return price * quantity;
};
let tottal = calculateTotal(100, 200);
console.log(tottal);
