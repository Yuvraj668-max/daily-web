let teaFlavors = ["green tea", "black tea", "oolong tea"];
// let teaFlavor = new Array("green tea", "black tea", "oolong tea");
let firsttea = teaFlavors[0];

let cities = ["london", "tokyo", "paris", "new york"];
let favouriteCity = cities[2];

let teaType = ["herbal tea", "white tea", "masala chai"];
teaType[1] = "jasmine tea";

let citiesVisited = ["mumbai", "sydney"];

citiesVisited.push("berlin");
// console.log(citiesVisited);

let teaOrders = ["chai", "iced tea", "matcha", "earl grey"];
const lastOrder = teaOrders.pop();
// console.log(teaOrders);

let popularTeas = ["green tea", "oolong tea", "chai"];
let softCopyTeas = popularTeas;
popularTeas.pop();
// console.log(softCopyTeas);
// console.log(popularTeas);
// array is a object so changing in a array cahnges in the actual array too

let topCities = ["berlin", "singapore", "new york"];
let hardcopycities = [...topCities];
topCities.pop();
// console.log(topCities);
// console.log(hardcopycities);

let europeanCities = ["paris", "rome"];
let asianCities = ["tokyo", "bangkok"];
let worldCities = europeanCities.concat(asianCities);
console.log(worldCities);
