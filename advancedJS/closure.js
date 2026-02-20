function outer() {
  let counter = 4;
  return function () {
    counter++;
    return counter;
  };
}
let inc = outer();

console.log(inc());
console.log(inc());
// console.log(inc());
