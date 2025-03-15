let sum = 0;

let i = 0;
while (i <= 5) {
  sum += i;
  i++;
}
// console.log(sum);

let countdown = [];
let j = 5;

while (j >= 1) {
  countdown.push(j);
  j--;
}
// console.log(countdown);
// let favouriteTea = [];
// let tea;
// do {
//   tea = prompt(`enter a tea (type "stop" to finish)`);
//   if (tea != "stop") {
//     favouriteTea.push(tea);
//   }
// } while (tea != "stop");
// console.log(favouriteTea);

let total = 0;
let k = 1;
do {
  total += k;
  k++;
} while (k <= 3);
console.log(total);

let arr = [2, 4, 6];
let multupliedNumbers = [];
let x = 0;

for (x = 0; x < arr.length; x++) {
  multupliedNumbers.push(arr[x] * 2);
}
// console.log(multupliedNumbers);
let cities = ["paris", "new york", "tokyo", "london"];
let citylist = [];

for (let y = 0; y < cities.length; y++) {
  citylist.push(cities[y]);
}
// console.log(citylist);
